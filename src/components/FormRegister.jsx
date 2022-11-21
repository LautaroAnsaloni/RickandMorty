import React, { useState } from "react";
import { Formik } from "formik";
import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { schemaFormRegister } from "../utils/ValidatedForm";
import "./FormLogin.css";

const FormRegister = () => {
  const [users, setUsers] = useState([]);

  const registro = (name, surname, doc, dateBirth, email, password) => {
    const user = {
      name,
      surname,
      doc,
      dateBirth,
      email,
      password,
    };

    setUsers([...users, user]);

    localStorage.setItem("users", JSON.stringify(user));
    window.location.replace("/");
  };

  return (
    <div className="fluid bg-dark pt-5" id="loginDiv">
      <Container className="my-3">
        <h1 className="text-warning">Registro</h1>
        <Formik
          validationSchema={schemaFormRegister}
          initialValues={{
            firstName: "",
            lastName: "",
            dni: "",
            birthDay: "",
            email: "",
            password: "",
            terms: false,
          }}
        >
          {({
            handleSubmit,
            handleChange,
            values,
            touched,
            errors,
            isSubmitting,
          }) => (
            <Form noValidate onSubmit={handleSubmit} className="text-warning">
              <Row mb-3>
                <Form.Group as={Col} md="6" controlId="validationFirstName">
                  <Form.Label>Nombre</Form.Label>
                  <Form.Control
                    type="text"
                    name="firstName"
                    value={values.firstName}
                    onChange={handleChange}
                    isValid={touched.firstName && !errors.firstName}
                    isInvalid={!!errors.firstName}
                    feedback={errors.firstName}
                    feedbackType="invalid"
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.firstName}
                  </Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} md="6" controlId="validationLastName">
                  <Form.Label>Apellido</Form.Label>
                  <Form.Control
                    type="text"
                    name="lastName"
                    value={values.lastName}
                    onChange={handleChange}
                  />
                </Form.Group>
              </Row>
              <Row mb-3>
                <Form.Group as={Col} md="6" controlId="validationFormikEmail">
                  <Form.Label>E-mail</Form.Label>
                  <Form.Control
                    type="email"
                    name="email"
                    value={values.email}
                    onChange={handleChange}
                    isValid={touched.email && !errors.email}
                    isInvalid={!!errors.email}
                    feedback={errors.email}
                    feedbackType="invalid"
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.email}
                  </Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} md="6" controlId="validationBirthDay">
                  <Form.Label>Fecha Nac.</Form.Label>
                  <Form.Control
                    type="date"
                    name="birthDay"
                    value={values.birthDay}
                    onChange={handleChange}
                  />
                </Form.Group>
              </Row>
              <Row mb-3>
              <Form.Group
                  as={Col}
                  md="6"
                  controlId="validationFormikPassword"
                >
                  <Form.Label>Contraseña</Form.Label>
                  <Form.Control
                    type="password"
                    name="password"
                    value={values.password}
                    onChange={handleChange}
                    isValid={touched.password && !errors.password}
                    isInvalid={!!errors.password}
                    feedback={errors.password}
                    feedbackType="invalid"
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.password}
                  </Form.Control.Feedback>
                </Form.Group>
                <Form.Group
                  as={Col}
                  md="6"
                  controlId="validationFormikPassword"
                >
                  <Form.Label>Valide contraseña</Form.Label>
                  <Form.Control
                    type="password"
                    name="password"
                    value={values.password}
                    onChange={handleChange}
                    isValid={touched.password && !errors.password}
                    isInvalid={!!errors.password}
                    feedback={errors.password}
                    feedbackType="invalid"
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.password}
                  </Form.Control.Feedback>
                </Form.Group>
              </Row>
              <Form.Group className="mb-3 mt-3">
                <Form.Check
                  required
                  name="terms"
                  label="Aceptar Términos y Condiciones"
                  onChange={handleChange}
                  isInvalid={!!errors.terms}
                  feedback={errors.terms}
                  feedbackType="invalid"
                  id="validationFormik0"
                />
              </Form.Group>
              <Button
                type="submit"
                disabled={isSubmitting}
                onClick={() =>
                  registro(
                    values.firstName,
                    values.lastName,
                    values.dni,
                    values.birthday,
                    values.email,
                    values.password
                  )
                }
              >
                Registrarse
              </Button>
            </Form>
          )}
        </Formik>
      </Container>
    </div>
  );
};

export default FormRegister;
