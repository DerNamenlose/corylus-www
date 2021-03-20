module.exports = function (eleventyConfig) {
    eleventyConfig.addPassthroughCopy('img');
    eleventyConfig.addPassthroughCopy('fonts');
    eleventyConfig.setTemplateFormats(['md', 'css']);
};
