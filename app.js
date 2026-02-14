const fiestas = [
  {
    id: 'agres-sant-miquel',
    municipio: 'Agres',
    provincia: 'Alicante',
    comarca: 'El Comtat',
    nombre: 'Fiestas de Sant Miquel',
    inicio: '2026-09-27',
    fin: '2026-09-30'
  },
  {
    id: 'alcocer-planes-patronales',
    municipio: 'Alcosser de Planes',
    provincia: 'Alicante',
    comarca: 'El Comtat',
    nombre: 'Fiestas Patronales de Alcosser de Planes',
    inicio: '2026-08-20',
    fin: '2026-08-24'
  },
  {
    id: 'alcoleja-sant-vicent',
    municipio: 'Alcoleja',
    provincia: 'Alicante',
    comarca: 'El Comtat',
    nombre: 'Fiestas de Sant Vicent Ferrer',
    inicio: '2026-04-24',
    fin: '2026-04-27'
  },
  {
    id: 'alfafara-moros-cristians',
    municipio: 'Alfafara',
    provincia: 'Alicante',
    comarca: 'El Comtat',
    nombre: 'Moros i Cristians d\'Alfafara',
    inicio: '2026-08-13',
    fin: '2026-08-17'
  },
  {
    id: 'almudaina-patronales',
    municipio: 'Almudaina',
    provincia: 'Alicante',
    comarca: 'El Comtat',
    nombre: 'Fiestas Patronales de Almudaina',
    inicio: '2026-08-10',
    fin: '2026-08-13'
  },
  {
    id: 'balones-sant-francesc',
    municipio: 'Balones',
    provincia: 'Alicante',
    comarca: 'El Comtat',
    nombre: 'Fiestas de Sant Francesc',
    inicio: '2026-10-02',
    fin: '2026-10-05'
  },
  {
    id: 'benasau-patronales',
    municipio: 'Benasau',
    provincia: 'Alicante',
    comarca: 'El Comtat',
    nombre: 'Fiestas Patronales de Benasau',
    inicio: '2026-08-14',
    fin: '2026-08-18'
  },
  {
    id: 'beniarres-moros-cristians',
    municipio: 'Beniarrés',
    provincia: 'Alicante',
    comarca: 'El Comtat',
    nombre: 'Moros y Cristianos de Beniarrés',
    inicio: '2026-08-27',
    fin: '2026-08-31'
  },
  {
    id: 'benifallim-patronales',
    municipio: 'Benifallim',
    provincia: 'Alicante',
    comarca: 'El Comtat',
    nombre: 'Fiestas Patronales de Benifallim',
    inicio: '2026-09-11',
    fin: '2026-09-14'
  },
  {
    id: 'benilloba-moros-cristians',
    municipio: 'Benilloba',
    provincia: 'Alicante',
    comarca: 'El Comtat',
    nombre: 'Moros y Cristianos de Benilloba',
    inicio: '2026-08-11',
    fin: '2026-08-16'
  },
  {
    id: 'benillup-patronales',
    municipio: 'Benillup',
    provincia: 'Alicante',
    comarca: 'El Comtat',
    nombre: 'Fiestas Patronales de Benillup',
    inicio: '2026-09-04',
    fin: '2026-09-07'
  },
  {
    id: 'benimarfull-patronales',
    municipio: 'Benimarfull',
    provincia: 'Alicante',
    comarca: 'El Comtat',
    nombre: 'Fiestas Patronales de Benimarfull',
    inicio: '2026-08-21',
    fin: '2026-08-24'
  },
  {
    id: 'benimassot-santa-ana',
    municipio: 'Benimassot',
    provincia: 'Alicante',
    comarca: 'El Comtat',
    nombre: 'Fiestas de Santa Ana',
    inicio: '2026-07-24',
    fin: '2026-07-27'
  },
  {
    id: 'cocentaina-mare-deu',
    municipio: 'Cocentaina',
    provincia: 'Alicante',
    comarca: 'El Comtat',
    nombre: 'Fiestas de la Mare de Déu del Miracle',
    inicio: '2026-04-17',
    fin: '2026-04-21'
  },
  {
    id: 'fageca-patronales',
    municipio: 'Fageca',
    provincia: 'Alicante',
    comarca: 'El Comtat',
    nombre: 'Fiestas Patronales de Fageca',
    inicio: '2026-08-07',
    fin: '2026-08-10'
  },
  {
    id: 'famorca-patronales',
    municipio: 'Famorca',
    provincia: 'Alicante',
    comarca: 'El Comtat',
    nombre: 'Fiestas Patronales de Famorca',
    inicio: '2026-09-18',
    fin: '2026-09-21'
  },
  {
    id: 'gaianes-moros-cristians',
    municipio: 'Gaianes',
    provincia: 'Alicante',
    comarca: 'El Comtat',
    nombre: 'Moros y Cristianos de Gaianes',
    inicio: '2026-07-10',
    fin: '2026-07-13'
  },
  {
    id: 'gorga-patronales',
    municipio: 'Gorga',
    provincia: 'Alicante',
    comarca: 'El Comtat',
    nombre: 'Fiestas Patronales de Gorga',
    inicio: '2026-08-28',
    fin: '2026-08-31'
  },
  {
    id: 'millena-patronales',
    municipio: 'Millena',
    provincia: 'Alicante',
    comarca: 'El Comtat',
    nombre: 'Fiestas Patronales de Millena',
    inicio: '2026-09-25',
    fin: '2026-09-28'
  },
  {
    id: 'muro-alcoi-moros-cristians',
    municipio: 'Muro de Alcoy',
    provincia: 'Alicante',
    comarca: 'El Comtat',
    nombre: 'Moros y Cristianos de Muro de Alcoy',
    inicio: '2026-05-08',
    fin: '2026-05-12'
  },
  {
    id: 'lorxa-patronales',
    municipio: 'L\'Orxa',
    provincia: 'Alicante',
    comarca: 'El Comtat',
    nombre: 'Fiestas Patronales de L\'Orxa',
    inicio: '2026-08-05',
    fin: '2026-08-08'
  },
  {
    id: 'planes-patronales',
    municipio: 'Planes',
    provincia: 'Alicante',
    comarca: 'El Comtat',
    nombre: 'Fiestas Patronales de Planes',
    inicio: '2026-08-01',
    fin: '2026-08-04'
  },
  {
    id: 'quatretondeta-patronales',
    municipio: 'Quatretondeta',
    provincia: 'Alicante',
    comarca: 'El Comtat',
    nombre: 'Fiestas Patronales de Quatretondeta',
    inicio: '2026-09-10',
    fin: '2026-09-13'
  },
  {
    id: 'tollos-patronales',
    municipio: 'Tollos',
    provincia: 'Alicante',
    comarca: 'El Comtat',
    nombre: 'Fiestas Patronales de Tollos',
    inicio: '2026-08-22',
    fin: '2026-08-25'
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

function normalizeText(value) {
  return value
    .toLowerCase()
    .normalize('NFD')
    .replace(/\p{Diacritic}/gu, '');
}

function applyFilters() {
  return fiestas.filter((f) => {
    const search = normalizeText(searchFilter.value.trim());
    const month = f.inicio.slice(5, 7);
    const searchableText = normalizeText(`${f.nombre} ${f.municipio} ${f.comarca} ${f.provincia}`);

    return (
      (!provinciaFilter.value || f.provincia === provinciaFilter.value) &&
      (!comarcaFilter.value || f.comarca === comarcaFilter.value) &&
      (!mesFilter.value || month === mesFilter.value) &&
      (!search || searchableText.includes(search))
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
      ${f.municipio} (${f.comarca}, ${f.provincia})<br>
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
    div.textContent = `${f.municipio}\n${f.provincia}`;
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
