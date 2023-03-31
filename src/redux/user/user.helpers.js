import { toast } from "react-toastify";
import { auth } from "../../firebase/utils";

export const handleResetPasswordAPI = (email) => {
  return new Promise((resolve, reject) => {
    auth
      .sendPasswordResetEmail(email)
      .then(() => {
        resolve();
        toast.success("Email sent!");
      })
      .catch((error) => {
        var errorMessage = error.message;
        const err = [errorMessage];
        reject(err);
      });
  });
};
