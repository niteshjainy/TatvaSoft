"use strict";
import passport from "passport";
import bcrypt from "bcryptjs";
import passportService from "../services/auth";
import models from "../models";

let User = models.user;
let Blog = models.blog;
let UserToken = models.user_token;

/**
 * Object for handle all auth request api
 */
let blogController = {
  /**
   * Handle Blog GET API
   *
   * @param {object} req
   * @param {object} res
   * @param {function} next
   *
   */

  async findAll(req, res, next) {
    try {
      let queryData = req.query;
      let limit = parseInt(queryData.limit || 10);
      let offset = parseInt(queryData.offset || 0);

      let where = {};
      let order = ["id", "DESC"];
      where.$and = [{ status: { $in: ["active", "inactive"] } }];
      // Filter by User Id

      let results = await Blog.findAndCountAll({
        where: where,
        include: [
          {
            model: User,
            on: {
              col1: Sequelize.where(
                Sequelize.col("user.id"),
                "=",
                Sequelize.col("blog.user_id")
              ),
            },
          },
        ],
        order: [order],
        limit: limit,
        offset: offset,
      });

      res.json({
        success: true,
        data: { rows: results.rows, total: results.count },
        message: "",
      });
    } catch (error) {
      next(error);
    }
  },
  resetPassword(req, res, next) {
    let token = req.body.token || false;
    let queryData = req.query;
    let limit;
    if (token && password) {
      User.find({ where: { verify_token: token } })
        .then((user) => {
          if (user) {
            bcrypt
              .hash(password, 10)
              .then((hash) => {
                let userData = {
                  password: hash,
                  verify_token: "",
                };
                user
                  .updateAttributes(userData)
                  .then((data) => {
                    res.status(200).json({
                      success: true,
                      message: "Password has been reset successfully",
                    });
                  })
                  .catch((error) => {
                    return next(error);
                  });
              })
              .catch((error) => {
                return next(error);
              });
          } else {
            let error = new Error("Token doesn't exist.");
            error.status = 400;
            next(error);
          }
        })
        .catch((error) => {
          next(error);
        });
    } else {
      let error = new Error("Bad request");
      error.status = 400;
      next(error);
    }
  },

  checkAdminAuthenticated(req, res, next) {
    let token = getToken(req);
    console.log("token");
    let response = {};
    if (token) {
      UserToken.findOne({
        where: { access_token: token },
        include: [
          { model: User, where: { user_type: "admin", status: "active" } },
        ],
      })
        .then((userToken) => {
          if (!userToken) {
            let error = new Error("Invalid access token");
            error.status = 401;
            next(error);
          } else {
            let user = userToken.get().user;
            user.access_token = token;
            req.user = user;
            return next(null, user, { scope: "all" });
          }
        })
        .catch((error) => {
          next(error);
        });
    } else {
      let error = new Error("User is not authenticated.");
      error.status = 401;
      next(error);
    }
  },
};

let getToken = (req) => {
  let token;
  if (
    req.headers &&
    (req.headers.access_token || req.headers["access-token"])
  ) {
    token = req.headers.access_token
      ? req.headers.access_token
      : req.headers["access-token"];
  }

  if (req.body && req.body.access_token) {
    token = req.body.access_token;
  }

  if (req.query && req.query.access_token) {
    token = req.query.access_token;
  }

  if (req.query && req.params.access_token) {
    token = req.params.access_token;
  }
  return token;
};

export default blogController;
