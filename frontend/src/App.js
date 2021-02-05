import React, { Fragment } from 'react'
import { Container } from 'react-bootstrap'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './index.css'

//Components
import Header from './components/Header'
import Footer from './components/Footer'
import HomeScreen from './screens/HomeScreen'

const App = () => (
  <Router>
    <Header />
    <main className='py-3'>
      <Container className='text-center'>
        <Route path='/' component={HomeScreen} />
      </Container>
    </main>
    <Footer />
  </Router>
)

export default App
