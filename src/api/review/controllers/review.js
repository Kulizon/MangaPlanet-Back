"use strict";

/**
 *  review controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::review.review", {
  count(ctx) {
    const { query } = ctx.request;
    return strapi.query("api::review.review").count({ where: query });
  },
});
