
module.exports = function (config) {
	config.set({
		browsers: ['Chrome'],

    singleRun: true,

    frameworks: ['mocha'],

    files: [
		// webpack test 설정을 작성할 file
      'webpack.test.config.js'
    ],

    preprocessors: {
      'webpack.test.config.js': ['webpack', 'sourcemap']
    },

    reporters: ['verbose', 'dots'],
	});
};