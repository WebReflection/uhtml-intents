'use strict';
const intents = new Map;

/**
 * Registers a specific key to look for per each intent invoke.
 * @param {string} name the intent name as object key
 * @param {function} callback the callback to invoke when key matches
 */
const define = (name, callback) => {
  intents.set(name, callback);
};
exports.define = define;

/**
 * Returns a callback that will be triggered bu uhtml to retrieve any data.
 * @param {object} object a literal object with any pre-defined key
 * @returns {any?} if the intent name is one of the keys, returns whatever
 *                 its associated callback would return
 */
const intent = object => comment => {
  for (const key in object) {
    if (intents.has(key))
      return intents.get(key).call(object, object[key], comment);
  }
};
exports.intent = intent;
