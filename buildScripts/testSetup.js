//This file isn't transpiled, must use CommonJS and ES5

//Register babel to transpile before our tests run.

require('@babel/register')(); //tells Mocha that the first Babel should transpile our tests before Mocha run those tests

//Distable webpack features that Mocha doesn't undestand
require.extensions['.css'] = function() {};  // e.g. CSS extension. Our index.js requires index.css