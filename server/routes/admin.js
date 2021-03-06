"use strict";

import { Router } from "express";
import controllers from "../controllers";
import validators from "../validators";
import path from "path";

let router = Router();
let auth = controllers.auth;
let admin = controllers.admin;
let validator = validators.authValidator;
let { driverValidator } = validators;

router.post("/auth/login", validator.validateUserLogin, auth.login);
router.post("/auth/logout", auth.checkAdminAuthenticated, auth.logout);

export default router;
