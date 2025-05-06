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
  {
    name: "strapi::cors",
    config: {
      headers: ["Content-Type", "Authorization", "Cache-Control"], // Add 'Cache-Control' to the allowed headers
    },
  },
  "strapi::poweredBy",
  "strapi::query",
  "strapi::body",
  "strapi::session",
  "strapi::favicon",
  "strapi::public",
];
