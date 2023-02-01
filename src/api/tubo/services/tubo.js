'use strict';

/**
 * tubo service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::tubo.tubo');
