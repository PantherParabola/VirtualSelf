(function($) {
    console.log('initializing tools!');

    Virtual.extend({
        Tools : {
            extend : function(object) {
                $.extend(this, object);
            }
        }
    });
})(jQuery);