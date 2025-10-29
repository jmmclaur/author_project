import React, { useState } from "react";
import FormModal from "../FormModal/FormModal.jsx";

const RegisterModal = ({
  activeModal,
  handleRegistration,
  handleLoginClick,
  onClose,
}) => {
  //email
  const [email, setEmail] = useState("");
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  //password
  const [password, setPassword] = useState("");
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  //name
  const [name, setName] = useState("");
  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  //submit
  const handleSubmit = (e) => {
    e.preventDefault();
    handleRegistration(name, email, password);
    //setFormData({ name: "", email: "" });
  };

  //registration form
  return (
    <FormModal
      title="Sign Up"
      buttonText="Sign Up"
      isOpen={activeModal === "sign-up"}
      onLinkClick={handleLoginClick}
      onClose={onClose}
      onSubmit={handleSubmit}
    >
      <label className="modal_label">
        <input
          type="email"
          className="modal_input"
          id="email"
          placeholder="Email"
          required
          value={email}
          onChange={handleEmailChange}
        />
      </label>
      <label className="modal_label">
        <input
          type="password"
          className="modal_input"
          id="password"
          placeholder="Password"
          minLength="2"
          required
          value={password}
          onChange={handlePasswordChange}
        />
      </label>
      <label className="modal_label">
        <input
          type="text"
          className="modal_input"
          id="name"
          placeholder="Name"
          minLength="2"
          maxLength="50"
          required
          value={name}
          onChange={handleNameChange}
        />
      </label>
    </FormModal>
  );
};

export default RegisterModal;
