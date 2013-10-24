var get = require('./get');

module.exports = {
    get: get,
    registerHelpers: function() {
        Ember.Handlebars.registerHelper('svg', get);
        Ember.Handlebars.registerBoundHelper('svgb', get);
    }
};