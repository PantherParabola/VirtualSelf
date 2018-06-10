(function() {
    console.log('initializing data-enhancer');

    Virtual.Tools.extend({
        DataEnhancer : Virtual.Tools.Inheritance.createClass(function(cache, cacheKey, getData, functions) {
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
        })
    });
})(jQuery);