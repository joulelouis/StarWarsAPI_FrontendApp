import React from 'react'
import { Card, Container, Row, Col } from 'react-bootstrap';

const People = ({ data }) => {
  return (
    <Container>
      <h1>Characters</h1>
      <Row  >
        {data.map((people, i) => (
          <Col key={i} sm={12} md={6} lg={4} xl={3}>
            <Card style={{ marginTop: '10px', marginBottom: '10px'}}>
              <Card.Body>
                <Card.Img src={people.image}></Card.Img>
                <Card.Title>{people.name}</Card.Title>
                <Card.Text>
                  <strong>Height</strong>
                  <p>{people.height}</p>
                  <strong>Gender</strong>
                  <p>{people.gender}</p>
                  <strong>Birth Year</strong>
                  <p>{people.birth_year}</p>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>

    
  )
}

export default People