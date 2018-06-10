(function($) {
    console.log('initializing data objects!');

    window.IntroData = function(firstName) {
        this.firstName = firstName;
    };

    Virtual.extend({
        IntroData : new Virtual.Tools.DataEnhancer(
            Virtual.Tools.Cache.passageLevel
            , 'introData'
            , function() {
                return $introData;
            }
            , {

            }
        )
    });
})(jQuery);

