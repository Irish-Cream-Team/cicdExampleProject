const dotenv = require("dotenv");

dotenv.config();

const config = {
    message: process.env.MESSAGE || "Did not work!!" 
};

module.exports = config; 
