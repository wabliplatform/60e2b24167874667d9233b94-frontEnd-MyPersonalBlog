const path = require('path');

module.exports = {
  entry: {
	'Home' : './javascript/Home.js',
	'viewpost' : './javascript/viewpost.js',
	'createpost' : './javascript/createpost.js',
	'Page4' : './javascript/Page4.js',
},
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
    
  },
};