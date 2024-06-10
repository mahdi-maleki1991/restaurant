import React from 'react';
import { useRoutes } from 'react-router-dom';
import './App.css';
import { router } from './routers';
import Header from './Components/Header/Header';
import { Row, Col, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css'


// ------------------------------------------------------------------

export default function App() {

  const routers = useRoutes(router)

  // ----------------------------------------------------
  return (
    <>
      {routers}
    </>
  )
}

