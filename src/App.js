import { Container } from "react-bootstrap";

import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Header />
      <main className='py-3'>
        <Container>
          <HomePage />
        </Container>
      </main>
      <Footer />
    </div>
  );
}

export default App;
