var get = require('./get'),
    helper = require('./helper');

module.exports = {
    get: get,
    helper: helper,
    registerHelpers: function() {
        Ember.Handlebars.registerHelper('svg', helper);
        Ember.Handlebars.registerBoundHelper('svgb', helper);
    }
};