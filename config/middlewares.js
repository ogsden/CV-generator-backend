module.exports = {
  load: {
    before: [
      "strapi::errors",
      "strapi::security",
      "strapi::cors",
      "strapi::poweredBy",
      "strapi::logger",
      "strapi::query",
      "strapi::body",
      "strapi::session",
      "strapi::favicon",
      "strapi::public",
    ],
    order: [],
    after: [],
  },
  settings: {
    cors: {
      origin: ["https://cv-generator-beige.vercel.app"],
    },
  },
};
