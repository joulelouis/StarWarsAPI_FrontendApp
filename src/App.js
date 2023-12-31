import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Container, Dimmer, Loader } from 'semantic-ui-react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import People from './components/People';

function App() {

  // setup state variables using useState
  const [people, setPeople] = useState([]);
  const [loading, setLoading] = useState(true); //keep track if we're actually fetching the data from the API

  // fetch data from API using useEffect
  useEffect(() => {
    async function fetchPeople() {
      try {
        const response = await axios.get('/api/characters', { // request data from the endpoint
          headers: {
            "Content-Type": "application/x-www-form-urlencoded" //optional config used to set request headers
          }
        });
        const data = response.data;
        setPeople(data);
        setLoading(false);
      } catch (error) {
        // Handle any errors here
        console.error('Error fetching data:', error);
      }
    }
  
    fetchPeople();
  }, []);

  console.log('people', people);
  
  return (
    <>
      <Router>
          <Navbar />
          <Container>
            {loading ? (
              <Dimmer active inverted>
                <Loader inverted>Loading</Loader>
              </Dimmer>
            ) : (
              <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/people' element={<People data={people} />} />
              </Routes>
            )}
          </Container>
      </Router>
    </>
  );
}

export default App;

