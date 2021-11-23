import { Container } from "react-bootstrap";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import ProductDetail from "./pages/ProductDetail";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <Header />
      <main className='py-3'>
        <Container>
          <Route exact path='/' component={HomePage} />
          <Route path='/product/:id' component={ProductDetail} />
        </Container>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
