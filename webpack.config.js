const path = require('path');

module.exports = {
  entry: {
	'viewpost' : './javascript/viewpost.js',
	'createpost' : './javascript/createpost.js',
	'Home' : './javascript/Home.js',
	'table' : './javascript/table.js',
	'viewproduct' : './javascript/viewproduct.js',
},
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
    
  },
};