import React from 'react'
import {Link} from 'react-router-dom'
const Footer = () => {
  return(
    <footer className="footer bg-dark pt-5 mt-4" style={{overflow: 'hidden'}}>
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4 mb-5 text-light">
            <h3 className="mb-3">Contact Us</h3>
            <h4 className="mb-3 lead">Address</h4>
            <address className="pl-3">
              <p>123 Mayne Street,</p>
              <p>Karu-site, Abuja Municipal.</p>
              <p>Federal Capital Territory, Abuja.</p>
            </address>
            <h4 className="mb-3 lead">Email</h4>
            <a href="mailto:hello@cleanfits.cf" className="nav-link">Hello@Cleanfits.cf</a>
          </div>
          <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4 mb-5 text-light">
            <h3 className="mb-3">Quick Links</h3>
            <nav className="navbar-dark">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link className="nav-link" to="/">Home</Link>
                </li>
                {/* <li className="nav-item">
                  <Link className="nav-link" to="/producrs">Products</Link>
                </li> */}
                <li className="nav-item">
                  <Link className="nav-link" to="/pricing">Pricing</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/how-it-works">How It Works</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/about">About</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/contact">Contact</Link>
                </li>
              </ul>
            </nav>
          </div>
          <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4 mb-5 text-light">
            <h3 className="mb-3">Follow Us</h3>
          </div>
        </div>
      </div>

      <div className="row" style={{background: "rgba(0, 0, 0, 0.2)"}}>
        <div className="col-12 mx-auto text-center text-secondary py-4">
          <p>Copyright &copy; {new Date().getFullYear()}, Cleanfits LLC.</p>
        </div>
      </div>

    </footer>
  )
}

export default Footer