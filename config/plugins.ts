module.exports = ({ env }) => ({
  upload: {
    config: {
      provider: "@strapi/provider-upload-cloudinary",
      providerOptions: {
        cloud_name: env("CLOUDINARY_NAME"),
        api_key: env("CLOUDINARY_KEY"),
        api_secret: env("CLOUDINARY_SECRET"),
      },
    },
  },
  "strapi-cache": {
    enabled: true,
    config: {
      debug: false, // Enable debug logs
      max: 1000, // Maximum number of items in the cache (only for memory cache)
      ttl: 1000 * 60 * 60, // Time to live for cache items (1 hour)
      size: 1024 * 1024 * 1024, // Maximum size of the cache (1 GB) (only for memory cache)
      allowStale: false, // Allow stale cache items (only for memory cache)
      cacheableRoutes: [], // Caches routes which start with these paths (if empty array, all '/api' routes are cached)
      provider: "memory", // Cache provider ('memory' or 'redis')
      // redisUrl: env("REDIS_URL", "redis://localhost:6379"), // Redis URL (if using Redis)
    },
  },
});
