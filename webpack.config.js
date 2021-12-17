const path = require('path');

module.exports = {
  entry: {
	'viewpost' : './javascript/viewpost.js',
	'createpost' : './javascript/createpost.js',
	'Home' : './javascript/Home.js',
},
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
    
  },
};