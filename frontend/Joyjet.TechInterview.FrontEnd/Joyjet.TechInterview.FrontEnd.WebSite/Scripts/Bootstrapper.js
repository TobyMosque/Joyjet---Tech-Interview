(function () {
    var readOnly = { configurable: false, enumerable: false, writable: false };
    var libs = {};

    // I really need of the ES2016 decorators, writing a @readOnly above my properties is way better than the code below.
    // https://medium.com/google-developers/exploring-es7-decorators-76ecb65fb841#.sgp9izqk8
    Object.defineProperty(Object, "readOnlyProperty", Object.assign({
        value: function (target, property, decriptor) {
            return Object.defineProperty(target, property, Object.assign(decriptor, readOnly));
        }
    }, readOnly));

    Object.readOnlyProperty(window, "define", {
        value: function (nome, callback) {
            libs[nome] = callback();
        }
    });

    Object.readOnlyProperty(window, "require", {
        value: function (nome) {
            return libs[nome];
        }
    });
})();