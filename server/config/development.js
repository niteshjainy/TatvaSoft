"use strict";

import path from "path";

export default {
  app: {
    siteName: "Test",
    siteEmail: "",
    baseUrl: "http://localhost:3600/",
    setBaseUrl(url) {
      this.baseUrl = url;
    },
  },
  database: {
    mysql: {
      host: "localhost",
      port: 3306,
      user: "root",
      password: "",
      db: "test_db",
      timezone: "+00:00",
    },
  },
};
