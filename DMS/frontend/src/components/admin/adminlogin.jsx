import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export default function Login() {
  const [Adminusername, setAdminusername] = useState("");
  const [password, setPassword] = useState("");

  function validateForm() {
    return Adminusername.length > 0 && password.length > 0;
  }

  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <div className="Login">
      <Form onSubmit={handleSubmit}>
        <Form.Group size="sm" controlId="Adminusername">
          <Form.Label>Adminusername</Form.Label>
          <Form.Control
            autoFocus
            type="Adminusername"
            value={Adminusername}
            onChange={(e) => setAdminusername(e.target.value)}
          />
        </Form.Group>
        <Form.Group size="sm" controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        <Button block size="sm" type="submit" disabled={!validateForm()}>
          Login
        </Button>
      </Form>
    </div>
  );
}
