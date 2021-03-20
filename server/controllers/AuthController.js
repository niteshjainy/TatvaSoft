"use strict";
import passport from "passport";
import bcrypt from "bcryptjs";
import passportService from "../services/auth";
import models from "../models";

let User = models.user;
let UserToken = models.user_token;
let Customer = models.customer;
let Driver = models.driver;

/**
 * Object for handle all auth request api
 */
let authController = {
  /**
   * Handle login api request
   *
   * @param {object} req
   * @param {object} res
   * @param {function} next
   *
   */
  login(req, res, next) {
    passport.authenticate("login", (error, user, info) => {
      if (error) {
        error.status = 400;
        next(error);
      } else {
        req.logIn(user, (error) => {
          if (error) {
            error.status = 400;
            next(error);
          } else {
            res.json({ success: true, data: user, message: "" });
          }
        });
      }
    })(req, res, next);
  },

  /**
   * Handle signup api request
   *
   * @param {object} req
   * @param {object} res
   * @param {function} next
   *
   */
  signup(req, res, next) {
    passport.authenticate("signup", (error, user, info) => {
      if (error) {
        error.status = 400;
        if (error.name === "EMAIL_EXISTS") {
          res.status(400).json({
            success: false,
            error: [{ field: "email", message: "Email already exists." }],
            message: "Invalid request",
          });
        } else {
          next(error);
        }
      } else {
        if (user) {
          res.status(200).json({
            success: true,
            data: user,
            message: "User created successfully",
          });
        } else {
          res
            .status(400)
            .json({ success: true, data: user, message: "User not created" });
        }
      }
    })(req, res, next);
  },

  /**
   * Handle logout api request
   *
   * @param {object} req
   * @param {object} res
   * @param {function} next
   *
   */
  logout(req, res, next) {
    UserToken.find({ where: { access_token: req.user.access_token } })
      .then((tokenObject) => {
        if (tokenObject) {
          UserToken.destroy({
            where: { id: tokenObject.id },
          })
            .then((data) => {
              res.status(200).json({
                success: true,
                message: "User has been logout successfully",
              });
            })
            .catch((error) => {
              next(error);
            });
        } else {
          let error = new Error("Bad request");
          error.status = 400;
          next(error);
        }
      })
      .catch((error) => {
        next(error);
      });
  },

  /**
   * Check admin authentication
   *
   * @param {object} req
   * @param {object} res
   * @param {function} next
   *
   */
  checkAdminAuthenticated(req, res, next) {
    let token = getToken(req);
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

export default authController;
