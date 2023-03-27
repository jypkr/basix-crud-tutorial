const axios = require('axios');
const cheerio = require('cheerio');
const request = require('request');
const nodemailer = require('nodemailer');


async function checkForNewPosts() {
    const url = 'https://medium.com/tag/programming';
    const response = await axios.get(url);
    const html = response.data;

    const $ = cheerio.load(html);
    const titles = [];
    const authors = [];
    const author_links = [];
    const post_links = [];

    $("article").each(async function (i, article) {
        titles.push($(article).find('h2').text());
        authors.push($(article).find('div.ab.q p.bd.b.be.z.ff.jo.fg.fh.fi.fj.dh.fk.bi').text());
        author_links.push('https://medium.com' + $(article).find('a.ae.af.ag.ah.ai.aj.ak.al.am.an.ao.ap.aq.ar.as').attr('href'));
    })

    console.log(titles);
    console.log(authors);
    console.log(author_links);

    console.log('checkForNewPosts function called');
};

module.exports = { checkForNewPosts };