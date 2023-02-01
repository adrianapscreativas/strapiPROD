'use strict';

/**
 * inventario-cutter service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::inventario-cutter.inventario-cutter');
