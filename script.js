const festivalData = [
  {
    town: { es: 'Alzira', val: 'Alzira', en: 'Alzira' },
    fest: { es: 'Fallas', val: 'Falles', en: 'Fallas Festival' },
    month: { es: 'Marzo', val: 'Març', en: 'March' },
    desc: {
      es: 'Monumentos falleros, mascletàs y cremà en el centro histórico.',
      val: 'Monuments fallers, mascletaes i cremà al centre històric.',
      en: 'Fallas monuments, firecracker displays, and cremà in the old town.'
    }
  },
  {
    town: { es: 'Xàtiva', val: 'Xàtiva', en: 'Xàtiva' },
    fest: { es: 'Fira d’Agost', val: 'Fira d’Agost', en: 'August Fair' },
    month: { es: 'Agosto', val: 'Agost', en: 'August' },
    desc: {
      es: 'Feria tradicional con conciertos, mercado y actividades culturales.',
      val: 'Fira tradicional amb concerts, mercat i activitats culturals.',
      en: 'Traditional fair with concerts, market and cultural activities.'
    }
  },
  {
    town: { es: 'Gandia', val: 'Gandia', en: 'Gandia' },
    fest: { es: 'Semana Santa', val: 'Setmana Santa', en: 'Holy Week' },
    month: { es: 'Abril', val: 'Abril', en: 'April' },
    desc: {
      es: 'Procesiones históricas y gran participación de cofradías.',
      val: 'Processons històriques i gran participació de confraries.',
      en: 'Historic processions and strong brotherhood participation.'
    }
  },
  {
    town: { es: 'Dénia', val: 'Dénia', en: 'Dénia' },
    fest: { es: 'Bous a la Mar', val: 'Bous a la Mar', en: 'Bulls into the Sea' },
    month: { es: 'Julio', val: 'Juliol', en: 'July' },
    desc: {
      es: 'Fiesta popular declarada de interés turístico nacional.',
      val: 'Festa popular declarada d’interés turístic nacional.',
      en: 'Popular festival recognized as national tourist interest.'
    }
  },
  {
    town: { es: 'Morella', val: 'Morella', en: 'Morella' },
    fest: { es: 'Sexenni', val: 'Sexenni', en: 'Sexennial Festival' },
    month: { es: 'Agosto', val: 'Agost', en: 'August' },
    desc: {
      es: 'Celebración extraordinaria cada seis años con danzas y ofrendas.',
      val: 'Celebració extraordinària cada sis anys amb danses i ofrenes.',
      en: 'Extraordinary celebration every six years with dances and offerings.'
    }
  },
  {
    town: { es: 'Buñol', val: 'Bunyol', en: 'Buñol' },
    fest: { es: 'La Tomatina', val: 'La Tomatina', en: 'La Tomatina' },
    month: { es: 'Agosto', val: 'Agost', en: 'August' },
    desc: {
      es: 'Batalla festiva de tomates conocida internacionalmente.',
      val: 'Batalla festiva de tomaques coneguda internacionalment.',
      en: 'Internationally known festive tomato fight.'
    }
  }
];

const uiText = {
  es: {
    title: 'Festes dels Pobles',
    subtitle: 'Consulta fiestas populares con un formato clásico, ahora mejorado.',
    searchLabel: 'Buscar pueblo o fiesta',
    searchPlaceholder: 'Ej. Alzira, Fallas...',
    monthLabel: 'Mes',
    langLabel: 'Idioma',
    all: 'Todos',
    town: 'Pueblo',
    fest: 'Fiesta',
    month: 'Mes',
    desc: 'Descripción',
    toCards: 'Cambiar a tarjetas',
    toTable: 'Volver a tabla',
    results: (n) => `${n} resultado(s)`
  },
  val: {
    title: 'Festes dels Pobles',
    subtitle: 'Consulta festes populars amb un format clàssic, ara millorat.',
    searchLabel: 'Buscar poble o festa',
    searchPlaceholder: 'Ex. Alzira, Falles...',
    monthLabel: 'Mes',
    langLabel: 'Idioma',
    all: 'Tots',
    town: 'Poble',
    fest: 'Festa',
    month: 'Mes',
    desc: 'Descripció',
    toCards: 'Canviar a targetes',
    toTable: 'Tornar a taula',
    results: (n) => `${n} resultat(s)`
  },
  en: {
    title: 'Town Festivals',
    subtitle: 'Browse local festivals in the classic format, now enhanced.',
    searchLabel: 'Search town or festival',
    searchPlaceholder: 'E.g. Alzira, Fallas...',
    monthLabel: 'Month',
    langLabel: 'Language',
    all: 'All',
    town: 'Town',
    fest: 'Festival',
    month: 'Month',
    desc: 'Description',
    toCards: 'Switch to cards',
    toTable: 'Back to table',
    results: (n) => `${n} result(s)`
  }
};

