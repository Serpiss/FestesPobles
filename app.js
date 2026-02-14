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

const municipiosComtat = [
  'Agres',
  'Alcoleja',
  'Alcosser de Planes',
  'Alfafara',
  'Almudaina',
  "l'Alqueria d'Asnar",
  'Balones',
  'Benasau',
  'Beniarrés',
  'Benilloba',
  'Benillup',
  'Benimarfull',
  'Benimassot',
  'Cocentaina',
  'Fageca',
  'Famorca',
  'Gaianes',
  'Gorga',
  'Millena',
  "Muro d'Alcoi",
  "l'Orxa",
  'Planes',
  'Quatretondeta',
  'Tollos'
];

const i18n = {
  es: {
    languageLabel: 'Idioma',
    heroSubtitle: 'Consulta fiestas patronales de la Comunitat Valenciana en un solo lugar.',
    login: 'Iniciar sesión (demo)',
    logout: 'Cerrar sesión (demo)',
    loggedIn: 'Sesión iniciada. Puedes guardar favoritos.',
    loggedOut: 'No has iniciado sesión.',
    filters: 'Filtros',
    province: 'Provincia',
    comarca: 'Comarca',
    month: 'Mes',
    search: 'Búsqueda',
    searchPlaceholder: 'Nombre del pueblo o fiesta',
    all: 'Todas',
    allMonths: 'Todos',
    mapTitle: 'Mapa (MVP visual)',
    mapHint: 'Pulsa un municipio para ver su ficha.',
    mapTooltip: 'Clic para filtrar por municipio',
    calendar: 'Calendario',
    festivalsList: 'Listado de fiestas',
    municipalitiesTitle: 'Municipios añadidos',
    favorites: 'Favoritos',
    footerNote: 'Proyecto informativo sin comentarios públicos. Próximo paso: integración con datos de ayuntamientos.',
    noResults: 'No hay resultados con estos filtros.',
    addFavorite: '☆ Añadir favorito',
    removeFavorite: '★ Quitar favorito',
    loginToFavs: 'Inicia sesión para usar favoritos.',
    noFavsYet: 'No tienes fiestas favoritas todavía.',
    start: 'Inicio',
    end: 'Fin'
  },
  ca: {
    languageLabel: 'Idioma',
    heroSubtitle: 'Consulta festes patronals de la Comunitat Valenciana en un sol lloc.',
    login: 'Inicia sessió (demo)',
    logout: 'Tanca sessió (demo)',
    loggedIn: 'Sessió iniciada. Pots guardar favorits.',
    loggedOut: 'No has iniciat sessió.',
    filters: 'Filtres',
    province: 'Província',
    comarca: 'Comarca',
    month: 'Mes',
    search: 'Cerca',
    searchPlaceholder: 'Nom del poble o de la festa',
    all: 'Totes',
    allMonths: 'Tots',
    mapTitle: 'Mapa (MVP visual)',
    mapHint: 'Prem un municipi per a vore la seua fitxa.',
    mapTooltip: 'Clic per a filtrar per municipi',
    calendar: 'Calendari',
    festivalsList: 'Llistat de festes',
    municipalitiesTitle: 'Municipis afegits',
    favorites: 'Favorits',
    footerNote: 'Projecte informatiu sense comentaris públics. Pròxim pas: integració amb dades dels ajuntaments.',
    noResults: 'No hi ha resultats amb aquests filtres.',
    addFavorite: '☆ Afegir favorit',
    removeFavorite: '★ Llevar favorit',
    loginToFavs: 'Inicia sessió per a usar favorits.',
    noFavsYet: 'Encara no tens festes favorites.',
    start: 'Inici',
    end: 'Fi'
  },
  en: {
    languageLabel: 'Language',
    heroSubtitle: 'Check patron saint festivals in the Valencian Community in one place.',
    login: 'Sign in (demo)',
    logout: 'Sign out (demo)',
    loggedIn: 'Session started. You can save favorites.',
    loggedOut: 'You are not signed in.',
    filters: 'Filters',
    province: 'Province',
    comarca: 'County',
    month: 'Month',
    search: 'Search',
    searchPlaceholder: 'Town or festival name',
    all: 'All',
    allMonths: 'All',
    mapTitle: 'Map (visual MVP)',
    mapHint: 'Click a municipality to view details.',
    mapTooltip: 'Click to filter by municipality',
    calendar: 'Calendar',
    festivalsList: 'Festival list',
    municipalitiesTitle: 'Added municipalities',
    favorites: 'Favorites',
    footerNote: 'Informative project without public comments. Next step: integration with town council data.',
    noResults: 'No results for these filters.',
    addFavorite: '☆ Add favorite',
    removeFavorite: '★ Remove favorite',
    loginToFavs: 'Sign in to use favorites.',
    noFavsYet: 'You do not have favorite festivals yet.',
    start: 'Start',
    end: 'End'
  }
};

