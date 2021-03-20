module.exports = function (eleventyConfig) {
    eleventyConfig.addPassthroughCopy('img');
    eleventyConfig.addPassthroughCopy('fonts');
    eleventyConfig.setTemplateFormats(['md', 'css']);

    const markdownIt = require('markdown-it');
    const markdownItEmoji = require('markdown-it-emoji');
    const options = {
        html: true,
    };
    const markdownLib = markdownIt(options).use(markdownItEmoji);

    eleventyConfig.setLibrary('md', markdownLib);
};
