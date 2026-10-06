type Language = 'de' | 'fr' | 'en';
type NewsCopy = {
  category: string;
  period: string;
  title: string;
  summary: string;
  priceUnit?: string;
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
  expiresOn: string | null;
  copy: Record<Language, NewsCopy>;
};

// Neue Meldungen hier ergänzen. expiresOn ist der letzte sichtbare Tag
// (YYYY-MM-DD, Europe/Zurich); null bleibt bis zur redaktionellen Entfernung.
export const news: NewsItem[] = [{
  id: 'winterplaetze',
  image: '/images/winterplaetze-geraeumt.webp',
  imageWidth: 1672,
  imageHeight: 941,
  price: 'CHF 50.–',
  href: 'mailto:stellplatzgampel@gmail.com?subject=Winterplatz',
  expiresOn: '2027-04-30',
  copy: {
    de: {
      category: 'Winterangebot', period: 'Ab sofort · bis Ende April 2027',
      title: 'Winter-Abstellplätze',
      summary: 'Dein Wohnmobil oder Wohnwagen braucht einen Platz für den Winter? Bei uns kannst du dein Fahrzeug über die Wintermonate abstellen – an einem ruhigen Standort in naturnaher Umgebung.',
      priceUnit: 'pro Monat', action: 'Winterplatz anfragen',
      imageAlt: 'Symbolbild: Wohnmobil und Wohnwagen im Winter neben geräumter Zufahrt',
      imageNote: 'Symbolbild',
    },
    fr: {
      category: 'Offre hivernale', period: 'Dès maintenant · jusqu’à fin avril 2027',
      title: 'Stationnement pour l’hiver',
      summary: 'Ton camping-car ou ta caravane a besoin d’une place pour l’hiver ? Tu peux stationner ton véhicule chez nous pendant les mois d’hiver, dans un endroit calme au cœur de la nature.',
      priceUnit: 'par mois', action: 'Demander une place',
      imageAlt: 'Image d’illustration : camping-car et caravane près d’un accès déneigé en hiver',
      imageNote: 'Image d’illustration',
    },
    en: {
      category: 'Winter offer', period: 'Available now · until the end of April 2027',
      title: 'Winter vehicle storage',
      summary: 'Does your motorhome or caravan need a place for the winter? Park your vehicle with us throughout the winter months, in a peaceful setting surrounded by nature.',
      priceUnit: 'per month', action: 'Enquire about a winter space',
      imageAlt: 'Illustrative image: motorhome and caravan beside a cleared winter access road',
      imageNote: 'Illustrative image',
    },
  },
}];

const sectionCopy = {
  de: { navNews: 'Aktuelles', newsEy: 'Aktuelles', newsTitle: 'Aktuelles rund um den Stellplatz', newsSub: 'Neuigkeiten, Angebote und Veranstaltungen bei uns und in der Region.' },
  fr: { navNews: 'Actualités', newsEy: 'Actualités', newsTitle: 'Les nouvelles de notre aire', newsSub: 'Nouveautés, offres et événements chez nous et dans la région.' },
  en: { navNews: 'News', newsEy: 'News', newsTitle: 'The latest from our site', newsSub: 'News, offers and events at our site and in the region.' },
};

export const newsTranslations = Object.fromEntries(
  (['de', 'fr', 'en'] as const).map((lang) => [lang, {
    ...sectionCopy[lang],
    ...Object.fromEntries(news.flatMap((item) => Object.entries(item.copy[lang])
      .map(([key, value]) => [`news_${item.id}_${key}`, value]))),
  }]),
);
