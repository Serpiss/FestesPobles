const fiestas = [
  {
    id: 'altea-moros',
    municipio: 'Altea',
    provincia: 'Alicante',
    comarca: 'Marina Baixa',
    nombre: 'Moros y Cristianos de Altea',
    inicio: '2026-09-20',
    fin: '2026-09-24'
  },
  {
    id: 'sueca-falles',
    municipio: 'Sueca',
    provincia: 'Valencia',
    comarca: 'Ribera Baixa',
    nombre: 'Falles de Sueca',
    inicio: '2026-03-15',
    fin: '2026-03-19'
  },
  {
    id: 'vila-real-patro',
    municipio: 'Vila-real',
    provincia: 'Castellón',
    comarca: 'Plana Baixa',
    nombre: 'Fiestas Patronales de San Pascual',
    inicio: '2026-05-10',
    fin: '2026-05-20'
  },
  {
    id: 'benifallim-patronals',
    municipio: 'Benifallim',
    provincia: 'Alicante',
    comarca: "L'Alcoià",
    nombre: 'Fiestas Patronales de Benifallim',
    inicio: '2026-08-12',
    fin: '2026-08-16'
  },
  {
    id: 'alqueria-asnar-patronals',
    municipio: "Alqueria d'Asnar",
    provincia: 'Alicante',
    comarca: 'El Comtat',
    nombre: "Fiestas Patronales de l'Alqueria d'Asnar",
    inicio: '2026-09-05',
    fin: '2026-09-09'
  },
  {
    id: 'guadassequies-patronals',
    municipio: 'Guadassequies',
    provincia: 'Valencia',
    comarca: "La Vall d'Albaida",
    nombre: 'Fiestas Patronales de Guadassequies',
    inicio: '2026-07-20',
    fin: '2026-07-25'
  },
  {
    id: 'confrides-patronals',
    municipio: 'Confrides',
    provincia: 'Alicante',
    comarca: 'La Marina Baixa',
    nombre: 'Fiestas Patronales de Confrides',
    inicio: '2026-08-20',
    fin: '2026-08-24'
  },
  {
    id: 'morella-sexenni',
    municipio: 'Morella',
    provincia: 'Castellón',
    comarca: 'Els Ports',
    nombre: 'Fiestas de Morella',
    inicio: '2026-08-15',
    fin: '2026-08-21'
  }
];

const provinciaFilter = document.getElementById('provinciaFilter');
const comarcaFilter = document.getElementById('comarcaFilter');
const mesFilter = document.getElementById('mesFilter');
const searchFilter = document.getElementById('searchFilter');
const fiestasList = document.getElementById('fiestasList');
const favoritosList = document.getElementById('favoritosList');
const calendarList = document.getElementById('calendarList');
const mapa = document.getElementById('mapa');
const loginBtn = document.getElementById('loginBtn');
const sessionState = document.getElementById('sessionState');

const displayState = {
  listado: false,
  calendario: false,
  mapa: false,
  favoritos: false
};

const DISPLAY_LIMIT = 4;

let loggedIn = false;
let favoritos = new Set(JSON.parse(localStorage.getItem('favoritos') || '[]'));

function uniqueValues(key) {
  return [...new Set(fiestas.map((f) => f[key]))].sort();
}

function fillFilters() {
  uniqueValues('provincia').forEach((v) => provinciaFilter.add(new Option(v, v)));
  uniqueValues('comarca').forEach((v) => comarcaFilter.add(new Option(v, v)));

  const months = [
    'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
    'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'
  ];
  months.forEach((name, index) => mesFilter.add(new Option(name, String(index + 1).padStart(2, '0'))));
}

function cleanMunicipioName(name) {
  return name.replace(/\s*,?\s*alicante$/i, '').trim();
}

function renderToggleButton(parent, sectionKey, totalItems) {
  const previousButton = parent.querySelector(`button[data-toggle-section="${sectionKey}"]`);
  if (previousButton) {
    previousButton.remove();
  }

  if (totalItems <= DISPLAY_LIMIT) {
    return;
  }

  const button = document.createElement('button');
  button.type = 'button';
  button.dataset.toggleSection = sectionKey;
  button.className = 'toggle-btn';
  button.textContent = displayState[sectionKey] ? 'Ver menos' : 'Ver más';
  button.addEventListener('click', () => {
    displayState[sectionKey] = !displayState[sectionKey];
    renderAll();
  });

  parent.appendChild(button);
}

function applyFilters() {
  return fiestas.filter((f) => {
    const search = searchFilter.value.trim().toLowerCase();
    const month = f.inicio.slice(5, 7);
    return (
      (!provinciaFilter.value || f.provincia === provinciaFilter.value) &&
      (!comarcaFilter.value || f.comarca === comarcaFilter.value) &&
      (!mesFilter.value || month === mesFilter.value) &&
      (!search || `${f.nombre} ${f.municipio}`.toLowerCase().includes(search))
    );
  });
}

