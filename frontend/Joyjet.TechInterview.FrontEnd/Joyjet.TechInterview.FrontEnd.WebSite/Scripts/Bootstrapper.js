(function () {
    var libs = {};
    Object.defineProperty(window, "define", {
        configurable: false,
        writable: false,
        value: function (nome, callback) {
            libs[nome] = callback();
        }
    });

    Object.defineProperty(window, "require", {
        configurable: false,
        writable: false,
        value: function (nome) {
            return libs[nome];
        }
    });
})();