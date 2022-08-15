// Modules - Encapsulated Code (only share minimum - what we want)
// CommonJS, every file is a module (by default)

const names = require('./4-names');
const sayHi = require('./5-utils');
const data = require('./6-alternative-flavour');

// the code on that file will run even if we don't
// assign that to a variable
// so, when you import a module, you actually invoke it
require('./7-mind-grenade');

sayHi('Susan')
sayHi(names.John)
sayHi(names.Peter)