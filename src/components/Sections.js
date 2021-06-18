import React from 'react'
import { Navbar, Nav } from "react-bootstrap";

import shark from './images/shark-collar-look.jpg';
import navy from './images/Navy_detail.jpg';
import trouser from './images/trouser.jpeg'
import bannerbg from './images/banner-bg.jpg'
import perfectfit from'./images/perfect_fit.jpg'
import big from './images/big-2.jpg'
import blazergreyscale from './images/blazer_greyscale.jpg'
import store from './images/store.jpg'

function Sections() {
    return (
        <div>
               <section className="banner-section">
        <div className="banner-image-text-wrapper">
            <div className="banner-image-text">
                <div className="text-overlay">
                    <p>03. High Quality T-Shirts</p>
                    <h3>Customize by<br />Your Choice</h3>
                    <a href="#">Shop by Category <i className="fas fa-angle-right"></i></a>
                </div>
            </div>
        </div>
        <div className="banner-bg"></div>
        <div className="scroll-down-button">
            <svg viewBox="0 0 330 330">
                <path id="XMLID_225_" d="M325.607,79.393c-5.857-5.857-15.355-5.858-21.213,0.001l-139.39,139.393L25.607,79.393
                    c-5.857-5.857-15.355-5.858-21.213,0.001c-5.858,5.858-5.858,15.355,0,21.213l150.004,150c2.813,2.813,6.628,4.393,10.606,4.393
                    s7.794-1.581,10.606-4.394l149.996-150C331.465,94.749,331.465,85.251,325.607,79.393z" />
            </svg>
        </div>
    </section>

    <section className="container-fluid free-shipping">
        <svg viewBox="0 -2 512 512">
            <path
                d="m500.183594 375.335938c2.703125.976562 5.714844.570312 8.066406-1.082032s3.75-4.347656 3.75-7.222656v-44.402344c0-3.011718-1.535156-5.8125-4.070312-7.433594l-216.621094-138.636718v-141.242188c.003906-9.96875-4.207032-19.472656-11.589844-26.164062-7.386719-6.695313-17.253906-9.957032-27.175781-8.984375-18.421875 2.285156-32.160157 18.089843-31.851563 36.648437v139.742188l-216.621094 138.636718c-2.535156 1.621094-4.070312 4.425782-4.070312 7.433594v44.402344c0 2.875 1.398438 5.570312 3.75 7.222656s5.363281 2.058594 8.066406 1.085938l208.875-75.195313v119.449219c-.003906 2.621094-1.167968 5.105469-3.179687 6.78125l-46.609375 38.84375c-2.011719 1.675781-3.179688 4.160156-3.179688 6.78125v28.140625c0 2.792969 1.320313 5.417969 3.558594 7.082031 2.238281 1.667969 5.132812 2.175782 7.808594 1.375l74.375-22.3125c1.652344-.496094 3.417968-.496094 5.070312 0l74.375 22.3125c2.675782.800782 5.570313.292969 7.808594-1.375 2.238281-1.664062 3.558594-4.289062 3.558594-7.082031v-28.136719c0-2.621094-1.167969-5.105468-3.179688-6.78125l-46.609375-38.84375c-2.011719-1.675781-3.175781-4.160156-3.179687-6.78125v-119.453125zm0 0" />
        </svg>
        <p>
            <strong>Free Worldwide Shipping: </strong>Get free shipping with our Special Service and not redeemable for
            cash or credit. <a href="#">See Details</a>
        </p>
    </section>

    <section className="container featured-products-section">
        <div className="row">
            <div className="col-4">
                <div className="feature-text">
                    <h4>Custom Tailored</h4>
                    <h2>Cotton Textured<br />Chinos starting<br />from <span >$14.99</span>
                    </h2>
                    <button className="black-bg-button"><strong>Go Shopping <i
                                className="fas fa-angle-right"></i></strong></button>
                </div>
            </div>
            <div className="col-4">
                <div className="product-card short-height">
                    <div className="product-image" style={{backgroundImage: `url(${shark})`}} >
                        <div className="sale-badge">
                            <p>SALE</p>
                        </div>
                        <div className="quick-action-buttons">
                            <div className="row">
                                <div className="col-6">
                                    <button className="black-bg-button">Save</button>
                                </div>
                                <div className="col-6">
                                    <button className="black-bg-button">Quickview</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="product-details">
                        <p className="product-name">Shalwar Kameez</p>
                        <p><span className="product-mrp">250.00$</span><span className="product-sale-price">120.00$</span></p>
                    </div>
                </div>
            </div>
            <div className="col-4">
                <div className="product-card">
                    <div className="product-image" style={{backgroundImage: `url(${navy})`}}>
                        <div className="sale-badge">
                            <p>SALE</p>
                        </div>
                        <div className="quick-action-buttons">
                            <div className="row">
                                <div className="col-6">
                                    <button className="black-bg-button">Save</button>
                                </div>
                                <div className="col-6">
                                    <button className="black-bg-button">Quickview</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="product-details">
                        <p className="product-name">Kurta and Waistcoat</p>
                        <p><span className="product-mrp">139.00$</span><span className="product-sale-price">68.00$</span></p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section className="container featured-products-section">
        <div className="row">
            <div className="col-4">
                <div className="product-card">
                    <div className="product-image" style={{backgroundImage: `url(${trouser})`}}>
                        <div className="sale-badge">
                            <p>SALE</p>
                        </div>
                        <div className="quick-action-buttons">
                            <div className="row">
                                <div className="col-6">
                                    <button className="black-bg-button">Save</button>
                                </div>
                                <div className="col-6">
                                    <button className="black-bg-button">Quickview</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="product-details">
                        <p className="product-name">Blazer</p>
                        <p><span className="product-mrp">89.00$</span><span className="product-sale-price">27.00$</span></p>
                    </div>
                </div>
            </div>
            <div className="col-4">
                <div className="product-card short-height">
                    <div className="product-image" style={{backgroundImage: `url(${bannerbg})`}}>
                        <div className="sale-badge">
                            <p>SALE</p>
                        </div>
                        <div className="quick-action-buttons">
                            <div className="row">
                                <div className="col-6">
                                    <button className="black-bg-button">Save</button>
                                </div>
                                <div className="col-6">
                                    <button className="black-bg-button">Quickview</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="product-details">
                        <p className="product-name">Chinos</p>
                        <p><span className="product-mrp">250.00$</span><span className="product-sale-price">117.00$</span></p>
                    </div>
                </div>
            </div>
            <div className="col-4">
                <div className="feature-text">
                    <h4>Personalized Experience</h4>
                    <h2>Soft & Cozy<br />Chinos<br />from <span style={{color: "blue"}}>$98.99</span></h2>
                    <button className="black-bg-button"><strong>Go Shopping <i
                                className="fas fa-angle-right"></i></strong></button>
                </div>
            </div>
        </div>
    </section>

    <section className="container-fluid">
        <div className="delivery-features-section">
            <div className="feature-info">
                <div className="feature-border"></div>
                <svg viewBox="0 0 512 512">
                    <path
                        d="m501.9375 276.65625c-20.320312-7.128906-36.375-22.824219-44.054688-43.066406l-3.6875-9.710938h-9.953124v-223.878906h-444.242188v446.980469h304.554688c18.199218 23.90625 41.453124 43.558593 68.203124 57.472656l14.503907 7.546875 14.503906-7.542969c33.21875-17.28125 61.058594-43.40625 80.507813-75.546875 19.449218-32.144531 29.726562-69.023437 29.726562-106.652344v-42.074218zm-316.003906-246.472656h72.375v77.273437h-72.375zm-155.933594 0h125.933594v107.457031h132.375v-107.457031h125.933594v193.699218h-93.917969l-3.683594 9.707032c-7.679687 20.242187-23.738281 35.9375-44.058594 43.066406l-10.0625 3.527344v42.074218c0 32.984376 7.902344 65.390626 22.949219 94.539063h-255.46875zm452 292.074218c0 65.683594-36.023438 125.222657-94.011719 155.382813l-.726562.378906-.730469-.378906c-57.988281-30.160156-94.011719-89.699219-94.011719-155.382813v-21.238281c20.742188-9.839843 37.566407-26.332031 47.886719-46.953125h93.707031c10.320313 20.617188 27.148438 37.113282 47.886719 46.953125zm0 0" />
                    <path d="m68.332031 295.8125h75.332031v30.183594h-75.332031zm0 0" />
                    <path d="m68.332031 351.898438h75.332031v30.1875h-75.332031zm0 0" />
                    <path
                        d="m380.230469 356.515625-23.609375-22.382813-20.574219 21.964844 45.722656 43.351563 62.945313-68.941407-22.09375-20.421874zm0 0" />
                </svg>
                <h5>Pickup at any Store</h5>
                <p>Free shipping on orders above $65</p>
            </div>
            <div className="feature-info">
                <div className="feature-border"></div>
                <svg viewBox="0 0 512 512">
                    <g>
                        <path d="M288.502,32.502c-108.328,0-198.827,77.485-219.166,179.899l-42.482-53.107L0,180.784l68.769,85.961
                            c3.352,4.178,8.338,6.447,13.427,6.447c2.596,0,5.226-0.585,7.685-1.805l103.153-51.577l-15.387-30.757l-75.8,37.892
                            c14.063-90.5,92.27-160.059,186.655-160.059c104.271,0,189.114,84.843,189.114,189.114s-84.843,189.114-189.114,189.114v34.384
                            C411.735,479.498,512,379.233,512,256S411.735,32.502,288.502,32.502z" />
                    </g>
                </svg>
                <h5>Free Returns</h5>
                <p>30-days free return policy.</p>
            </div>
            <div className="feature-info">
                <div className="feature-border"></div>
                <svg viewBox="0 0 512 512">
                    <path
                        d="m437.02 74.98c-48.353-48.351-112.64-74.98-181.02-74.98s-132.667 26.629-181.02 74.98c-48.351 48.353-74.98 112.64-74.98 181.02s26.629 132.667 74.98 181.02c48.353 48.351 112.64 74.98 181.02 74.98s132.667-26.629 181.02-74.98c48.351-48.353 74.98-112.64 74.98-181.02s-26.629-132.667-74.98-181.02zm-181.02 407.02c-124.617 0-226-101.383-226-226s101.383-226 226-226 226 101.383 226 226-101.383 226-226 226z" />
                    <path
                        d="m256 271c-8.284 0-15 6.716-15 15v30c0 8.284 6.716 15 15 15s15-6.716 15-15v-30c0-8.284-6.716-15-15-15z" />
                    <path
                        d="m356 211h-5v-15c0-52.383-42.617-95-95-95s-95 42.617-95 95v15h-5c-8.284 0-15 6.716-15 15v150c0 8.284 6.716 15 15 15h200c8.284 0 15-6.716 15-15v-150c0-8.284-6.716-15-15-15zm-165-15c0-35.841 29.159-65 65-65s65 29.159 65 65v15h-130zm150 165h-170v-120h170z" />
                </svg>
                <h5>Secured Payments</h5>
                <p>We accept all major credit cards.</p>
            </div>
            <div className="feature-info">
                <svg viewBox="0 0 512 512">
                    <circle cx="256" cy="378.5" r="25" />
                    <path d="M256,0C114.516,0,0,114.497,0,256c0,141.484,114.497,256,256,256c141.484,0,256-114.497,256-256
                                C512,114.516,397.503,0,256,0z M256,472c-119.377,0-216-96.607-216-216c0-119.377,96.607-216,216-216
                                c119.377,0,216,96.607,216,216C472,375.377,375.393,472,256,472z" />
                    <path
                        d="M256,128.5c-44.112,0-80,35.888-80,80c0,11.046,8.954,20,20,20s20-8.954,20-20c0-22.056,17.944-40,40-40
                                c22.056,0,40,17.944,40,40c0,22.056-17.944,40-40,40c-11.046,0-20,8.954-20,20v50c0,11.046,8.954,20,20,20
                                c11.046,0,20-8.954,20-20v-32.531c34.466-8.903,60-40.26,60-77.469C336,164.388,300.112,128.5,256,128.5z" />
                </svg>
                <h5>Customer Service</h5>
                <p>Top notch Customer Service.</p>
            </div>
        </div>
    </section>

    <section className="container-fluid">
        <div className="images-gallery">
            <div className="row">
                <div className="col-6">
                    <div className="gallery-image" style={{backgroundImage:`url(${perfectfit})`}}>
                        <div className="gallery-image-overlay">
                            <p style={{color: "white"}}>FASHION</p>
                            <h4 style={{color: "magenta"}}><strong>How to get a Perfect Fit for you.</strong></h4>
                            <button className="black-bg-button"><strong>Read More <i
                                        className="fas fa-angle-right"></i></strong></button>
                        </div>
                    </div>
                </div>

                <div className="col-6">
                    <div className="gallery-image" style={{backgroundImage: `url(${big})`}}>
                        <div className="gallery-image-overlay">
                            <p style={{color: "magenta"}}>FASHION</p>
                            <h4 style={{color: "magenta"}}><strong>GET MEASURED<br />FROM ANYWHERE</strong></h4>
                            <button className="black-bg-button"><strong>Read More <i
                                        className="fas fa-angle-right"></i></strong></button>
                        </div>
                    </div>
                </div>

                <div className="col-6">
                    <div className="gallery-image" style={{backgroundImage: `url(${blazergreyscale})`}}>
                        <div className="gallery-image-overlay">
                            <p style={{color: "magenta"}}>FASHION & SUMMER</p>
                            <h4 style={{color: "#5C5C5C"}}><strong>Guide to get a custom tailored<br />clothes
                                    matches your taste.</strong></h4>
                            <button className="black-bg-button"><strong>Read More <i
                                        className="fas fa-angle-right"></i></strong></button>
                        </div>
                    </div>
                </div>

                <div className="col-3">
                    <div className="gallery-image" style={{backgroundColor: "magenta"}}>
                        <div className="gallery-image-overlay">
                            <p style={{color: "#5C5C5C"}}>FASHION</p>
                            <h4 style={{color: "white"}}><strong>How to Find the<br />Perfect
                                    Personal<br />Stylist</strong></h4>
                            <button className="blue-bg-button"><strong>Read More <i
                                        className="fas fa-angle-right"></i></strong></button>
                        </div>
                    </div>
                </div>

                <div className="col-3">
                    <div className="gallery-image" style={{backgroundImage: `url(${bannerbg})`}}>
                        <div className="gallery-image-overlay">
                            <p style={{color: "magenta"}}>FASHION</p>
                            <h4  style={{color: "white"}}><strong>Sego Awards<br />Gala</strong></h4>
                            <button className="black-bg-button"><strong>Read More <i
                                        className="fas fa-angle-right"></i></strong></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section className="container">
        <div className="social-media-handle">
            <h4>Share your home with <span style={{color: "magenta"}}>#Liberi_studio</span>.</h4>
            <p><i className="fab fa-instagram" style={{color:"blue"}}></i> Follow <a href="#"
                    style={{color: "magenta"}}><strong>@Liberi_studio</strong></a> for inspiration.</p>
        </div>
    </section>

    <section className="container-fluid">
        <div className="subscription-section" style={{backgroundImage: `url(${store})`}}>
            <div className="subscription-overlay">
                <h4>Let's Stay In Touch</h4>
                <p>Enjoy 15% off your first order when you join our mailing list.</p>
                <form className="form-inline">
                    <div className="form-group">
                        <input type="email" id="email" placeholder="Enter your email address"/>
                    </div>
                    <button type="submit" className="magenta-bg-button">Subscribe</button>
                </form>
                <p>We respect your privacy, so we never share your info.</p>
            </div>
        </div>
    </section>
        </div>
    )
}

export default Sections
