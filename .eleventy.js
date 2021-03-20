module.exports = function (eleventyConfig) {
    eleventyConfig.addPassthroughCopy('img');
    eleventyConfig.addPassthroughCopy('fonts');
    eleventyConfig.setTemplateFormats(['md', 'css']);

    eleventyConfig.addLiquidShortcode('website', function () {
        return 'https://github.com/corylus/corylus';
    });
    eleventyConfig.addNunjucksShortcode('website', function () {
        return 'https://github.com/corylus/corylus';
    });
};
