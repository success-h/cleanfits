import React, { useEffect } from "react";
import { firebase } from "../auth";
const ResetPassword = () => {
  useEffect(() => {
    console.log("mounted");
  }, []);
  return (
    <div className="reset-password pt-5">
      <h1>Verify Email Address</h1>
    </div>
  );
};

export default ResetPassword;
