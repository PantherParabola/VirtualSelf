(function($) {
    console.log('initializing cache!');

    var Cache = Virtual.Tools.Inheritance.createClass(function () {
            this.cachedObjects = {};
        }, {
            put : function(name, object) {
                this.cachedObjects[name] = object;
            }
            , get : function(name) {
                return this.cachedObjects[name];
            }
            , remove : function(name) {
                delete this.cachedObjects[name];
            }
            , contains : function(name) {
                return typeof this.cachedObjects[name] !== "undefined";
            }
            , clear : function() {
                delete this.cachedObjects;
                this.cachedObjects = {};
            }
    });

    Virtual.Tools.extend({
        Cache : {
            passageLevel : new Cache()
            , sessionLevel : new Cache()
        }
    });
})(jQuery);