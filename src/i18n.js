import { createI18n } from "vue-i18n";

export function setupI18n(vueApp) {
  const i18n = createI18n({
    legacy: false,
    locale: "fr",
    messages: {
      fr: {
        vehicule: {
          seatsCount: "{count} places avec ceinture",
          bedsCount: "{count} places couchage",
          weight_B: "<3500kg Permis B",
          travelAbroadAllowed: "Voyage à l'étranger authorisé",
          petsAllowed: "Animaux autorisé",
          priceLabel: "À partir de {price}/j",
          reviewsCount: "{count} avis",
          placesLabel: "{seatsCount} places - {bedsCount} couchages",
        },
        settings: {
          languageLabel: "Langue\u00a0:",
        },
      },
      en: {
        // Approximate translation here do not mind
        vehicule: {
          seatsCount: "{count} seats with belt",
          bedsCount: "{count} sleeping places",
          weight_B: "<3500kg B Licence",
          travelAbroadAllowed: "Travel abroad allowed",
          petsAllowed: "Pets allowed",
          priceLabel: "Starting at {price}/day",
          reviewsCount: "{count} reviews",
          placesLabel: "{seatsCount} seats - {bedsCount} beds",
        },
        settings: {
          languageLabel: "Language:",
        },
      },
    },
  });
  vueApp.use(i18n);
}
