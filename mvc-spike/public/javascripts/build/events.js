/**
 * Created by devika on 3/12/15.
 */
EventMap = (function () {
    var map = [];
    var _eventMap = {};

    _eventMap.register = function (eventName, callback) {

        if (map[eventName] && map[eventName].callbacks) {
            map[eventName].callbacks.push(callback);
        } else {
            map[eventName] = {callbacks: [callback]};
        }

        var callbackIndex = map[eventName].length - 1;

        return function () {
            map[eventName].callbacks.splice(callbackIndex, 1);
        };
    };

    _eventMap.raise = function (eventName) {
        if (map[eventName]) {
            map[eventName].callbacks.forEach(function (callback, i) {
                callback();
            });
        }
    };

    return _eventMap;
})();