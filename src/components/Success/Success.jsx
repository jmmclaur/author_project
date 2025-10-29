//make a registration success page so the user is redirected here and asked to login
//9.9.2025

//redirect user
//message 1 "You have successfully registered"
//close modal
//message/text 2 "Please login, your adventure awaits"
//login button
//redirect to signpost page

import React, { useState } from "react";
import FormModal from "../FormModal/FormModal";

const Success = ({ handleLoginClick, onClose }) => {
  console.log("Hi");
  return (
    <FormModal
      title="Registration complete"
      isOpen={activeModal === "register-success"}
      onLinkClick={handleLoginClick}
      onClose={onClose}
    >
      <>
        <div>You have successfully registered!</div>
        <div>Please login, your adventure awaits!</div>
        <button>Login</button>
      </>
    </FormModal>
  );
};

export default Success;
