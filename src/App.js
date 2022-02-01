import { BrowserRouter as Router,Routes,Route ,Link } from "react-router-dom";
import './App.css';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import React from "react";

import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import Vote from "./pages/Vote";
//app.js där navbar ligger samt routes och path till de olika sidorna

class App extends React.Component {


render() {
return (
<Router>
<Container className="p=0" fluid ={true}>

<Navbar className="border-bottom" bg="transparent" expand ="lg" style={{ background: 'radial-gradient(rgb(103, 187, 212), rgb(78, 142, 161))'}}>
<Navbar.Brand style={{ fontSize:'27px', letterSpacing:'1px', fontFamily: 'Roboto, sans-serif', color: 'white', padding:'15px', backgroundColor:'transparent'}}> Angelica Löfland </Navbar.Brand>

<Navbar.Toggle className="border-0" aria-controls="navbar-toggle" style={{backgroundColor:'transparent'}}/>
<Navbar.Collapse id = "navbar-toggle" style={{backgroundColor:'transparent'}}>
<Nav id="links" className ="ml-auto" style={{backgroundColor:'transparent'}}>
<Link className="nav-link" to ="/">Home</Link>
<Link className="nav-link" to ="/about">Information</Link>
<Link className="nav-link" to ="/recipe">Recipe</Link>
<Link className="nav-link" to ="/vote">Vote</Link>

</Nav>
</Navbar.Collapse>
</Navbar>
<Routes>
<Route path="/" element = {<HomePage />} />
<Route path="/about" element ={<AboutPage />} />
<Route path="/recipe" element ={<ContactPage />} />
<Route path="/vote" element ={<Vote />} />
</Routes>


</Container>

</Router>
);
}
}

export default App;
