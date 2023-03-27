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
    const links = [];

    $("article h2").each(function () {
        titles.push($(this).text());
    })


    console.log(titles);

    console.log('checkForNewPosts function called');
};

module.exports = { checkForNewPosts };