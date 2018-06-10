(function($) {
    console.log('initializing inheritance!');

    Virtual.Tools.extend({
        Inheritance : {
            createClass : function(constructor, functions) {
                if (functions) {
                    $.extend(constructor.prototype, functions);
                }

                return constructor;
            }
            , extendClass : function(parent, constructor, functions) {
                constructor.prototype = Object.create(parent.prototype);

                return this.createClass(contructor, functions);
            }
        }
    });
})(jQuery);