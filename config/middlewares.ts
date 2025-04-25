export default [
  "strapi::logger",
  "strapi::errors",
  {
    name: "strapi::security",
    config: {
      contentSecurityPolicy: {
        useDefaults: true,
        directives: {
          "media-src": [
            "'self'",
            "data:",
            "blob:",
            "https://res.cloudinary.com",
          ],
          "img-src": ["'self'", "data:", "blob:", "https://res.cloudinary.com"],
          "connect-src": ["'self'", "https://res.cloudinary.com"],
        },
      },
    },
  },
  "strapi::cors",
  "strapi::poweredBy",
  "strapi::query",
  "strapi::body",
  "strapi::session",
  "strapi::favicon",
  "strapi::public",
];
