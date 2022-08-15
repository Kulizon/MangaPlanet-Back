'use strict';

/**
 *  manga controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::manga.manga');


module.exports = createCoreController("api::manga.manga", {
  count(ctx) {
    const { query } = ctx.request;
    return strapi.query("api::manga.manga").count({ where: query });
  },
});
