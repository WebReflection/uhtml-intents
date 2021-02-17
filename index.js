self.uhtmlIntent = (function (exports) {
  'use strict';

  var intents = new Map();
  /**
   * Registers a specific key to look for per each intent invoke.
   * @param {string} name the intent name as object key
   * @param {function} callback the callback to invoke when key matches
   */

  var define = function define(name, callback) {
    intents.set(name, callback);
  };
  /**
   * Returns a callback that will be triggered bu uhtml to retrieve any data.
   * @param {object} object a literal object with any pre-defined key
   * @returns {any?} if the intent name is one of the keys, returns whatever
   *                 its associated callback would return
   */

  var intent = function intent(object) {
    return function (comment) {
      for (var key in object) {
        if (intents.has(key)) return intents.get(key).call(object, object[key], comment);
      }
    };
  };

  exports.define = define;
  exports.intent = intent;

  return exports;

}({}).default);
