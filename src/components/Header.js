import React from 'react'

function Header() {
    return (
      
              <header>
        <nav className="navbar navbar-expand-lg navbar-light fixed-top">
            <button className="navbar-toggler" data-toggle="collapse" data-target=".navbar-collapse"
                aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="container-fluid header-navs" id="navbarSupportedContent">
                <div className="navbar-collapse collapse left-nav">
                    <ul className="navbar-nav">
                        <li className="nav-item dropdown">
                            <a href="#" className="nav-link dropdown-toggle" id="language-dropdown" role="button"
                                data-toggle="dropdown" aria-expanded="false" aria-haspopup="true">
                                English
                            </a>
                            <div className="dropdown-menu" aria-labelledby="language-dropdown">
                                <a href="#" className="dropdown-item">English</a>
                            </div>
                        </li>
                        <li className="nav-item">
                            <i className="fas fa-search"></i>
                        </li>
                    </ul>

                    <ul className="navbar-nav no-margin">
                        <li className="navbar-item active">
                            <a href="#" className="nav-link">Home</a>
                        </li>
                        <li className="navbar-item">
                            <a href="#" className="nav-link">Chinos</a>
                        </li>
                        <li className="navbar-item">
                            <a href="#" className="nav-link">Polo Shirts</a>
                        </li>
                    </ul>
                </div>

                <a href="#" className="navbar-brand mx-auto"><span >Liberi</span> <span
                       >Studio</span></a>

                <div className="navbar-collapse collapse right-nav">
                    <ul className="navbar-nav no-margin">
                        <li className="navbar-item">
                            <a href="#" className="nav-link">Blazer</a>
                        </li>
                        <li className="navbar-item">
                            <a href="#" className="nav-link">Shalwar Kameez</a>
                        </li>
                        <li className="navbar-item">
                            <a href="#" className="nav-link">Kurta and Waistcoat</a>
                        </li>
                    </ul>

                    <ul className="navbar-nav">
                        <li className="navbar-item">
                            <i className="far fa-heart"></i>
                        </li>
                        <li className="navbar-item">
                            <span>0.00$</span>
                        </li>
                        <li className="navbar-item">
                            <div className="shopping-cart">
                                <i className="fas fa-shopping-bag"></i>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </header>
  
    )
}

export default Header
