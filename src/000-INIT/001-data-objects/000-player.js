(function($) {
    console.log('initializing data objects!');

    Virtual.extend({
        Player : new Virtual.Tools.SugarCubeVariableEnhancer(
            Virtual.Tools.Cache.passageLevel
            , 'player'
            , {
                setTrait : function(name, state) {
                    this.data.traits[name] = state;
                }
            }
        )
    });
})(jQuery);

