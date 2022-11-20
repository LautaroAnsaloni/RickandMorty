import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom'

const Cards = ({id, name, image}) => {

    const navigate = useNavigate();
    const redirectDetails = () => {
        navigate(`/details/${id}`)
    }
  return (
    <Card className="text-center mx-2" border="warning" bg="dark" text="light" style={{ width: '18rem' }}>
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Img variant="top" src={image} />
          <Card.Text>
          </Card.Text>
          <Button variant="warning" onClick={redirectDetails}>Ver más</Button>
        </Card.Body>
      </Card>
  )
}

export default Cards