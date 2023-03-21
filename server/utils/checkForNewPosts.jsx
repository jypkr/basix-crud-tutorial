const cheerio = require('cheerio');
const request = require('request');
const nodemailer = require('nodemailer');


async function checkForNewPosts() {
    const response = await request('https://medium.com/tag/programming');
    const $ = cheerio.load(response);

    console.log($);

    console.log('checkForNewPosts function called');
};

module.exports = { checkForNewPosts };