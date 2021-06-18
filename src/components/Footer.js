import React from 'react'

function Footer() {
    return (
      
              <footer>
        <div className="row">
            <div className="col-3">
                <div className="footer-info">
                    <h5>Contact Info</h5>
                    <p><strong>Phone: </strong>+4 (509) 120 6705</p>
                    <p><strong>Address: </strong>1418, Riverwood Drive,<br />Suite 3245 Cottonwood,<br />CA 96052,
                        United State<br /></p>
                    <p>We Accept:</p>
                    <p style={{fontSize: "24px"}}><i className="fab fa-cc-amazon-pay"></i> <i className="fab fa-cc-apple-pay"></i>
                        <i className="fab fa-cc-paypal"></i></p>
                </div>
            </div>

            <div className="col-3">
                <div className="footer-info">
                    <h5>Get Help</h5>
                    <ul>
                        <li>
                            <a href="#">Delivery Information</a>
                        </li>
                        <li>
                            <a href="#">Sale Terms & Conditions</a>
                        </li>
                        <li>
                            <a href="#">Returns & Refunds</a>
                        </li>
                        <li>
                            <a href="#">Privacy Notice</a>
                        </li>
                        <li>
                            <a href="#">Shopping FAQs</a>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="col-3">
                <div className="footer-info">
                    <h5>Popular Categories</h5>
                    <ul>
                        <li>
                            <a href="#">Coats (45)</a>
                        </li>
                        <li>
                            <a href="#">Jeans (278)</a>
                        </li>
                        <li>
                            <a href="#">Tops (64)</a>
                        </li>
                        <li>
                            <a href="#">Sweaters (129)</a>
                        </li>
                        <li>
                            <a href="#">Jackets (3)</a>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="col-3">
                <div className="footer-info">
                    <h5>Let's Stay In Touch</h5>
                    <form className="footer-subscription">
                        <div className="form-group">
                            <input type="email" id="email" placeholder="your email address"/>
                        </div>
                        <button type="submit" className="black-bg-button">Subscribe</button>
                    </form>
                    <p>Keep up to date with our latest<br />news and special offers.</p>
                </div>
            </div>
        </div>

        <div className="follow-social-media">
            <a href="#"><p><i className="fab fa-instagram"></i> Instagram</p></a>
            <a href="#"><p><i className="fab fa-twitter"></i> Twitter</p></a>
            <a href="#"><p><i className="fab fa-facebook-f"></i> Facebook</p></a>
            <a href="#"><p><i className="fab fa-foursquare"></i> Foursquare</p></a>
        </div>

        <hr/>

        <div className="copyright-section">
            <p>&#169; 2019. Made with passion</p>
            <p>All rights reserved.</p>
        </div>
    </footer>
       
    )
}

export default Footer
