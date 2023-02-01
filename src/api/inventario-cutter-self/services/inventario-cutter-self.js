'use strict';

/**
 * inventario-cutter-self service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::inventario-cutter-self.inventario-cutter-self');
