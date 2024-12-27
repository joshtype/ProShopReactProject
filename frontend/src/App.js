import React from 'react'
import { Container } from "react-bootstrap";
import { Outlet } from "react-router-dom";  // render Outlet instead of App
import Header from "./components/Header";
import Footer from "./components/Footer";

const App = () => {
  return (
    // Add components to be rendered
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
