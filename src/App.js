import logo from './logo.svg';
import '../node_modules/bootstrap/dist/css/bootstrap.css';

import './App.css';
import './styles.css';
//import './styles.scss';
//import './styles.css.map';
import { Navbar, Nav } from "react-bootstrap";
import Logo from './components/images/ss.jpg';

import { BrowserRouter as Router,Link,NavLink,Switch, Route  } from "react-router-dom";
import styled ,{keyframes} from 'styled-components';
import ControlledCarousel from "./ControlledCorousel";
import Header from './components/Header';
import Sections from './components/Sections';
import Footer from './components/Footer';
const activeClassName = 'nav-item-active'

const StyledLink = styled(NavLink).attrs({ activeClassName })`
  &.${activeClassName} {
    float: left;
  
    color:#FF1493	;
    
  }
`;


function App() {
  return (
    <>
    {/*
  //   <nav className="navbar navbar-expand-lg navbar-light bg-light">
  //   <div className="container-fluid">
  //     <a className="navbar-brand" href="#">Navbar</a>
  //     <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
  //       <span className="navbar-toggler-icon"></span>
  //     </button>
  //     <div className="collapse navbar-collapse" id="navbarSupportedContent">
  //       <ul className="navbar-nav me-auto mb-2 mb-lg-0">
  //         <li className="nav-item">
  //           <a className="nav-link active" aria-current="page" href="#">Home</a>
  //         </li>
  //         <li className="nav-item">
  //           <a className="nav-link" href="#">Link</a>
  //         </li>
  //         <li className="nav-item dropdown">
  //           <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
  //             Dropdown
  //           </a>
  //           <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
  //             <li><a className="dropdown-item" href="#">Action</a></li>
  //             <li><a className="dropdown-item" href="#">Another action</a></li>
  //             <li><hr className="dropdown-divider"/></li>
  //             <li><a className="dropdown-item" href="#">Something else here</a></li>
  //           </ul>
  //         </li>
  //         <li className="nav-item">
  //           <a className="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
  //         </li>
  //       </ul>
  //       <form className="d-flex">
  //         <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
  //         <button className="btn btn-outline-success" type="submit">Search</button>
  //       </form>
  //     </div>
  //   </div>
  // </nav>

{/*<>
 <Router>
<Nav className="justify-content-center" activeKey="/home">
  <Nav.Item>
    <Nav.Link href="/home"><StyledLink to="/home" >Home </StyledLink></Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link eventKey="link-1"> <StyledLink to="/chinos" >Chinos</StyledLink></Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link eventKey="link-2"><StyledLink to="/polo" >Polo Shirts</StyledLink></Nav.Link>
  </Nav.Item>
  <Navbar.Brand  > 
      <Link to="/">
       <img width="70px" height="auto" className="img-responsive" src={Logo}  alt="logo" />              
      </Link> 
     </Navbar.Brand>
  <Nav.Item>
    <Nav.Link eventKey="link-2"><StyledLink to="/blazer" >Blazer</StyledLink></Nav.Link>
  </Nav.Item>

  <Nav.Item>
    <Nav.Link eventKey="link-2"><StyledLink to="/salwar" >Salwar Kameez</StyledLink></Nav.Link>
  </Nav.Item>

  <Nav.Item>
    <Nav.Link eventKey="link-2"><StyledLink to="/kurta" >Kurta and Waistcoat</StyledLink></Nav.Link>
  </Nav.Item>
  

</Nav>
<div className="container">
  <div className="row">
<div className="col">
<ControlledCarousel />
</div>
<div className="col">

</div>

</div>
</div>
</Router> 

</>*/}
  


  
 

 
<Header/>
<Sections/>
<Footer/>
  


</>
     
  );
}

export default App;
