/*
 * App.js is imported by index.js to instruct index.js on what to render.
 * App() returns components (screens) that need to be rendered.
 * Importing Outlet & Container & returning <Outlet /> instead of <App />
 * enables nav between which screens need to be rendered via <Link to>.
*/
import React from 'react'
import { Container } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";

const App = () => {
  return (
    // Header & Footer always rendered
    <>
      <Header />

      <main className="py-3">
        <Container>
          <Outlet />
        </Container>
      </main>

      <Footer />
    </>
  );
}

export default App