const searchInput = document.getElementById('search');
const monthFilter = document.getElementById('monthFilter');
const languageSelect = document.getElementById('languageSelect');
const tableBody = document.getElementById('festTableBody');
const cardView = document.getElementById('cardView');
const tableView = document.getElementById('tableView');
const rowTemplate = document.getElementById('rowTemplate');
const cardTemplate = document.getElementById('cardTemplate');
const resultsCount = document.getElementById('resultsCount');
const toggleView = document.getElementById('toggleView');

let isCardView = false;

function uniqueMonths(lang) {
  return [...new Set(festivalData.map((f) => f.month[lang]))].sort();
}

function refreshMonths() {
  const lang = languageSelect.value;
  const oldValue = monthFilter.value;
  monthFilter.innerHTML = '';

  const allOption = document.createElement('option');
  allOption.value = 'all';
  allOption.textContent = uiText[lang].all;
  monthFilter.appendChild(allOption);

  uniqueMonths(lang).forEach((month) => {
    const option = document.createElement('option');
    option.value = month;
    option.textContent = month;
    monthFilter.appendChild(option);
  });

  monthFilter.value = [...monthFilter.options].some((o) => o.value === oldValue) ? oldValue : 'all';
}

function filteredFestivals() {
  const lang = languageSelect.value;
  const query = searchInput.value.trim().toLowerCase();
  const month = monthFilter.value;

  return festivalData.filter((item) => {
    const isMonthMatch = month === 'all' || item.month[lang] === month;
    const haystack = `${item.town[lang]} ${item.fest[lang]} ${item.desc[lang]}`.toLowerCase();
    const isSearchMatch = !query || haystack.includes(query);
    return isMonthMatch && isSearchMatch;
  });
}

function render() {
  const lang = languageSelect.value;
  const text = uiText[lang];
  const data = filteredFestivals();

  tableBody.innerHTML = '';
  cardView.innerHTML = '';

  data.forEach((item) => {
    const row = rowTemplate.content.firstElementChild.cloneNode(true);
    row.querySelector('.town').textContent = item.town[lang];
    row.querySelector('.fest').textContent = item.fest[lang];
    row.querySelector('.month').textContent = item.month[lang];
    row.querySelector('.desc').textContent = item.desc[lang];
    tableBody.appendChild(row);

    const card = cardTemplate.content.firstElementChild.cloneNode(true);
    card.querySelector('.fest').textContent = item.fest[lang];
    card.querySelector('.town').textContent = `${text.town}: ${item.town[lang]}`;
    card.querySelector('.month').textContent = `${text.month}: ${item.month[lang]}`;
    card.querySelector('.desc').textContent = item.desc[lang];
    cardView.appendChild(card);
  });

  resultsCount.textContent = text.results(data.length);
  toggleView.textContent = isCardView ? text.toTable : text.toCards;
}

function applyTranslations() {
  const lang = languageSelect.value;
  const text = uiText[lang];

  document.documentElement.lang = lang === 'val' ? 'ca' : lang;
  document.getElementById('title').textContent = text.title;
  document.getElementById('subtitle').textContent = text.subtitle;
  document.getElementById('searchLabel').textContent = text.searchLabel;
  searchInput.placeholder = text.searchPlaceholder;
  document.getElementById('monthLabel').textContent = text.monthLabel;
  document.getElementById('langLabel').textContent = text.langLabel;
  document.getElementById('thTown').textContent = text.town;
  document.getElementById('thFest').textContent = text.fest;
  document.getElementById('thMonth').textContent = text.month;
  document.getElementById('thDesc').textContent = text.desc;

  refreshMonths();
  render();
}

toggleView.addEventListener('click', () => {
  isCardView = !isCardView;
  tableView.classList.toggle('hidden', isCardView);
  cardView.classList.toggle('hidden', !isCardView);
  render();
});

[searchInput, monthFilter].forEach((el) => el.addEventListener('input', render));
languageSelect.addEventListener('change', applyTranslations);

applyTranslations();
