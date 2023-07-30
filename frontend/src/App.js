import { Container } from "react-bootstrap";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Outlet } from "react-router-dom";

export default function App() {
  return (
    <>
      <Header />
      <main className="py-3">
        <Container>
          <Outlet/>
        </Container>
      </main>
      <Footer/>
    </>
  );
}
