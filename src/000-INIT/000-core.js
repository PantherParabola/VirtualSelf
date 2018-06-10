(function($) {
    console.log('initializing core!')

    window.Virtual = {
        name : 'Virtual Self'
        , Version : {
            major : 0
            , minor : 0
            , build : 1
            , toString : function() {
                return this.major +'.'+ this.minor +'.'+ this.build
            }
        }
        , extend : function(object) {
            $.extend(this, object);
        }
    };
})(jQuery);

