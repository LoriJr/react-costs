import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import Home from './components/pages/Home'
import Contact from './components/pages/Contact'
import NewProject from './components/pages/NewProject'
import Company from './components/pages/Company'

import Container from './components/layout/Container'

function App() {
  return (
   <Router>
    <div>
      <Link to="/">Home</Link>
      <Link to="/contact">Contato</Link>
      <Link to="/company">Empresa</Link>
      <Link to="/newProject">Novo Projeto</Link>      
    </div>
      <Container customClass="min-height">
        <Routes>          
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/newProject" element={<NewProject />} />
          <Route path="/company" element={<Company />} />
        </Routes>
      </Container>
    <p>Footer</p>
   </Router>
  )
}

export default App;
