# <em>µ</em>html-intents

An utility to bring [hyperHTML intents](https://github.com/WebReflection/hyperHTML#readme) into [µhtml](https://github.com/WebReflection/uhtml#readme).

```js
import {render, html} from 'uhtml';
import {define, intent} from 'uhtml-intents';

// a basic i18n example: key => {lang1, langX}
const i18n = {
  greetings: {
    it: 'Ciao!',
    en: 'Hello!'
  }
};

// the user chosen language
let lang = 'it';

// define a basic i18n intent via a key name so that
// when intent({i18n: 'greetings'}) is used, the function
// will receive 'greetings' as argument: define(key, fn)
define('i18n', key => {
  // so that the right translation can be offered
  return i18n[key][lang];
});

render(document.body, html`
  <div>
    ${intent({i18n: 'greetings'})}
  </div>
`);
```

### In Details

  * *µhtml* now accepts callbacks as element placeholders, meaning any extension could be easily added, and this micro-utility facilitates placeholders extensions while rendering anything
  * `define(name, callback)` register a specific intent by name, used to check objects literals while rendering. If the name, as key, is found, the registered callback will be invoked with the *value*, and the *comment* node that represents the *µhtml* pin in the document.
  * the defined callback also receives the object itself as its own context, if available, so that this pattern enables more complex intents
