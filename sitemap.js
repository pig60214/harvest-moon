const { SitemapStream, streamToPromise } = require( 'sitemap' );
const { Readable } = require( 'stream' );
const fs = require('fs');

require('dotenv').config();
const hostname = process.env.REACT_APP_HOSTNAME;

const stream = new SitemapStream({ hostname });

const links = [
  { url: '/' },
  { url: '/neighbor' },
  { url: '/crop' },
  { url: '/item' },
  { url: '/map' },
  { url: '/animals' },
  { url: '/todo' },
  { url: '/cooking' },
]

streamToPromise(Readable.from(links).pipe(stream)).then((data) => {
  const sitemapContent = data.toString();
  fs.writeFileSync('./public/sitemap.xml', sitemapContent);
})

const robotsTxtTemplate = `# https://www.robotstxt.org/robotstxt.html
User-agent: *
Disallow:
Sitemap: ${hostname}/sitemap.xml`

fs.writeFileSync('./public/robots.txt', robotsTxtTemplate);