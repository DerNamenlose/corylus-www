const fetch = require('node-fetch');
const markdown = require('markdown-it');

const md = new markdown({
    html: true,
});

module.exports = async function () {
    const releasesRes = await fetch(
        'https://api.github.com/repos/corylus-git/corylus/releases',
        {
            headers: {
                accept: 'application/vnd.github.v3+json',
            },
        }
    );
    const releases = await releasesRes.json();
    return releases.map((release) => ({
        ...release,
        body_markdown: md.render(release.body),
        windows_download_url: release.assets.find(
            (a) => a.content_type === 'application/x-ms-dos-executable'
        ).browser_download_url,
        linux_download_url: release.assets.find(
            (a) => a.content_type === 'application/vnd.debian.binary-package'
        ).browser_download_url,
    }));
};
