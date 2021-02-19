# <em>µ</em>html-intents

[![Build Status](https://travis-ci.com/WebReflection/uhtml-intents.svg?branch=main)](https://travis-ci.com/WebReflection/uhtml-intents) [![Coverage Status](https://coveralls.io/repos/github/WebReflection/uhtml-intents/badge.svg?branch=main)](https://coveralls.io/github/WebReflection/uhtml-intents?branch=main)

<sup>**Social Media Photo by [Markus Winkler](https://unsplash.com/@markuswinkler) on [Unsplash](https://unsplash.com/)**</sup>

An utility to bring [hyperHTML intents](https://github.com/WebReflection/hyperHTML#readme) into [µhtml](https://github.com/WebReflection/uhtml#readme).

**[Live Demo](https://codepen.io/WebReflection/pen/OJbgpMx?editors=0010)**

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
  * the defined callback also receives the object itself as its own context, if available, so that this pattern enables more complex intents.
  * the *name* can be a `Symbol('intent')` too, to be sure there won't ever be intents name's clashing, example:

```js
const myIntent = Symbol('my-intent');

define(myIntent, doMyThing);

render(document.body, html`
  <div>
    ${intent({[myIntent]: data})}
  </div>
`);
```