function renderList(items) {
  fiestasList.innerHTML = '';
  if (!items.length) {
    fiestasList.innerHTML = '<li class="item">No hay resultados con estos filtros.</li>';
    renderToggleButton(fiestasList.parentElement, 'listado', 0);
    return;
  }

  const visibleItems = displayState.listado ? items : items.slice(0, DISPLAY_LIMIT);

  visibleItems.forEach((f) => {
    const li = document.createElement('li');
    li.className = 'item';
    li.innerHTML = `
      <strong>${f.nombre}</strong><br>
      ${cleanMunicipioName(f.municipio)} (${f.comarca}, ${f.provincia})<br>
      ${f.inicio} → ${f.fin}
    `;

    if (loggedIn) {
      const favBtn = document.createElement('button');
      favBtn.textContent = favoritos.has(f.id) ? '★ Quitar favorito' : '☆ Añadir favorito';
      favBtn.addEventListener('click', () => {
        if (favoritos.has(f.id)) {
          favoritos.delete(f.id);
        } else {
          favoritos.add(f.id);
        }
        localStorage.setItem('favoritos', JSON.stringify([...favoritos]));
        renderAll();
      });
      li.appendChild(document.createElement('br'));
      li.appendChild(favBtn);
    }

    fiestasList.appendChild(li);
  });

  renderToggleButton(fiestasList.parentElement, 'listado', items.length);
}

function renderFavoritos() {
  favoritosList.innerHTML = '';
  const favItems = fiestas.filter((f) => favoritos.has(f.id));
  if (!loggedIn) {
    favoritosList.innerHTML = '<li class="item">Inicia sesión para usar favoritos.</li>';
    renderToggleButton(favoritosList.parentElement, 'favoritos', 0);
    return;
  }
  if (!favItems.length) {
    favoritosList.innerHTML = '<li class="item">No tienes fiestas favoritas todavía.</li>';
    renderToggleButton(favoritosList.parentElement, 'favoritos', 0);
    return;
  }

  const visibleItems = displayState.favoritos ? favItems : favItems.slice(0, DISPLAY_LIMIT);
  visibleItems.forEach((f) => {
    const li = document.createElement('li');
    li.className = 'item';
    li.textContent = `${f.nombre} · ${cleanMunicipioName(f.municipio)}`;
    favoritosList.appendChild(li);
  });

  renderToggleButton(favoritosList.parentElement, 'favoritos', favItems.length);
}

function renderCalendar(items) {
  calendarList.innerHTML = '';
  const byDate = items
    .flatMap((f) => [
      { date: f.inicio, label: `Inicio · ${f.nombre}` },
      { date: f.fin, label: `Fin · ${f.nombre}` }
    ])
    .sort((a, b) => a.date.localeCompare(b.date));

  const visibleItems = displayState.calendario ? byDate : byDate.slice(0, DISPLAY_LIMIT);

  visibleItems.forEach((entry) => {
    const li = document.createElement('li');
    li.className = 'item';
    li.textContent = `${entry.date} — ${entry.label}`;
    calendarList.appendChild(li);
  });

  renderToggleButton(calendarList.parentElement, 'calendario', byDate.length);
}

function renderMapa(items) {
  mapa.innerHTML = '';
  const visibleItems = displayState.mapa ? items : items.slice(0, DISPLAY_LIMIT);

  visibleItems.forEach((f) => {
    const div = document.createElement('div');
    div.className = 'municipio';
    div.textContent = `${cleanMunicipioName(f.municipio)}\n${f.provincia}`;
    div.title = 'Clic para filtrar por municipio';
    div.addEventListener('click', () => {
      searchFilter.value = f.municipio;
      renderAll();
    });
    mapa.appendChild(div);
  });

  renderToggleButton(mapa.parentElement, 'mapa', items.length);
}

function renderAll() {
  const filtered = applyFilters();
  renderList(filtered);
  renderFavoritos();
  renderCalendar(filtered);
  renderMapa(filtered);
}

[provinciaFilter, comarcaFilter, mesFilter, searchFilter].forEach((el) => {
  el.addEventListener('input', renderAll);
});

loginBtn.addEventListener('click', () => {
  loggedIn = !loggedIn;
  sessionState.textContent = loggedIn
    ? 'Sesión iniciada. Puedes guardar favoritos.'
    : 'No has iniciado sesión.';
  loginBtn.textContent = loggedIn ? 'Cerrar sesión (demo)' : 'Iniciar sesión (demo)';
  renderAll();
});

fillFilters();
renderAll();
