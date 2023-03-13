require('dotenv').config();

const express = require('express');
const app = express();
const cors = require('cors');


app.use(express.json());
app.use(cors());

const db = require('./models');

// Router
app.use(require('./routes'));

// Passport-JWT


db.sequelize.sync().then(() => {
    app.listen(process.env.PORT || 3001, () => {
        console.log(`Server is running on port ${process.env.PORT || 3001}`);
    });
});
