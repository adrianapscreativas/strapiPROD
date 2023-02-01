'use strict';

/**
 * presion service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::presion.presion');
