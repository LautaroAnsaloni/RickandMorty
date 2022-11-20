import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Row from "react-bootstrap/Row";
import * as yup from "yup";
import { Formik } from "formik";
import { Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./FormLogin.css";

const schema = yup.object().shape({
  username: yup
    .string()
    .required("Las credenciales son incorrectas")
    .email("Ingrese un email válido"),
  password: yup
    .string()
    .required("El usuario o contraseña con incorrectos")
    .max(15, "exedió el limite de caracteres"),
  terms: yup.bool().required().oneOf([true], "Acepte para continuar"),
});

const FormLogin = () => {
  const goTo = useNavigate();
  const validar = (email, pass) => {
    const datosUser = JSON.parse(localStorage.getItem("users"));

    if (email === datosUser.correo && pass === datosUser.contrasenia) {
      localStorage.setItem("userLogged", true);

      window.location.replace("/");
    }
  };
  return (
    <div className="fluid bg-dark pt-5" id="loginDiv">
      <Container>
        <Formik
          validationSchema={schema}
          onSubmit={console.log}
          initialValues={{
            email: "",
            password: "",

            terms: false,
          }}
        >
          {({
            handleSubmit,
            handleChange,
            handleBlur,
            values,
            touched,
            isValid,
            errors,
          }) => (
            <Form noValidate onSubmit={handleSubmit}>
              <Row className="justify-content-center">
                <Col xs="10" md="5">
                  <h1 className="text-warning">Login</h1>
                  <Row className="mb-3">
                    <Form.Group
                      as={Col}
                      md="12"
                      controlId="validationFormikUsername"
                    >
                      <Form.Label className="text-warning">Correo electronico</Form.Label>
                      <InputGroup hasValidation>
                        <Form.Control
                          type="email"
                          placeholder="ejemplo@ejemplo.com"
                          name="username"
                          value={values.username}
                          onChange={handleChange}
                          isInvalid={!!errors.username}
                        />
                        <Form.Control.Feedback type="invalid">
                          {errors.username}
                        </Form.Control.Feedback>
                      </InputGroup>
                    </Form.Group>
                  </Row>
                  <Row className="mb-3">
                    <Form.Group as={Col} md="12" controlId="validationFormik03">
                      <Form.Label className="text-warning">Contraseña</Form.Label>
                      <Form.Control
                        type="password"
                        placeholder="********"
                        name="password"
                        value={values.password}
                        onChange={handleChange}
                        isInvalid={!!errors.password}
                      />

                      <Form.Control.Feedback type="invalid">
                        {errors.password}
                      </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group className="mb-3 mt-5 text-white">
                      <Form.Check
                        required
                        name="terms"
                        label="Aceptar terminos y condiciones"
                        onChange={handleChange}
                        isInvalid={!!errors.terms}
                        feedback={errors.terms}
                        feedbackType="invalid"
                        id="validationFormik0"
                      />
                    </Form.Group>

                    <Button
                      type="submit"
                      variant="outline-warning"
                      onClick={() => validar(values.username, values.password)}
                    >
                      Ingresar{" "}
                    </Button>

                    <Button
                      type="button"
                      className="mt-3"
                      variant="outline-warning"
                      onClick={() => goTo("/register")}
                    >
                      Registrarme
                    </Button>
                  </Row>
                </Col>
                <Col md="7" className="d-flex justify-content-center">
                  <img
                    className=" d-none d-md-flex"
                    src="https://static.tvtropes.org/pmwiki/pub/images/rick_and_morty.png"
                    alt=""
                  />
                </Col>
              </Row>
            </Form>
          )}
        </Formik>
      </Container>
    </div>
  );
};

export default FormLogin;
