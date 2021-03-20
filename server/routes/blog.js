"use strict";

import { Router } from "express";
import controllers from "../controllers";
import validators from "../validators";
import path from "path";

let router = Router();
let blog = controllers.blog;
let validator = validators.authValidator;

router.get("/blog", blog.checkAdminAuthenticated, blog.findAll);

export default router;
