var helper = require('./helper');

module.exports = {
    get: get,
    helper: helper,
    registerHelpers: function() {
        Ember.Handlebars.registerHelper('svg', helper);
        Ember.Handlebars.registerBoundHelper('svgb', helper);
    }
};

function get(input) {
    var cls,
        name,
        title,
        match,
        svg;
    if (Ember.isEmpty(input)) {
        return '';
    }
    match = input.match(/^(.+?)(\.(.+?))?(@(.+?))?$/);
    name = match[1];
    cls = match[3];
    title = match[5];
    svg = require('svg')[name];
    Ember.assert('An SVG graphic with name '+name+' does not exist.', svg);
    if (cls) {
        svg = svg.replace(/<svg/, '<svg class="'+Ember.Handlebars.Utils.escapeExpression(cls)+'"');
    }
    if (title) {
        svg = '<div title="'+Ember.Handlebars.Utils.escapeExpression(title)+'">'+svg+'</div>';
    }
    return svg.htmlSafe();
};