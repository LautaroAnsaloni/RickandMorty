import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Container, Row } from 'react-bootstrap';
import Cards from '../components/Cards';

const Home = () => {

    const [dato, setDato] = useState([]);
    const [error, setError] = useState(false);
    const [paginador, setPaginador] = useState(1)
  
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const { data } = await axios.get(`https://rickandmortyapi.com/api/character?page=${paginador}`);
          setDato(data.results);
          setError(false);
        } catch (error) {
          setError(true);
        }
      }
      fetchData();
    }, [paginador])

    return (
        <Container>
    
          <Row>
            {error && (
              <div>
                <h4 className="text-danger font-weight-700">No hay datos disponibles</h4>
              </div>
            )}
          </Row>
    
          <Row className="g-3 m-auto">
            {dato.map((d) => (
    
              <Cards key={d.id} id={d.id} name={d.name} image={d.image} />
    
            ))}
          </Row>
    
          <Row>
            <div className="btn-group m-auto my-5 d-flex" role="group" aria-label="Basic example">
              <button type="button" onClick={() => setPaginador((paginador) => paginador - 1)} className={(paginador - 1) ? "btn btn-outline-warning p-3 text-dark" : "btn btn-danger p-3 disabled"}>Atras</button>
              <button type="button" onClick={() => setPaginador((paginador) => paginador + 1)} className={(paginador + 1) ? "btn btn-outline-warning p-3 text-dark" : "btn btn-danger p-3 disabled"}>Siguiente</button>
            </div>
          </Row>
    
        </Container>
      )
    }
    
    export default Home