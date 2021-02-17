const {define, intent} = require('../cjs');

let arg = null;

define('test', value => {
  arg = value;
  return 'OK';
});

let invoked = intent({})();
console.assert(invoked == void 0);

invoked = intent({nope: 123})();
console.assert(invoked == void 0);

invoked = intent({test: 456})();
console.assert(invoked == 'OK');
console.assert(arg == 456);
