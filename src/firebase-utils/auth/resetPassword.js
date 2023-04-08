import { verifyPasswordResetCode, confirmPasswordReset } from "firebase/auth";
import { auth } from "../initApp";
import createNotification from "../../utils/createNotification";
import authorizeClient from "./authorizeClient";

function resetPassword(newPassword, actionCode) {
  // Verify the password reset code is valid.
  verifyPasswordResetCode(auth, actionCode)
  .then((email) => {
    const accountEmail = email;

    // Save the new password.
    confirmPasswordReset(auth, actionCode, newPassword)
    .then(() => {
      authorizeClient(accountEmail, newPassword)
    }).catch(() => {
      createNotification('error', 'Error resetting password! Your code may be expired or invalid. Please try again.')
    });
  }).catch(() => {
    createNotification('error', 'Error resetting password! Your code may be expired or invalid. Please try again.')
  });
}

export default resetPassword