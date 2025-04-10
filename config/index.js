// We reuse this import in order to have access to the `body` property in requests
const express = require("express");
// :information_source: Responsible for the messages you see in the terminal as requests are coming in
// https://www.npmjs.com/package/morgan
const logger = require("morgan");
// :information_source: Needed when we deal with cookies (we will when dealing with authentication)
// https://www.npmjs.com/package/cookie-parser
const cookieParser = require("cookie-parser");
// :information_source: Needed to accept requests from 'the outside'. CORS stands for cross origin resource sharing
// unless the request is made from the same domain, by default express wont accept POST requests
const cors = require("cors");
const FRONTEND_URL = process.env.ORIGIN || "https://surfology.netlify.app"; 
// Middleware configuration

module.exports = (app) => {
 
  app.set("trust proxy", 1);
  
  app.use(
    cors({
      origin: [FRONTEND_URL],
      credentials: true,
    })
  );

  // In development environment the app logs
  app.use(logger("dev"));
  // To have access to `body` property in the request
  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));
  app.use(cookieParser());
};