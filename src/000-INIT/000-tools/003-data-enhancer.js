(function() {
    console.log('initializing data-enhancer');

    var dataEnhancer = Virtual.Tools.Inheritance.createClass(function(cache, cacheKey, getData, functions) {
            this.cache = cache;
            this.cacheKey = cacheKey;
            this.getData = getData;
            this.functions = functions;
        }, {
        get : function() {
            if (this.cache.contains(this.cacheKey)) {
                return this.cache.get(this.cacheKey);
            }

            var enhancedObject = $.extend({
                data : this.getData()
            }, this.functions);

            this.cache.put(this.cacheKey, enhancedObject);

            return enhancedObject;
        }
    });

    Virtual.Tools.extend({
        DataEnhancer : dataEnhancer,
        SugarCubeVariableEnhancer : Virtual.Tools.Inheritance.extendClass(dataEnhancer, function(cache, sugarCubeVarName, functions) {
            this.cache = cache;
            this.cacheKey = 'enhancedSugarCubeVariable-'+sugarCubeVarName;
            if (!sugarCubeVarName.startsWith('$')) {
                sugarCubeVarName = '$'+sugarCubeVarName;
            }
            this.sugarCubeVarName = sugarCubeVarName;
            this.functions = functions;
        }, {
            getData : function() {
                return State.getVar(this.sugarCubeVarName);
            }
        })
    });
})(jQuery);