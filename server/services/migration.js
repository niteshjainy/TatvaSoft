"use strict";

import models from "../models";

let User = models.user;
let Admin = models.admin;
let Setting = models.setting;

export default {
  /**
   * Insert Default record
   *
   * @param {string} userID
   * @param {string} userType
   *
   */
  insertDefaultRecord() {
    User.findOne({
      where: { user_type: "admin" },
    }).then((user) => {
      if (!user) {
        User.create({
          email: "admin@domain.com",
          password:
            "$2a$10$BE3DDi5Xqc5YhDt2sqnACu/n15O6P/E66c4QEGO3qfWVHDwkAy6Ve", // test@123
          user_type: "admin",
          first_name: "admin",
          last_name: "admin",
        }).then((userObj) => {
          if (userObj) {
            // Admin.create({S
            //   name: 'super_admin',
            //   user_id: userObj.id
            // })
          }
        });
      }
    });
  },
};
