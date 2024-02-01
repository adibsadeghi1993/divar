const { Router } = require("express");
const authContoller = require("./auth.contoller");
const router = Router();

router.post("/send-otp", authContoller.sendOTP);
router.post("/check-otp", authContoller.checkOTP);

module.exports = {
  AuthRouter: router,
};