const monthNames = {
  es: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],
  ca: ['Gener', 'Febrer', 'Març', 'Abril', 'Maig', 'Juny', 'Juliol', 'Agost', 'Setembre', 'Octubre', 'Novembre', 'Desembre'],
  en: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
};

const provinciaFilter = document.getElementById('provinciaFilter');
const comarcaFilter = document.getElementById('comarcaFilter');
const mesFilter = document.getElementById('mesFilter');
const searchFilter = document.getElementById('searchFilter');
const fiestasList = document.getElementById('fiestasList');
const favoritosList = document.getElementById('favoritosList');
const calendarList = document.getElementById('calendarList');
const municipiosList = document.getElementById('municipiosList');
const mapa = document.getElementById('mapa');
const loginBtn = document.getElementById('loginBtn');
const sessionState = document.getElementById('sessionState');
const languageSelect = document.getElementById('languageSelect');

let currentLang = localStorage.getItem('language') || 'es';
let loggedIn = false;
let favoritos = new Set(JSON.parse(localStorage.getItem('favoritos') || '[]'));

function t(key) {
  return i18n[currentLang]?.[key] ?? i18n.es[key] ?? key;
}

function uniqueValues(key) {
  return [...new Set(fiestas.map((f) => f[key]))].sort();
}

function fillStaticFilters() {
  uniqueValues('provincia').forEach((v) => provinciaFilter.add(new Option(v, v)));
  uniqueValues('comarca').forEach((v) => comarcaFilter.add(new Option(v, v)));
}

function fillMonthFilter() {
  const selectedValue = mesFilter.value;
  mesFilter.innerHTML = '';
  mesFilter.add(new Option(t('allMonths'), ''));
  monthNames[currentLang].forEach((name, index) => mesFilter.add(new Option(name, String(index + 1).padStart(2, '0'))));
  mesFilter.value = selectedValue;
}

function applyTranslations() {
  document.documentElement.lang = currentLang === 'ca' ? 'ca' : currentLang;
  document.querySelectorAll('[data-i18n]').forEach((el) => {
    el.textContent = t(el.dataset.i18n);
  });
  document.querySelectorAll('[data-i18n-placeholder]').forEach((el) => {
    el.placeholder = t(el.dataset.i18nPlaceholder);
  });
  loginBtn.textContent = loggedIn ? t('logout') : t('login');
  sessionState.textContent = loggedIn ? t('loggedIn') : t('loggedOut');
  fillMonthFilter();
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
    fiestasList.innerHTML = `<li class="item">${t('noResults')}</li>`;
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
      favBtn.textContent = favoritos.has(f.id) ? t('removeFavorite') : t('addFavorite');
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
    favoritosList.innerHTML = `<li class="item">${t('loginToFavs')}</li>`;
    return;
  }
  if (!favItems.length) {
    favoritosList.innerHTML = `<li class="item">${t('noFavsYet')}</li>`;
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
      { date: f.inicio, label: `${t('start')} · ${f.nombre}` },
      { date: f.fin, label: `${t('end')} · ${f.nombre}` }
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
    div.title = t('mapTooltip');
    div.addEventListener('click', () => {
      searchFilter.value = f.municipio;
      renderAll();
    });
    mapa.appendChild(div);
  });
}

function renderMunicipios() {
  municipiosList.innerHTML = '';
  municipiosComtat.forEach((municipio) => {
    const li = document.createElement('li');
    li.className = 'item';
    li.textContent = municipio;
    municipiosList.appendChild(li);
  });
}

function renderAll() {
  applyTranslations();
  const filtered = applyFilters();
  renderList(filtered);
  renderFavoritos();
  renderCalendar(filtered);
  renderMapa(filtered);
  renderMunicipios();
}

[provinciaFilter, comarcaFilter, mesFilter, searchFilter].forEach((el) => {
  el.addEventListener('input', renderAll);
});

loginBtn.addEventListener('click', () => {
  loggedIn = !loggedIn;
  renderAll();
});

languageSelect.addEventListener('change', () => {
  currentLang = languageSelect.value;
  localStorage.setItem('language', currentLang);
  renderAll();
});

fillStaticFilters();
languageSelect.value = currentLang;
renderAll();
