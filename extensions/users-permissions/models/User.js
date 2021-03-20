"use strict";

function randstr(prefix) {
  return Math.random()
    .toString(36)
    .replace('0.', prefix || '');
}

module.exports = {
  lifecycles: {
    async beforeCreate(data) {

      if (!data.username) {
        data.username = randstr("user_");
      }

    },
    async beforeDelete(params) {}
  },
};
