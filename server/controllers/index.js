let express = require("express");
let router = express.Router();
let mongoose = require("mongoose");


module.exports.displayHomePage = (req, res, next) => {
    res.render("index", {title: "Home"});
};

module.exports.displayaboutpage = (req, res, next) => {
    res.render("about", {title: "About me" });
};

module.exports.displayprojectspage = (req, res, next) => {
    res.render("projects", { title: "Projects" });
};

module.exports.displayservicespage = (req, res, next) => {
    res.render("services", { title: "Services" });
};

module.exports.displaycontactpage = (req, res, next) => {
    res.render("contact", { title: "Contact Me" });
};