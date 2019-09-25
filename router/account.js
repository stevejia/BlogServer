const express = require("express");
const router = express.Router();
const wrap = require("../util/asyncErrorHandler");
const { LocalStorage } = require("node-localstorage");
const localStorage = new LocalStorage("./auth");

router.post(
  "/ssologin",
  wrap(async function(req, res) {
    let data = await http.post("account/ssologin", req.body);
    console.log(data);
    localStorage.setItem("admin_token", data.token);
    res.sendStatus(200).send(data);
  })
);
router.get(
  "/check",
  wrap(async function(req, res) {
    var token = localStorage.getItem("admin_token");
    if (!token) {
      res.sendStatus(401);
      return;
    }
    var data = await http.get("account/CheckLogin", { oldToken: token });
    var newToken = data.Data.newToken;
    localStorage.setItem("admin_token", newToken);
    res.sendStatus(200);
  })
);
router.post(
  "/logout",
  wrap(async function(req, res) {
    var token = localStorage.getItem("admin_token");
    await http.get("account/CheckLogin", { oldToken: token });
    localStorage.removeItem("admin_token");
    res.sendStatus(200);
  })
);
module.exports = exports = router;
