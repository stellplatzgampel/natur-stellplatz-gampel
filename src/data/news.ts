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
  action?: string;
  notice?: string;
  imageAlt: string;
  imageNote?: string;
};

type NewsItem = {
  id: string;
  image: string;
  imageWidth: number;
  imageHeight: number;
  price?: string;
  href?: string;
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
export const news: NewsItem[] = [{
  id: 'winterbetrieb',
  image: '/images/winterbetrieb-gampel.webp',
  imageWidth: 1448,
  imageHeight: 1086,
  startsOn: '2026-11-01',
  expiresOn: '2027-03-31',
  copy: {
    de: {
      category: 'Winterbetrieb',
      period: '1. November bis 31. März',
      title: 'Übernachten auf dem Stellplatz im Winter',
      summary: 'Unser Stellplatz bleibt auch im Winter für Übernachtungen geöffnet. Strom ist verfügbar.',
      notice: 'Duschen, Toiletten und die übrigen Sanitäranlagen bleiben geschlossen. Auch die Station für Frischwasser und Abwasserentsorgung ist in dieser Zeit geschlossen.',
      imageAlt: 'Wohnmobil auf dem verschneiten Stellplatz zwischen schneebedeckten Bäumen',
    },
    fr: {
      category: 'Horaires d’hiver',
      period: 'Du 1er novembre au 31 mars',
      title: 'Passer la nuit sur l’aire en hiver',
      summary: 'Notre aire reste ouverte pour les nuitées en hiver. L’électricité est disponible.',
      notice: 'Les douches, les toilettes et les autres sanitaires sont fermés. La borne de remplissage d’eau et de vidange des eaux usées est également fermée pendant cette période.',
      imageAlt: 'Camping-car sur l’aire enneigée, au milieu d’arbres couverts de neige',
    },
    en: {
      category: 'Winter opening',
      period: '1 November to 31 March',
      title: 'Overnight stays in winter',
      summary: 'Our site stays open for overnight stays in winter. Electricity is available.',
      notice: 'Showers, toilets and other washroom facilities are closed. The fresh water and wastewater disposal station is also closed during this period.',
      imageAlt: 'Motorhome on the snowy site among snow-covered trees',
    },
  },
}, winterOffer];

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
  de: { navNews: 'Aktuelles', newsEy: 'Aktuelles', newsTitle: 'Aktuelles rund um den Stellplatz', newsSub: 'Neuigkeiten, Angebote und Veranstaltungen bei uns und in der Region.', winterFacilities: 'Von November bis Ende März sind die Sanitäranlagen sowie die Frischwasser- und Abwasserstation geschlossen.' },
  fr: { navNews: 'Actualités', newsEy: 'Actualités', newsTitle: 'Les nouvelles de notre aire', newsSub: 'Nouveautés, offres et événements chez nous et dans la région.', winterFacilities: 'De novembre à fin mars, les sanitaires et la borne de remplissage d’eau et de vidange sont fermés.' },
  en: { navNews: 'News', newsEy: 'News', newsTitle: 'The latest from our site', newsSub: 'News, offers and events at our site and in the region.', winterFacilities: 'From November to the end of March, the washrooms and the fresh water and wastewater disposal station are closed.' },
};

export const newsTranslations = Object.fromEntries(
  (['de', 'fr', 'en'] as const).map((lang) => [lang, {
    ...sectionCopy[lang],
    ...winterSectionCopy[lang],
    ...Object.fromEntries(news.flatMap((item) => Object.entries(item.copy[lang])
      .map(([key, value]) => [`news_${item.id}_${key}`, value]))),
  }]),
);
