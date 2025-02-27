import AuthController from "@controllers/authController";
import express from "express";
import { authorize, recoveryAuthorize } from "@middlewares/authorization";

const authRouter = express.Router();

authRouter.post("/register", AuthController.register);
authRouter.post("/activate", AuthController.activate);
authRouter.post("/login", AuthController.login);
authRouter.post("/signin-with-google", AuthController.signInWithGoogle);
authRouter.post("/recovery", AuthController.recovery);
authRouter.post("/recovery-verify", AuthController.recovery);
authRouter.post("/reset-password", recoveryAuthorize, AuthController.resetPassword);
authRouter.post("/resend-otp", AuthController.resendOTP);
authRouter.post("/change-password", authorize, AuthController.changePassword);
authRouter.delete("/delete", authorize, AuthController.remove);

export default authRouter;
