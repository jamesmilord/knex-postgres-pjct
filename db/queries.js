const knex = require("./knex"); // connection

module.exports = {
  getAll() {
    return knex("sticker"); /// short for select * from demo
  }
};
