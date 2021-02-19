const names = [];
const callbacks = [];

let length = 0;

/**
 * Registers a specific key to look for per each intent invoke.
 * @param {string} name the intent name as object key
 * @param {function} callback the callback to invoke when key matches
 */
export const define = (name, callback) => {
  length = names.push(name);
  callbacks.push(callback);
};

/**
 * Returns a callback that will be triggered bu uhtml to retrieve any data.
 * @param {object} object a literal object with any pre-defined key
 * @returns {any?} if the intent name is one of the keys, returns whatever
 *                 its associated callback would return
 */
export const intent = object => comment => {
  for (let i = 0; i < length; i++) {
    if (names[i] in object)
      return callbacks[i].call(object, object[names[i]], comment);
  }
};
