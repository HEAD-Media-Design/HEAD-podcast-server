import type { Core } from '@strapi/strapi';

export default {
  /**
   * An asynchronous register function that runs before
   * your application is initialized.
   *
   * This gives you an opportunity to extend code.
   */
  register({ strapi }: { strapi: Core.Strapi }) {
    // Register custom health check endpoint
    strapi.server.routes([
      {
        method: 'GET',
        path: '/api/health',
        handler: async (ctx) => {
          // Lightweight health check endpoint without DB queries
          // Returns 200 OK with simple JSON response
          ctx.body = { status: 'ok' };
          ctx.status = 200;
        },
        config: {
          auth: false, // Public endpoint, no authentication required
        },
      },
    ]);
  },

  /**
   * An asynchronous bootstrap function that runs before
   * your application gets started.
   *
   * This gives you an opportunity to set up your data model,
   * run jobs, or perform some special logic.
   */
  bootstrap(/* { strapi }: { strapi: Core.Strapi } */) {},
};
