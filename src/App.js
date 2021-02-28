import { BrowserRouter, Switch, Route } from "react-router-dom"
import Header from "./Components/Header"
import Footer from "./Components/Footer"
import Home from "./pages/Home"
import CondicaoFisica from "./pages/CondicaoFisica"
import Personalidade from "./pages/Personalidade"
import { Container } from 'react-bootstrap';

function App() {
  return (
    <Container>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path="/" exact={true} component={Home} />
          <Route path="/condicaofisica" exact={true} component={CondicaoFisica} />
          <Route path="/personalidade" exact={true} component={Personalidade} />
        </Switch>
        <Footer />
      </BrowserRouter>
    </Container>);
}

export default App;
