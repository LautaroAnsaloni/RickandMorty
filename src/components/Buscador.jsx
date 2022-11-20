import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import Cards from './Cards';

const Buscador = () => {

  const { query } = useParams();
  const [dato, setDato] = useState([]);
  const [error, setError] = useState(false);
  const [paginador, setPaginador] = useState(1)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get(`https://rickandmortyapi.com/api/character/?page=${paginador}&name=${query}`);
        setDato(data.results);
        setError(false);
      } catch (error) {
        setError(true);
      }
    }
    fetchData();
  }, [query, paginador])

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
        {!error && (
          dato.map((d) => (
            <Cards key={d.id} id={d.id} name={d.name} image={d.image} />
          ))
        )}
      </Row>

      <Row>
        {!error && (
          <div className="btn-group m-auto my-5 d-flex" role="group" aria-label="Basic example">

            <button type="button" onClick={() => setPaginador((paginador) => paginador - 1)} className={(paginador - 1) ? "btn btn-outline-warning p-3 text-dark" : "btn btn-danger p-3 disabled"}>Atras</button>

            {!(dato.length > 19) ? (
              <button type="button" onClick={() => setPaginador((paginador) => paginador + 1)} className="btn btn-danger p-3 disabled">Siguiente</button>
            ) : (
              <button type="button" onClick={() => setPaginador((paginador) => paginador + 1)} className="btn btn-outline-warning p-3 text-dark">Siguiente</button>
            )}

          </div>
        )}
      </Row>

    </Container>
  )
}

export default Buscador