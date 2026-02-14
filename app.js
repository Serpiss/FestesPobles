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
    return;
  }

  items.forEach((f) => {
    const li = document.createElement('li');
    li.className = 'item';
    li.innerHTML = `
      <strong>${f.nombre}</strong><br>
      ${f.municipio} (${f.comarca})<br>
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
}

function renderFavoritos() {
  favoritosList.innerHTML = '';
  const favItems = fiestas.filter((f) => favoritos.has(f.id));
  if (!loggedIn) {
    favoritosList.innerHTML = '<li class="item">Inicia sesión para usar favoritos.</li>';
    return;
  }
  if (!favItems.length) {
    favoritosList.innerHTML = '<li class="item">No tienes fiestas favoritas todavía.</li>';
    return;
  }
  favItems.forEach((f) => {
    const li = document.createElement('li');
    li.className = 'item';
    li.textContent = `${f.nombre} · ${f.municipio}`;
    favoritosList.appendChild(li);
  });
}

function renderCalendar(items) {
  calendarList.innerHTML = '';
  const byDate = items
    .flatMap((f) => [
      { date: f.inicio, label: `Inicio · ${f.nombre}` },
      { date: f.fin, label: `Fin · ${f.nombre}` }
    ])
    .sort((a, b) => a.date.localeCompare(b.date));

  byDate.forEach((entry) => {
    const li = document.createElement('li');
    li.className = 'item';
    li.textContent = `${entry.date} — ${entry.label}`;
    calendarList.appendChild(li);
  });
}

function renderMapa(items) {
  mapa.innerHTML = '';
  items.forEach((f) => {
    const div = document.createElement('div');
    div.className = 'municipio';
    div.textContent = f.municipio;
    div.title = 'Clic para filtrar por municipio';
    div.addEventListener('click', () => {
      searchFilter.value = f.municipio;
      renderAll();
    });
    mapa.appendChild(div);
  });
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
