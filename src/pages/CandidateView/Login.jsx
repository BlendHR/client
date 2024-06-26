// import "../ai-gen/front-screen.css"
import { Container, Row, Col, Card, Form, Button } from "react-bootstrap";


function handleLogin() {
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

}
const FrontScreen = () => {
  return (
      <Container>
        <Row className="vh-100 d-flex justify-content-center align-items-center">
          <Col md={8} lg={6} xs={12}>
            <div className="border border-3 border-primary"></div>
            <Card className="shadow custom-card" style={{width: 600}}>
              <Card.Body>
                <div className="mb-3 mt-4">
                  <h2 className="fw-bold mb-2 text-uppercase">Welcome to Application Portal</h2>
                  <p className=" mb-5">Please enter your login and password!</p>
                  <Form className="mb-3">
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Label className="text-center">
                        Email address
                      </Form.Label>
                      <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                      <Form.Label>Password</Form.Label>
                      <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    <div className="mb-3">
                      <p className="small">
                        <a className="text-primary" href="#!">
                          Forgot password?
                        </a>
                      </p>
                    </div>
                    <div className="d-grid">
                      <Button variant="primary" type="submit" onClick={handleLogin}>
                        Login
                      </Button>
                    </div>
                  </Form>
                  <div className="mt-3">
                    <p className="mb-0  text-center">
                      Don't have an account?{" "}
                      <a href="{''}" className="text-primary fw-bold">
                        Sign In
                      </a>
                    </p>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        </Container>
  );

};

export default FrontScreen;