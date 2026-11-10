type Language = 'de' | 'fr' | 'en';
type NewsCopy = {
  category: string;
  period: string;
  title: string;
  summary: string;
  priceUnit?: string;
  vehicles?: string;
  storagePeriod?: string;
  flexibleStart?: string;
  extraMonths?: string;
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
      summary: 'Bei uns in Gampel kannst du dein Wohnmobil oder deinen Wohnwagen über den Winter abstellen. Du buchst den Platz für die ganze Wintersaison.',
      priceUnit: 'für die Wintersaison',
      vehicles: 'Für Wohnmobile und Wohnwagen',
      storagePeriod: '1. November bis 31. März',
      flexibleStart: 'Du kannst auch später starten.',
      extraMonths: 'Oktober und April kannst du dazubuchen.',
      action: 'Winter-Abstellplatz buchen',
      imageAlt: 'Symbolbild: Wohnmobil und Wohnwagen im Winter neben geräumter Zufahrt',
      imageNote: 'Symbolbild',
    },
    fr: {
      category: 'Offre hivernale', period: 'Saison d’hiver 2026/27',
      title: 'Stationnement pour l’hiver',
      summary: 'À Gampel, tu peux stationner ton camping-car ou ta caravane pendant l’hiver. Tu réserves la place pour toute la saison.',
      priceUnit: 'pour la saison d’hiver',
      vehicles: 'Pour les camping-cars et les caravanes',
      storagePeriod: 'Du 1er novembre au 31 mars',
      flexibleStart: 'Tu peux aussi arriver plus tard.',
      extraMonths: 'Tu peux ajouter les mois d’octobre et d’avril.',
      action: 'Réserver pour l’hiver',
      imageAlt: 'Image d’illustration : camping-car et caravane près d’un accès déneigé en hiver',
      imageNote: 'Image d’illustration',
    },
    en: {
      category: 'Winter offer', period: '2026/27 winter season',
      title: 'Winter vehicle storage',
      summary: 'Store your motorhome or caravan with us in Gampel over the winter. Your booking covers the entire winter season.',
      priceUnit: 'for the winter season',
      vehicles: 'For motorhomes and caravans',
      storagePeriod: '1 November to 31 March',
      flexibleStart: 'You can start later.',
      extraMonths: 'You can add October and April to your booking.',
      action: 'Book winter vehicle storage',
      imageAlt: 'Illustrative image: motorhome and caravan beside a cleared winter access road',
      imageNote: 'Illustrative image',
    },
  },
} satisfies NewsItem;

// expiresOn ist der letzte sichtbare Tag, null lässt die Meldung offen.
export const news: NewsItem[] = [winterOffer];

export const winterHighlights = ['storagePeriod', 'flexibleStart', 'extraMonths'] as const;

export const winterSectionCopy = {
  de: {
    winterStoragePeriodLabel: 'Abstellzeitraum',
    winterFlexibleStartLabel: 'Flexibler Start',
    winterExtraMonthsLabel: 'Zusatzmonate',
    winterBookingClosed: 'Die Buchung für den nächsten Winter ist ab September geplant.',
  },
  fr: {
    winterStoragePeriodLabel: 'Période de stationnement',
    winterFlexibleStartLabel: 'Arrivée flexible',
    winterExtraMonthsLabel: 'Mois supplémentaires',
    winterBookingClosed: 'L’ouverture des réservations pour l’hiver prochain est prévue en septembre.',
  },
  en: {
    winterStoragePeriodLabel: 'Storage period',
    winterFlexibleStartLabel: 'Flexible start',
    winterExtraMonthsLabel: 'Extra months',
    winterBookingClosed: 'Bookings for next winter are expected to open in September.',
  },
};

const sectionCopy = {
  de: { navNews: 'Aktuelles', newsEy: 'Aktuelles', newsTitle: 'Aktuelles rund um den Stellplatz', newsSub: 'Neuigkeiten, Angebote und Veranstaltungen bei uns und in der Region.' },
  fr: { navNews: 'Actualités', newsEy: 'Actualités', newsTitle: 'Les nouvelles de notre aire', newsSub: 'Nouveautés, offres et événements chez nous et dans la région.' },
  en: { navNews: 'News', newsEy: 'News', newsTitle: 'The latest from our site', newsSub: 'News, offers and events at our site and in the region.' },
};

export const newsTranslations = Object.fromEntries(
  (['de', 'fr', 'en'] as const).map((lang) => [lang, {
    ...sectionCopy[lang],
    ...winterSectionCopy[lang],
    ...Object.fromEntries(news.flatMap((item) => Object.entries(item.copy[lang])
      .map(([key, value]) => [`news_${item.id}_${key}`, value]))),
  }]),
);
