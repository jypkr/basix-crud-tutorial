const cron = require('node-cron');
const { checkForNewPosts } = require('./checkForNewPosts.jsx');

cron.schedule('*/30 * * * * *', checkForNewPosts);

module.exports = { cron };