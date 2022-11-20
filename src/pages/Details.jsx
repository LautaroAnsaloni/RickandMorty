import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios';
import Card from 'react-bootstrap/Card';
import { Col, Container, Row } from 'react-bootstrap';

const Details = () => {

  const { id } = useParams();
  const [dato, setDato] = useState({});
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get(`https://rickandmortyapi.com/api/character/${id}`);
        setDato(data);
        setError(false);
      } catch (error) {
        setError(true);
      }
    }
    fetchData();
  }, [id]);

  return (
    <Container className='animate__animated animate__backInUp'>
      <Row className="justify-content-md-center my-4">
        {!error &&
          <Col xs lg="6">
            <Card className="text-center" border="warning" bg="dark" text="light">
              <Card.Body>
                <Card.Img variant="top" src={dato.image} />
                <Card.Title className="mt-4">{dato.name}</Card.Title>
                <p><strong>Genero:</strong> {dato.gender}</p>
                <p><strong>Especie:</strong> {dato.species}</p>
              </Card.Body>
              <Card.Footer className="text-muted">{dato.status}</Card.Footer>
            </Card>
            <div className="d-grid mt-2">
              <Link to="/" className="btn btn-outline-warning btn-lg btn-block">
                  Volver
              </Link>
            </div>
          </Col>
        }
      </Row>
    </Container>
  )
}

export default Details