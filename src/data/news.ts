type Language = 'de' | 'fr' | 'en';
type NewsCopy = {
  category: string;
  period: string;
  title: string;
  summary: string;
  priceUnit?: string;
  details?: string;
  action: string;
  imageAlt: string;
  imageNote?: string;
};

type NewsItem = {
  id: string;
  image: string;
  imageWidth: number;
  imageHeight: number;
  price?: string;
  href: string;
  startsOn?: string;
  expiresOn: string | null;
  copy: Record<Language, NewsCopy>;
};

// Die Daten beziehen sich auf die freigegebene Saison, in Europe/Zurich.
// Vor der nächsten Saison Zeitraum und Payrexx-Angebot zusammen prüfen.
export const winterOffer = {
  id: 'winterplaetze',
  image: '/images/winterplaetze-geraeumt.webp',
  imageWidth: 1672,
  imageHeight: 941,
  price: 'CHF 250.–',
  href: 'https://park4campers.payrexx.com/pay?tid=613906bc',
  startsOn: '2026-09-01',
  expiresOn: '2027-04-30',
  copy: {
    de: {
      category: 'Winterangebot', period: 'Wintersaison 2026/27',
      title: 'Winter-Abstellplätze',
      summary: 'Ein zugewiesener Abstellplatz für dein Wohnmobil oder deinen Wohnwagen.',
      priceUnit: 'für 1. November bis 31. März',
      details: 'Auch bei späterem Einstieg gilt der volle Paketpreis. Oktober und April kannst du für je CHF 50.– dazubuchen.',
      action: 'Winter-Abstellplatz buchen',
      imageAlt: 'Symbolbild: Wohnmobil und Wohnwagen im Winter neben geräumter Zufahrt',
      imageNote: 'Symbolbild',
    },
    fr: {
      category: 'Offre hivernale', period: 'Saison d’hiver 2026/27',
      title: 'Stationnement pour l’hiver',
      summary: 'Une place de stationnement attribuée à ton camping-car ou à ta caravane.',
      priceUnit: 'du 1er novembre au 31 mars',
      details: 'Le plein tarif s’applique aussi si tu arrives plus tard. Octobre et avril peuvent être réservés en supplément pour CHF 50.– chacun.',
      action: 'Réserver une place pour l’hiver',
      imageAlt: 'Image d’illustration : camping-car et caravane près d’un accès déneigé en hiver',
      imageNote: 'Image d’illustration',
    },
    en: {
      category: 'Winter offer', period: '2026/27 winter season',
      title: 'Winter vehicle storage',
      summary: 'An allocated storage space for your motorhome or caravan.',
      priceUnit: 'for 1 November to 31 March',
      details: 'The full package price applies even if you arrive later. October and April can be added for CHF 50.– each.',
      action: 'Book winter vehicle storage',
      imageAlt: 'Illustrative image: motorhome and caravan beside a cleared winter access road',
      imageNote: 'Illustrative image',
    },
  },
} satisfies NewsItem;

// expiresOn ist der letzte sichtbare Tag, null lässt die Meldung offen.
export const news: NewsItem[] = [winterOffer];

export const winterBookingClosed = {
  de: 'Die Buchung für den nächsten Winter ist ab September geplant.',
  fr: 'L’ouverture des réservations pour l’hiver prochain est prévue en septembre.',
  en: 'Bookings for next winter are expected to open in September.',
};

const sectionCopy = {
  de: { navNews: 'Aktuelles', newsEy: 'Aktuelles', newsTitle: 'Aktuelles rund um den Stellplatz', newsSub: 'Neuigkeiten, Angebote und Veranstaltungen bei uns und in der Region.' },
  fr: { navNews: 'Actualités', newsEy: 'Actualités', newsTitle: 'Les nouvelles de notre aire', newsSub: 'Nouveautés, offres et événements chez nous et dans la région.' },
  en: { navNews: 'News', newsEy: 'News', newsTitle: 'The latest from our site', newsSub: 'News, offers and events at our site and in the region.' },
};

export const newsTranslations = Object.fromEntries(
  (['de', 'fr', 'en'] as const).map((lang) => [lang, {
    ...sectionCopy[lang],
    winterBookingClosed: winterBookingClosed[lang],
    ...Object.fromEntries(news.flatMap((item) => Object.entries(item.copy[lang])
      .map(([key, value]) => [`news_${item.id}_${key}`, value]))),
  }]),
);
