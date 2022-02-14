import { Button } from "@mui/material";
import React from "react";
import { auth } from "../firebase";

function SignOut() {
  return (
    <div className="header">
      <Button style={{ color: "white" }} onClick={() => auth.signOut()}>
        サインアウト
      </Button>
    </div>
  );
}

export default SignOut;
