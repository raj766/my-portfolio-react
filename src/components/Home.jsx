import  React, {Fragment, useEffect,useState} from "react";

import Spinner from 'react-bootstrap/Spinner';
import ApiService from '../services/Services';

  function  Home() {
    
    const [scroll, setScroll] = useState(false);

    const [Loader, setLoader] = useState(false);
    const [DetailsLoader, setDetailsLoader] = useState(false);
    const [Category, setCategory] = useState([]);
    const [PortfolioList, setPortfolioList] = useState([]);
    // portfolio details
    const [PortfolioDetails, setPortfolioDetails] = useState({});
    const [PortfolioMultiImg, setPortfolioMultiImg] = useState([]);

    const [CatClickSts, setCatClick] = useState('');
    console.log('hello dev');
    async  function getPortfolio (catid){
        setCatClick(catid);
        setLoader(true);
        const response  = await ApiService.fetchPortfolio(catid);
       if(response.status){
        setLoader(false);
        setPortfolioList(response.data);
       }else{
        setPortfolioList([]);
        setLoader(false);
       }
      }
      async  function getPortfoliodetails (portid){
        setDetailsLoader(true);
        const response = await ApiService.fetchPortfolioDetails(portid);
        if (response.status) {
            setDetailsLoader(false);
            setPortfolioMultiImg(response.multiimg);
            setPortfolioDetails(response.data);
        }else{
            
            setPortfolioMultiImg([]);
            setPortfolioDetails({});
            setDetailsLoader(false);
        }
      }

 useEffect(() => {
   window.addEventListener("scroll", () => {
     setScroll(window.scrollY > 5);
   });
   setCatClick('all');

   async function fetchData() {
    try {
      const postsData = await ApiService.fetchCategory();
        if (postsData.status) {
            setCategory(postsData.data);
        }else{
            setCategory([]);
        }
    } catch (error) {
      console.error('Error fetching posts:', error);
    }
  }///end function

 
  fetchData();
  getPortfolio('all');
 }, []);
  return (
    <div>
  
    <header className="header__section  header__transparent">
        <div className={`header__sticky ${scroll ? 'sticky' : ""}`}  style={{transition:"all 1s ease-in-out"}} >
            <div className="container">
                <div className="main__header d-flex justify-content-between align-items-center">
                    <div className="main__logo">
                        <h1 className="main__logo--title"><a className="main__logo--link" href="index.html">
                            <img className="main__logo--img logo_light" src="assets/img/logo/nav-log.png" alt="logo-img" />
                            <img className="main__logo--img logo_dark" src="assets/img/logo/nav-log-white.png" alt="logo-img" style={{width:'280px'}} />
                        </a></h1>
                    </div>
                    <div className="offcanvas__header--menu__open ">
                        <a className="offcanvas__header--menu__open--btn" href="/#" onClick={e => e.preventDefault()} data-offcanvas>
                            <svg xmlns="http://www.w3.org/2000/svg" className="ionicon offcanvas__header--menu__open--svg" viewBox="0 0 512 512"><path fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="32" d="M80 160h352M80 256h352M80 352h352"/></svg>
                            <span className="visually-hidden">Offcanvas Menu Open</span>
                        </a>
                    </div>
                    <div className="main__header--right d-flex align-items-center d-none d-lg-block">
                        <div className="header__menu menu_border--none">
                            <nav className="header__menu--navigation">
                                <ul className="header__menu--wrapper d-flex">
                                    <li className="header__menu--items">
                                        <a className="header__menu--link" href="#home">Home 
                                        </a>
                                    </li>
                                    <li className="header__menu--items">
                                        <a className="header__menu--link" href="#about">About </a>  
                                    </li>
                                    <li className="header__menu--items">
                                        <a className="header__menu--link" href="#servives">Service  </a>  
                                    </li>
                                    <li className="header__menu--items">
                                        <a className="header__menu--link" href="#portfolio">Portfolio </a>  
                                    </li>
                                    <li className="header__menu--items">
                                        <a className="header__menu--link" href="#blog">Blog 
                                        </a>
                                    </li>
                                    <li className="header__menu--items">
                                        <a className="header__menu--link" href="#contact">Contact </a>  
                                    </li>
                                </ul>
                            </nav>
                        </div>
                        <button className="primary__btn download__btn">
                            <svg className="download__btn--svg" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" ><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
                            Download CV
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </header>
    
    <div className="offcanvas__header ">
        <div className="offcanvas__inner">
            <div className="offcanvas__logo">
                <a className="offcanvas__logo_link" href="index.html">
                    <img src="assets/img/logo/nav-log.png" alt="Logo-img" width="158" height="36" />
                </a>
                <button className="offcanvas__close--btn" data-offcanvas>close</button>
            </div>
            <nav className="offcanvas__menu">
                <ul className="offcanvas__menu_ul">
                    <li className="offcanvas__menu_li">
                        <a className="offcanvas__menu_item" href="index.html">Home</a>
                        <ul className="offcanvas__sub_menu">
                            <li className="offcanvas__sub_menu_li"><a href="index.html" className="offcanvas__sub_menu_item">Home - One</a></li>
                            <li className="offcanvas__sub_menu_li"><a href="index-2.html" className="offcanvas__sub_menu_item">Home - Two</a></li>
                            <li className="offcanvas__sub_menu_li"><a href="index-3.html" className="offcanvas__sub_menu_item">Home - Three</a></li>
                            <li className="offcanvas__sub_menu_li"><a href="index-4.html" className="offcanvas__sub_menu_item">Home - Four</a></li>
                        </ul>
                    </li>
                    <li className="offcanvas__menu_li">
                        <a className="offcanvas__menu_item" href="shop.html">Shop</a>
                        <ul className="offcanvas__sub_menu">
                            <li className="offcanvas__sub_menu_li">
                                <a href="/#" className="offcanvas__sub_menu_item">Column One</a>
                                <ul className="offcanvas__sub_menu">
                                    <li className="offcanvas__sub_menu_li"><a className="offcanvas__sub_menu_item" href="shop.html">Shop Left Sidebar</a></li>
                                    <li className="offcanvas__sub_menu_li"><a className="offcanvas__sub_menu_item" href="shop-right-sidebar.html">Shop Right Sidebar</a></li>
                                    <li className="offcanvas__sub_menu_li"><a className="offcanvas__sub_menu_item" href="shop-grid.html">Shop Grid</a></li>
                                    <li className="offcanvas__sub_menu_li"><a className="offcanvas__sub_menu_item" href="shop-grid-list.html">Shop Grid List</a></li>
                                    <li className="offcanvas__sub_menu_li"><a className="offcanvas__sub_menu_item" href="shop-list.html">Shop List</a></li>
                                    <li className="offcanvas__sub_menu_li"><a className="offcanvas__sub_menu_item" href="shop-no-sidebar.html">Shop No Sidebar</a></li>
                                </ul>
                            </li>
                            <li className="offcanvas__sub_menu_li">
                                <a href="/#" className="offcanvas__sub_menu_item">Column Two</a>
                                <ul className="offcanvas__sub_menu">
                                    <li className="offcanvas__sub_menu_li"><a className="offcanvas__sub_menu_item" href="product-details.html">Product Details</a></li>
                                    <li className="offcanvas__sub_menu_li"><a className="offcanvas__sub_menu_item" href="product-video.html">Video Product</a></li>
                                    <li className="offcanvas__sub_menu_li"><a className="offcanvas__sub_menu_item" href="product-details.html">Variable Product</a></li>
                                    <li className="offcanvas__sub_menu_li"><a className="offcanvas__sub_menu_item" href="product-left-sidebar.html">Product Left Sidebar</a></li>
                                    <li className="offcanvas__sub_menu_li"><a className="offcanvas__sub_menu_item" href="product-gallery.html">Product Gallery</a></li>
                                </ul>
                            </li>
                            <li className="offcanvas__sub_menu_li">
                                <a href="/#" className="offcanvas__sub_menu_item">Column Three</a>
                                <ul className="offcanvas__sub_menu">
                                    <li className="offcanvas__sub_menu_li"><a className="offcanvas__sub_menu_item" href="my-account.html">My Account</a></li>
                                    <li className="offcanvas__sub_menu_li"><a className="offcanvas__sub_menu_item" href="my-account-2.html">My Account 2</a></li>
                                    <li className="offcanvas__sub_menu_li"><a className="offcanvas__sub_menu_item" href="404.html">404 Page</a></li>
                                    <li className="offcanvas__sub_menu_li"><a className="offcanvas__sub_menu_item" href="login.html">Login Page</a></li>
                                    <li className="offcanvas__sub_menu_li"><a className="offcanvas__sub_menu_item" href="faq.html">Faq Page</a></li>
                                </ul>
                            </li>
                            <li className="offcanvas__sub_menu_li">
                                <a href="/#" className="offcanvas__sub_menu_item">Column Three</a>
                                <ul className="offcanvas__sub_menu">
                                    <li className="offcanvas__sub_menu_li"><a className="offcanvas__sub_menu_item" href="about.html">About Us</a></li>
                                    <li className="offcanvas__sub_menu_li"><a className="offcanvas__sub_menu_item" href="contact.html">Contact Us</a></li>
                                    <li className="offcanvas__sub_menu_li"><a className="offcanvas__sub_menu_item" href="portfolio.html">Portfolio</a></li>
                                    <li className="offcanvas__sub_menu_li"><a className="offcanvas__sub_menu_item" href="compare.html">Compare Pages</a></li>
                                    <li className="offcanvas__sub_menu_li"><a className="offcanvas__sub_menu_item" href="checkout.html">Checkout page</a></li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                    <li className="offcanvas__menu_li">
                        <a className="offcanvas__menu_item" href="blog.html">Blog</a>
                        <ul className="offcanvas__sub_menu">
                            <li className="offcanvas__sub_menu_li"><a href="blog-grid.html" className="offcanvas__sub_menu_item">Blog Grid</a></li>
                            <li className="offcanvas__sub_menu_li"><a href="blog-details.html" className="offcanvas__sub_menu_item">Blog Details</a></li>
                            <li className="offcanvas__sub_menu_li"><a href="blog.html" className="offcanvas__sub_menu_item">Blog Left Sidebar</a></li>
                            <li className="offcanvas__sub_menu_li"><a href="blog-right-sidebar.html" className="offcanvas__sub_menu_item">Blog Right Sidebar</a></li>
                        </ul>
                    </li>
                    <li className="offcanvas__menu_li">
                        <a className="offcanvas__menu_item" href="/#">Pages</a>
                        <ul className="offcanvas__sub_menu">
                            <li className="offcanvas__sub_menu_li"><a href="about.html" className="offcanvas__sub_menu_item">About Us</a></li>
                            <li className="offcanvas__sub_menu_li"><a href="contact.html" className="offcanvas__sub_menu_item">Contact Us</a></li>
                            <li className="offcanvas__sub_menu_li"><a href="cart.html" className="offcanvas__sub_menu_item">Cart Page</a></li>
                            <li className="offcanvas__sub_menu_li"><a href="portfolio.html" className="offcanvas__sub_menu_item">Portfolio Page</a></li>
                            <li className="offcanvas__sub_menu_li"><a href="wishlist.html" className="offcanvas__sub_menu_item">Wishlist Page</a></li>
                            <li className="offcanvas__sub_menu_li"><a href="login.html" className="offcanvas__sub_menu_item">Login Page</a></li>
                            <li className="offcanvas__sub_menu_li"><a href="404.html" className="offcanvas__sub_menu_item">Error Page</a></li>
                        </ul>
                    </li>
                    <li className="offcanvas__menu_li"><a className="offcanvas__menu_item" href="about.html">About</a></li>
                    <li className="offcanvas__menu_li"><a className="offcanvas__menu_item" href="contact.html">Contact</a></li>
                </ul>
                <div className="offcanvas__download--btn">
                    <button className="primary__btn download__btn">
                        <svg className="download__btn--svg" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" ><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
                        Download CV
                    </button>
                 </div>
            </nav>
        </div>
    </div>
   
    <main className="main__content_wrapper">
      
        <div className="hero__section hero__section--bg" id="home">
            <div className="container">
                <div className="hero__section--inner d-flex align-items-center">
                    <div className="hero__thumbnail position__relative">
                        <img className="hero__thumbnail--media light_img" src="assets/img/hero/hero-thumbnail.png" alt="img" />
                        <img className="hero__thumbnail--media dark_img" src="assets/img/hero/hero-man-dark.png" alt="img" />
                        <div className="projects__budget d-flex align-items-center">
                            <span className="projects__budget--icon">
                                <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-check-circle"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
                            </span>
                            <div className="projects__budget--content">
                                <span className="projects__budget--ammount">50+</span>
                                <span className="projects__budget--text">Complete Projects</span>
                            </div>
                        </div>
                        <span className="logo__positioning one">
                            <img src="assets/img/logo/figma-logo.png" alt="logo" />
                        </span>
                        <span className="logo__positioning two">
                            <img src="assets/img/logo/photoshop-logo.png" alt="logo" />
                        </span>
                       
                    </div>
                    
                    <div className="hero__content">
                        <span className="hero__content--subtitle text__secondary mb-10">HELLO  I'M</span>
                        <h2 className="hero__content--title mb-15">RAJENDRA KUMAR</h2>
                        {/* <h2>Communication Customer service Problem-solving Time management Leadership</h2>*/}
                        <h3 className="hero__content--subtitle2 mb-20">Frontend and Backend Web Developer</h3>
                        <p className="hero__content--desc mb-30">I am developing the web softwares using NodeJs,Laravel(PHP Framework),Reactjs and Angular.</p>
                        <div className="hero__content--footer d-flex align-items-center">
                            <a className="btn hero__content--btn" href="/#">About Me</a>
                            <div className="social__share d-flex align-items-center">
                                <span className="social__share--title">Follow Me: </span>
                                <ul className="social__share--wrapper d-flex">
                                    <li className="social__share--child"><a className="social__share--link" href="/#">
                                        <svg fill="currentColor" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24" width="20px" height="20px">    <path d="M17.525,9H14V7c0-1.032,0.084-1.682,1.563-1.682h1.868v-3.18C16.522,2.044,15.608,1.998,14.693,2 C11.98,2,10,3.657,10,6.699V9H7v4l3-0.001V22h4v-9.003l3.066-0.001L17.525,9z"/></svg>
                                        <span className="visually-hidden">Facebook</span>
                                    </a>
                                    </li>
                                    <li className="social__share--child"><a className="social__share--link" href="/#">
                                        <svg fill="currentColor" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24" width="20px" height="20px">    <path d="M12,2C6.477,2,2,6.477,2,12c0,4.237,2.636,7.855,6.356,9.312c-0.087-0.791-0.167-2.005,0.035-2.868 c0.182-0.78,1.172-4.971,1.172-4.971s-0.299-0.599-0.299-1.484c0-1.391,0.806-2.428,1.809-2.428c0.853,0,1.265,0.641,1.265,1.408 c0,0.858-0.546,2.141-0.828,3.329c-0.236,0.996,0.499,1.807,1.481,1.807c1.777,0,3.143-1.874,3.143-4.579 c0-2.394-1.72-4.068-4.177-4.068c-2.845,0-4.515,2.134-4.515,4.34c0,0.859,0.331,1.781,0.744,2.282 c0.082,0.099,0.093,0.186,0.069,0.287c-0.076,0.316-0.244,0.995-0.277,1.134c-0.043,0.183-0.145,0.222-0.334,0.133 c-1.249-0.582-2.03-2.408-2.03-3.874c0-3.154,2.292-6.052,6.608-6.052c3.469,0,6.165,2.472,6.165,5.776 c0,3.447-2.173,6.22-5.189,6.22c-1.013,0-1.966-0.527-2.292-1.148c0,0-0.502,1.909-0.623,2.378 c-0.226,0.868-0.835,1.958-1.243,2.622C9.975,21.843,10.969,22,12,22c5.522,0,10-4.478,10-10S17.523,2,12,2z"/></svg>
                                        <span className="visually-hidden">Pinterest</span>
                                        </a>
                                    </li>
                                    <li className="social__share--child"><a className="social__share--link" href="/#">
                                        <svg fill="currentColor" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24" width="20px" height="20px">    <path d="M22,3.999c-0.78,0.463-2.345,1.094-3.265,1.276c-0.027,0.007-0.049,0.016-0.075,0.023c-0.813-0.802-1.927-1.299-3.16-1.299 c-2.485,0-4.5,2.015-4.5,4.5c0,0.131-0.011,0.372,0,0.5c-3.353,0-5.905-1.756-7.735-4c-0.199,0.5-0.286,1.29-0.286,2.032 c0,1.401,1.095,2.777,2.8,3.63c-0.314,0.081-0.66,0.139-1.02,0.139c-0.581,0-1.196-0.153-1.759-0.617c0,0.017,0,0.033,0,0.051 c0,1.958,2.078,3.291,3.926,3.662c-0.375,0.221-1.131,0.243-1.5,0.243c-0.26,0-1.18-0.119-1.426-0.165 c0.514,1.605,2.368,2.507,4.135,2.539c-1.382,1.084-2.341,1.486-5.171,1.486H2C3.788,19.145,6.065,20,8.347,20 C15.777,20,20,14.337,20,8.999c0-0.086-0.002-0.266-0.005-0.447C19.995,8.534,20,8.517,20,8.499c0-0.027-0.008-0.053-0.008-0.08 c-0.003-0.136-0.006-0.263-0.009-0.329c0.79-0.57,1.475-1.281,2.017-2.091c-0.725,0.322-1.503,0.538-2.32,0.636 C20.514,6.135,21.699,4.943,22,3.999z"/></svg>
                                        <span className="visually-hidden">Twitter</span>
                                        </a>
                                    </li>
                                    <li className="social__share--child"><a className="social__share--link" href="/#">
                                        <svg fill="currentColor" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24" width="20px" height="20px"><path d="M 4 2 C 2.898438 2 2 2.898438 2 4 L 2 20 C 2 21.101563 2.898438 22 4 22 L 20 22 C 21.101563 22 22 21.101563 22 20 L 22 4 C 22 2.898438 21.101563 2 20 2 Z M 4 4 L 20 4 L 20 8 L 16.453125 8 C 15.355469 6.777344 13.765625 6 12 6 C 10.234375 6 8.644531 6.777344 7.546875 8 L 4 8 Z M 17 5 L 17 7 L 19 7 L 19 5 Z M 12 8 C 14.222656 8 16 9.777344 16 12 C 16 14.222656 14.222656 16 12 16 C 9.777344 16 8 14.222656 8 12 C 8 9.777344 9.777344 8 12 8 Z M 12 10 C 11.800781 10 11.601563 10 11.402344 10.097656 C 11.699219 10.300781 12 10.601563 12 11 C 12 11.601563 11.601563 12 11 12 C 10.601563 12 10.300781 11.800781 10.097656 11.402344 C 10 11.601563 10 11.800781 10 12 C 10 13.101563 10.898438 14 12 14 C 13.101563 14 14 13.101563 14 12 C 14 10.898438 13.101563 10 12 10 Z"/></svg>
                                        <span className="visually-hidden">Instagram</span>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        <section className="services__section section--padding" id="servives">
            <div className="container">
                <div className="section__heading--topbar d-flex align-items-center justify-content-between mb-50">
                    <div className="section__heading max-width-580">
                        <span className="section__heading--subtitle text__secondary">CREATIVE SERVICE</span>
                        <h2 className="section__heading--title">What can i do for service
                            clients you</h2> 
                    </div>
                    <div className="section__heading--right max-width-450">
                        <p className="section__heading--desc">Promote your blog posts, case udie, and product ouncems
                            with the the branded videoscustomers coming back for
                            services Makes best effort.</p>
                    </div>
                </div>
                <div className="services__section--inner">
                    <div className="row mb--n30">
                        <div className="col-lg-4 col-md-6 col-sm-6 mb-30">
                            <div className="services__card">
                                <span className="services__card--icon color1 mb-25">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-file-text"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
                                </span>
                                <div className="services__card--content">
                                    <h3 className="services__card--title mb-15">Web Development</h3>
                                    <p className="services__card--desc mb-20">Promote your blog posts, case udie, and product ouncems nts with the the branded videos.</p>
                                    <a className="services__card--link color1" href="services.html">Read More</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6 mb-30">
                            <div className="services__card">
                                <span className="services__card--icon color2 mb-25">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-life-buoy"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="4"></circle><line x1="4.93" y1="4.93" x2="9.17" y2="9.17"></line><line x1="14.83" y1="14.83" x2="19.07" y2="19.07"></line><line x1="14.83" y1="9.17" x2="19.07" y2="4.93"></line><line x1="14.83" y1="9.17" x2="18.36" y2="5.64"></line><line x1="4.93" y1="19.07" x2="9.17" y2="14.83"></line></svg>
                                </span>
                                <div className="services__card--content">
                                    <h3 className="services__card--title mb-15">Creative Design</h3>
                                    <p className="services__card--desc mb-20">Promote your blog posts, case udie, and product ouncems nts with the the branded videos.</p>
                                    <a className="services__card--link color2" href="services.html">Read More</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6 mb-30">
                            <div className="services__card">
                                <span className="services__card--icon color3 mb-25">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-globe"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>
                                </span>
                                <div className="services__card--content">
                                    <h3 className="services__card--title mb-15">Project Consultancy</h3>
                                    <p className="services__card--desc mb-20">Promote your blog posts, case udie, and product ouncems nts with the the branded videos.</p>
                                    <a className="services__card--link color3" href="services.html">Read More</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6 mb-30">
                            <div className="services__card">
                                <span className="services__card--icon color4 mb-25">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-headphones"><path d="M3 18v-6a9 9 0 0 1 18 0v6"></path><path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"></path></svg>
                                </span>
                                <div className="services__card--content">
                                    <h3 className="services__card--title mb-15">24/7 Support</h3>
                                    <p className="services__card--desc mb-20">Promote your blog posts, case udie, and product ouncems nts with the the branded videos.</p>
                                    <a className="services__card--link color4" href="services.html">Read More</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6 mb-30">
                            <div className="services__card">
                                <span className="services__card--icon color5 mb-25">
                                    <svg width="40" height="40" stroke="currentColor" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M272 384c9.6-31.9 29.5-59.1 49.2-86.2l0 0c5.2-7.1 10.4-14.2 15.4-21.4c19.8-28.5 31.4-63 31.4-100.3C368 78.8 289.2 0 192 0S16 78.8 16 176c0 37.3 11.6 71.9 31.4 100.3c5 7.2 10.2 14.3 15.4 21.4l0 0c19.8 27.1 39.7 54.4 49.2 86.2H272zM192 512c44.2 0 80-35.8 80-80V416H112v16c0 44.2 35.8 80 80 80zM112 176c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-61.9 50.1-112 112-112c8.8 0 16 7.2 16 16s-7.2 16-16 16c-44.2 0-80 35.8-80 80z"></path></svg>
                                </span>
                                <div className="services__card--content">
                                    <h3 className="services__card--title mb-15">Awesome Idea</h3>
                                    <p className="services__card--desc mb-20">Promote your blog posts, case udie, and product ouncems nts with the the branded videos.</p>
                                    <a className="services__card--link color5" href="services.html">Read More</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6 mb-30">
                            <div className="services__card">
                                <span className="services__card--icon color6 mb-25">
                                    <svg width="40" height="40" stroke="currentColor" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M135.2 117.4L109.1 192H402.9l-26.1-74.6C372.3 104.6 360.2 96 346.6 96H165.4c-13.6 0-25.7 8.6-30.2 21.4zM39.6 196.8L74.8 96.3C88.3 57.8 124.6 32 165.4 32H346.6c40.8 0 77.1 25.8 90.6 64.3l35.2 100.5c23.2 9.6 39.6 32.5 39.6 59.2V400v48c0 17.7-14.3 32-32 32H448c-17.7 0-32-14.3-32-32V400H96v48c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V400 256c0-26.7 16.4-49.6 39.6-59.2zM128 288c0-17.7-14.3-32-32-32s-32 14.3-32 32s14.3 32 32 32s32-14.3 32-32zm288 32c17.7 0 32-14.3 32-32s-14.3-32-32-32s-32 14.3-32 32s14.3 32 32 32z"></path></svg>
                                </span>
                                <div className="services__card--content">
                                    <h3 className="services__card--title mb-15">Development Design</h3>
                                    <p className="services__card--desc mb-20">Promote your blog posts, case udie, and product ouncems nts with the the branded videos.</p>
                                    <a className="services__card--link color6" href="services.html">Read More</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        
        <section className="about__section about__section--bg section--padding" id="about">
            <div className="container">
                <div className="about__section--inner d-flex">
                    <div className="about__content">
                        <div className="section__heading mb-30">
                            <span className="section__heading--subtitle text__secondary">ABOUT ME</span>
                            <h2 className="section__heading--title">I can design world for leading ui/ux</h2> 
                        </div>
                        <div className="about__info">
                            <h3 className="about__info--title text__secondary mb-20">PERSONAL INFOS:</h3>
                            <ul className="about__info--wrapper d-flex">
                                <li className="about__info--items">First Name: Maras</li>
                                <li className="about__info--items">Last Name: Faron</li>
                                <li className="about__info--items">Address: Dubai</li>
                                <li className="about__info--items">Phone: +28921184010</li>
                                <li className="about__info--items">Age: 24 Years</li>
                                <li className="about__info--items">Email: you@mail.com</li>
                                <li className="about__info--items">Nationality: Tunisian</li>
                                <li className="about__info--items">Skype: Roben.Boris</li>
                                <li className="about__info--items">Freelance: Available</li>
                                <li className="about__info--items">Languages: French, English</li>
                            </ul>
                            <a className="about__btn primary__btn" href="/#">Hire Me</a>
                        </div>
                    </div>
                    <div className="about__thumbnail">
                        <div className="about__thumbnail--media position__relative">
                            <img className="position__relative" src="assets/img/other/about.png" alt="img" />
                        </div>
                        <div className="about__experience text-center">
                            <h4 className="about__experience--title title-stroke">27+</h4>
                            <span className="about__experience--subtitle">Experience Working</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <div className="brand__section brand__section--bg border__bottom section--padding">
            <div className="container">
                <div className="brand__section--inner">
                    <div className="brand__logo--child">
                        <div className="brand__logo--items">
                            <img className="brand__logo--img brand_logo_light" src="assets/img/logo/brand1.png" alt="brand-logo" />
                            <img className="brand__logo--img brand_logo_dark" src="assets/img/logo/dark-log-1.png" alt="brand-logo" />
                        </div>
                        <div className="brand__logo--items">
                            <img className="brand__logo--img brand_logo_light" src="assets/img/logo/brand2.png" alt="brand-logo" />
                            <img className="brand__logo--img brand_logo_dark" src="assets/img/logo/dark-log-2.png" alt="brand-logo" />
                        </div>
                    </div>
                    <div className="brand__logo--child">
                        <div className="brand__logo--items">
                            <img className="brand__logo--img brand_logo_light" src="assets/img/logo/brand3.png" alt="brand-logo" />
                            <img className="brand__logo--img brand_logo_dark" src="assets/img/logo/dark-log-3.png" alt="brand-logo" />
                        </div>
                        <div className="brand__logo--items">
                            <img className="brand__logo--img brand_logo_light" src="assets/img/logo/brand4.png" alt="brand-logo" /> 
                            <img className="brand__logo--img brand_logo_dark" src="assets/img/logo/dark-log-4.png" alt="brand-logo" />
                        </div>
                    </div>
                    <div className="brand__logo--child">
                        <div className="brand__logo--items">
                            <img className="brand__logo--img brand_logo_light" src="assets/img/logo/brand5.png" alt="brand-logo" />
                            <img className="brand__logo--img brand_logo_dark" src="assets/img/logo/dark-log-5.png" alt="brand-logo" />
                        </div>
                        <div className="brand__logo--items">
                            <img className="brand__logo--img brand_logo_light" src="assets/img/logo/brand6.png" alt="brand-logo" />
                            <img className="brand__logo--img brand_logo_dark" src="assets/img/logo/dark-log-6.png" alt="brand-logo" />
                        </div>
                    </div>
                    <div className="brand__logo--child">
                        <div className="brand__logo--items">
                            <img className="brand__logo--img brand_logo_light" src="assets/img/logo/brand7.png" alt="brand-logo" />
                            <img className="brand__logo--img brand_logo_dark" src="assets/img/logo/dark-log-7.png" alt="brand-logo" />
                        </div>
                        <div className="brand__logo--items">
                            <img className="brand__logo--img brand_logo_light" src="assets/img/logo/brand8.png" alt="brand-logo" />
                            <img className="brand__logo--img brand_logo_dark" src="assets/img/logo/dark-log-8.png" alt="brand-logo" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        

        <section className="resume__section section--padding">
            <div className="container">
                <div className="section__heading--topbar d-flex align-items-center justify-content-between mb-50">
                    <div className="section__heading max-width-580">
                        <span className="section__heading--subtitle text__secondary">EXPERICNCE AND EDUCATION</span>
                        <h2 className="section__heading--title">Resume of Experience and Education</h2> 
                    </div>
                    <div className="section__heading--right max-width-450">
                        <p className="section__heading--desc">Promote your blog posts, case udie, and product ouncems
                            with the the branded videoscustomers coming back for
                            services Makes best effort.</p>
                    </div>
                </div>
                <div className="resume__section--inner d-flex">
                    <div className="resume__step">
                        <div className="border__position--style"> </div>
                        <div className="resume__items">
                            <div className="border__round"></div>
                            <div className="resume__items--inner d-flex">
                                <span className="resume__icons">
                                    <svg width="25" height="40" fill="currentColor" stroke="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M184 48H328c4.4 0 8 3.6 8 8V96H176V56c0-4.4 3.6-8 8-8zm-56 8V96H64C28.7 96 0 124.7 0 160v96H192 320 512V160c0-35.3-28.7-64-64-64H384V56c0-30.9-25.1-56-56-56H184c-30.9 0-56 25.1-56 56zM512 288H320v32c0 17.7-14.3 32-32 32H224c-17.7 0-32-14.3-32-32V288H0V416c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V288z"></path></svg>                                    
                                </span>
                                <div className="resume__content">
                                    <div className="resume__content--top d-flex align-items-center mb-10">
                                        <h3 className="resume__content--title">API DEVELOPER</h3>
                                        <span className="resume__content--subtitle">Shopify</span>
                                    </div>
                                    <p className="resume__content--desc mb-20">Promote your blog posts, case udie, and product ouncems nts with thehe branded videos.</p>
                                    <span className="resume__date">2021</span>
                                </div>
                            </div>
                        </div>
                        <div className="resume__items">
                            <div className="border__round"></div>
                            <div className="resume__items--inner d-flex">
                                <span className="resume__icons">
                                    <svg width="25" height="40" fill="currentColor" stroke="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M184 48H328c4.4 0 8 3.6 8 8V96H176V56c0-4.4 3.6-8 8-8zm-56 8V96H64C28.7 96 0 124.7 0 160v96H192 320 512V160c0-35.3-28.7-64-64-64H384V56c0-30.9-25.1-56-56-56H184c-30.9 0-56 25.1-56 56zM512 288H320v32c0 17.7-14.3 32-32 32H224c-17.7 0-32-14.3-32-32V288H0V416c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V288z"></path></svg>                                    
                                </span>
                                <div className="resume__content">
                                    <div className="resume__content--top d-flex align-items-center mb-10">
                                        <h3 className="resume__content--title">WEB DEVELOPERR</h3>
                                        <span className="resume__content--subtitle">ENVATO</span>
                                    </div>
                                    <p className="resume__content--desc mb-20">Promote your blog posts, case udie, and product ouncems nts with thehe branded videos.</p>
                                    <span className="resume__date">2017</span>
                                </div>
                            </div>
                        </div>
                        <div className="resume__items">
                            <div className="border__round"></div>
                            <div className="resume__items--inner d-flex">
                                <span className="resume__icons">
                                    <svg width="25" height="40" fill="currentColor" stroke="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M184 48H328c4.4 0 8 3.6 8 8V96H176V56c0-4.4 3.6-8 8-8zm-56 8V96H64C28.7 96 0 124.7 0 160v96H192 320 512V160c0-35.3-28.7-64-64-64H384V56c0-30.9-25.1-56-56-56H184c-30.9 0-56 25.1-56 56zM512 288H320v32c0 17.7-14.3 32-32 32H224c-17.7 0-32-14.3-32-32V288H0V416c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V288z"></path></svg>                                    
                                </span>
                                <div className="resume__content">
                                    <div className="resume__content--top d-flex align-items-center mb-10">
                                        <h3 className="resume__content--title">UI/UX DESIGNER</h3>
                                        <span className="resume__content--subtitle">UDEMY</span>
                                    </div>
                                    <p className="resume__content--desc mb-20">Promote your blog posts, case udie, and product ouncems nts with thehe branded videos.</p>
                                    <span className="resume__date">2014</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="resume__step">
                        <div className="border__position--style"> </div>
                        <div className="resume__items">
                            <div className="border__round"></div>
                            <div className="resume__items--inner d-flex">
                                <span className="resume__icons">
                                    <svg width="25" height="44" fill="currentColor" stroke="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path d="M320 32c-8.1 0-16.1 1.4-23.7 4.1L15.8 137.4C6.3 140.9 0 149.9 0 160s6.3 19.1 15.8 22.6l57.9 20.9C57.3 229.3 48 259.8 48 291.9v28.1c0 28.4-10.8 57.7-22.3 80.8c-6.5 13-13.9 25.8-22.5 37.6C0 442.7-.9 448.3 .9 453.4s6 8.9 11.2 10.2l64 16c4.2 1.1 8.7 .3 12.4-2s6.3-6.1 7.1-10.4c8.6-42.8 4.3-81.2-2.1-108.7C90.3 344.3 86 329.8 80 316.5V291.9c0-30.2 10.2-58.7 27.9-81.5c12.9-15.5 29.6-28 49.2-35.7l157-61.7c8.2-3.2 17.5 .8 20.7 9s-.8 17.5-9 20.7l-157 61.7c-12.4 4.9-23.3 12.4-32.2 21.6l159.6 57.6c7.6 2.7 15.6 4.1 23.7 4.1s16.1-1.4 23.7-4.1L624.2 182.6c9.5-3.4 15.8-12.5 15.8-22.6s-6.3-19.1-15.8-22.6L343.7 36.1C336.1 33.4 328.1 32 320 32zM128 408c0 35.3 86 72 192 72s192-36.7 192-72L496.7 262.6 354.5 314c-11.1 4-22.8 6-34.5 6s-23.5-2-34.5-6L143.3 262.6 128 408z"></path></svg>                                    
                                </span>
                                <div className="resume__content">
                                    <div className="resume__content--top d-flex align-items-center mb-10">
                                        <h3 className="resume__content--title">Software Engineer</h3>
                                        <span className="resume__content--subtitle">CAMBRIDGE UNIVERSITY</span>
                                    </div>
                                    <p className="resume__content--desc mb-20">Promote your blog posts, case udie, and product ouncems nts with thehe branded videos.</p>
                                    <span className="resume__date">2020</span>
                                </div>
                            </div>
                        </div>
                        <div className="resume__items">
                            <div className="border__round"></div>
                            <div className="resume__items--inner d-flex">
                                <span className="resume__icons">
                                    <svg width="25" height="44" fill="currentColor" stroke="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path d="M320 32c-8.1 0-16.1 1.4-23.7 4.1L15.8 137.4C6.3 140.9 0 149.9 0 160s6.3 19.1 15.8 22.6l57.9 20.9C57.3 229.3 48 259.8 48 291.9v28.1c0 28.4-10.8 57.7-22.3 80.8c-6.5 13-13.9 25.8-22.5 37.6C0 442.7-.9 448.3 .9 453.4s6 8.9 11.2 10.2l64 16c4.2 1.1 8.7 .3 12.4-2s6.3-6.1 7.1-10.4c8.6-42.8 4.3-81.2-2.1-108.7C90.3 344.3 86 329.8 80 316.5V291.9c0-30.2 10.2-58.7 27.9-81.5c12.9-15.5 29.6-28 49.2-35.7l157-61.7c8.2-3.2 17.5 .8 20.7 9s-.8 17.5-9 20.7l-157 61.7c-12.4 4.9-23.3 12.4-32.2 21.6l159.6 57.6c7.6 2.7 15.6 4.1 23.7 4.1s16.1-1.4 23.7-4.1L624.2 182.6c9.5-3.4 15.8-12.5 15.8-22.6s-6.3-19.1-15.8-22.6L343.7 36.1C336.1 33.4 328.1 32 320 32zM128 408c0 35.3 86 72 192 72s192-36.7 192-72L496.7 262.6 354.5 314c-11.1 4-22.8 6-34.5 6s-23.5-2-34.5-6L143.3 262.6 128 408z"></path></svg>                                     
                                </span>
                                <div className="resume__content">
                                    <div className="resume__content--top d-flex align-items-center mb-10">
                                        <h3 className="resume__content--title">Master's Degree</h3>
                                        <span className="resume__content--subtitle">OXFORD UNIVERSITY</span>
                                    </div>
                                    <p className="resume__content--desc mb-20">Promote your blog posts, case udie, and product ouncems nts with thehe branded videos.</p>
                                    <span className="resume__date">2018</span>
                                </div>
                            </div>
                        </div>
                        <div className="resume__items">
                            <div className="border__round"></div>
                            <div className="resume__items--inner d-flex">
                                <span className="resume__icons">
                                    <svg width="25" height="44" fill="currentColor" stroke="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path d="M320 32c-8.1 0-16.1 1.4-23.7 4.1L15.8 137.4C6.3 140.9 0 149.9 0 160s6.3 19.1 15.8 22.6l57.9 20.9C57.3 229.3 48 259.8 48 291.9v28.1c0 28.4-10.8 57.7-22.3 80.8c-6.5 13-13.9 25.8-22.5 37.6C0 442.7-.9 448.3 .9 453.4s6 8.9 11.2 10.2l64 16c4.2 1.1 8.7 .3 12.4-2s6.3-6.1 7.1-10.4c8.6-42.8 4.3-81.2-2.1-108.7C90.3 344.3 86 329.8 80 316.5V291.9c0-30.2 10.2-58.7 27.9-81.5c12.9-15.5 29.6-28 49.2-35.7l157-61.7c8.2-3.2 17.5 .8 20.7 9s-.8 17.5-9 20.7l-157 61.7c-12.4 4.9-23.3 12.4-32.2 21.6l159.6 57.6c7.6 2.7 15.6 4.1 23.7 4.1s16.1-1.4 23.7-4.1L624.2 182.6c9.5-3.4 15.8-12.5 15.8-22.6s-6.3-19.1-15.8-22.6L343.7 36.1C336.1 33.4 328.1 32 320 32zM128 408c0 35.3 86 72 192 72s192-36.7 192-72L496.7 262.6 354.5 314c-11.1 4-22.8 6-34.5 6s-23.5-2-34.5-6L143.3 262.6 128 408z"></path></svg>                                     
                                </span>
                                <div className="resume__content">
                                    <div className="resume__content--top d-flex align-items-center mb-10">
                                        <h3 className="resume__content--title">Bachelor's Degree</h3>
                                        <span className="resume__content--subtitle">KIEV UNIVERSITY</span>
                                    </div>
                                    <p className="resume__content--desc mb-20">Promote your blog posts, case udie, and product ouncems nts with thehe branded videos.</p>
                                    <span className="resume__date">2015</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        
        <section className="skills__section section--padding pt-0">
            <div className="container">
                <div className="section__heading--topbar d-flex align-items-center justify-content-between mb-50">
                    <div className="section__heading max-width-580">
                        <span className="section__heading--subtitle text__secondary">SKILLs</span>
                        <h2 className="section__heading--title">Skill of Best Masters Software Skills.</h2> 
                    </div>
                    <div className="section__heading--right max-width-450">
                        <p className="section__heading--desc">Promote your blog posts, case udie, and product ouncems
                            with the the branded videoscustomers coming back for
                            services Makes best effort.</p>
                    </div>
                </div>
                <div className="skills__section--inner d-flex justify-content-between">
                    <div className="skills__step">
                        <div className="skills__items">
                            <div className="skills__text">
                                <span className="skills__name">Node.js</span>
                                <span className="skills__count width_60">60%</span>
                            </div>
                            <div className="skills__field width_60">
                                
                            </div>
                        </div>
                        <div className="skills__items">
                            <div className="skills__text">
                                <span className="skills__name">JavaScript</span>
                                <span className="skills__count width_75">75%</span>
                            </div>
                            <div className="skills__field width_75">
                                
                            </div>
                        </div>
                        <div className="skills__items">
                            <div className="skills__text">
                                <span className="skills__name">Web Design</span>
                                <span className="skills__count width_90">90%</span>
                            </div>
                            <div className="skills__field width_90">
                                
                            </div>
                        </div>
                    </div>
                    <div className="skills__step">
                        <div className="skills__items">
                            <div className="skills__text">
                                <span className="skills__name">HTML</span>
                                <span className="skills__count width_100">100%</span>
                            </div>
                            <div className="skills__field width_100">
                                
                            </div>
                        </div>
                        <div className="skills__items">
                            <div className="skills__text">
                                <span className="skills__name">CSS</span>
                                <span className="skills__count width_90">90%</span>
                            </div>
                            <div className="skills__field width_90">
                                
                            </div>
                        </div>
                        <div className="skills__items">
                            <div className="skills__text">
                                <span className="skills__name">React.js</span>
                                <span className="skills__count width_70">70%</span>
                            </div>
                            <div className="skills__field width_70">
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        
        <section className="portfolio__section portfolio__section--bg section--padding" id="portfolio">
            <div className="container">
                <div className="section__heading--topbar d-flex align-items-center justify-content-between mb-50">
                    <div className="section__heading max-width-580">
                        <span className="section__heading--subtitle text__secondary">PORTFOLIO</span>
                        <h2 className="section__heading--title">Never compromise for 
                            portfolio quality</h2> 
                    </div>
                    <div className="section__heading--right max-width-450">
                    <p className="section__heading--desc">Promote your blog posts, case udie, and product ouncems
                    with the the branded videoscustomers coming back for
                    services Makes best effort.</p>
                    </div>
                    </div>
                    
                <div className="portfolio__section--inner">
                    <div className="button-group filters-button-group mb-50">
                        <button onClick={() => getPortfolio('all')} className={"filters__button--items button "+ (CatClickSts === 'all' ? 'is-checked' : '')} data-filter="*">Show All</button>
                        {Category.map((catres,index) =>(
                            <button key={index} onClick={() => getPortfolio(catres.id)}  className={"filters__button--items button "+ (CatClickSts === catres.id ? 'is-checked' : '')} data-filter=".web">{catres.category_name}</button>
                        ))}
                       
                    </div>
                   
                   
                    <Fragment>
                  
                    {Loader ===true ? (<div className="d-flex justify-content-center"><Spinner animation="border" variant="light" style={{ width: "10rem", height: "10rem" }} /></div> ):(
                    <div className="portfolio__grid mb--n30">
                       {PortfolioList.map((porfoliodata,index) =>(
                        <div className="element-item web" key={index} data-category="web">
                        <div className="portfolio__card">
                            <a href="/#" className="popup-modal--open display-block" data-bs-toggle="modal" data-bs-target="#portfolioModal" onClick={()=> getPortfoliodetails(porfoliodata._id)}>
                                <div className="portfolio__image--card">
                                <img src={process.env.REACT_APP_API_BASE_URL+porfoliodata.banner_image} alt="img" />
                                </div>
                                <div className="portfolio__content">
                                    <span className="portfolio__zoom text-white">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-maximize"><path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3"></path></svg>
                                    </span>
                                    <h3 className="portfolio__title text-white">{porfoliodata.title}</h3>
                                    {/*<p className="portfolio__desc text-white">{porfoliodata.description}</p>*/}
                                </div>
                            </a>
                        </div>
                        </div>
                         ))}
                </div>
                 )}
                    </Fragment>
                 
                </div>
            </div>
        </section>
      
        <section className="testimonial__section section--padding position__relative">
            <div className="container">
                <div className="section__heading text-center mb-50">
                    <span className="section__heading--subtitle text__secondary">TESTIMONIALS</span>
                    <h2 className="section__heading--title">We are people say me</h2> 
                </div>
                <div className="testimonial__inner testimonial__swiper--activation swiper">
                    <div className="swiper-wrapper">
                        <div className="swiper-slide">
                            <div className="testimonial__items text-center">
                                <div className="testimonial__content mb-30">
                                    <ul className="rating__wrapper d-flex justify-content-center">
                                        <li className="rating__list"><span className="rating__icon"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg></span></li>
                                        <li className="rating__list"><span className="rating__icon"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg></span></li>
                                        <li className="rating__list"><span className="rating__icon"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg></span></li>
                                        <li className="rating__list"><span className="rating__icon"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg></span></li>
                                        <li className="rating__list"><span className="rating__icon"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg></span></li>
                                    </ul>   
                                     <p className="testimonial__desc">“We understand the importance of approaching each work integrally and believe in the power of simple and we
                                        say easy cation growth.</p>
                                </div>
                                <div className="testimonial__author">
                                    <img className="testimonial__author--media" src="assets/img/other/testimonial-author-thumb.png" alt="img" />
                                    <h3 className="testimonial__author--title">Romes Barson</h3>
                                    <span className="testimonial__author--subtitle">Manager</span>
                                </div>
                            </div>
                        </div>
                        <div className="swiper-slide">
                            <div className="testimonial__items text-center">
                                <div className="testimonial__content mb-30">
                                    <ul className="rating__wrapper d-flex justify-content-center">
                                        <li className="rating__list"><span className="rating__icon"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg></span></li>
                                        <li className="rating__list"><span className="rating__icon"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg></span></li>
                                        <li className="rating__list"><span className="rating__icon"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg></span></li>
                                        <li className="rating__list"><span className="rating__icon"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg></span></li>
                                        <li className="rating__list"><span className="rating__icon"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg></span></li>
                                    </ul>   
                                     <p className="testimonial__desc">“We understand the importance of approaching each work integrally and believe in the power of simple and we
                                        say easy cation growth.</p>
                                </div>
                                <div className="testimonial__author">
                                    <img className="testimonial__author--media" src="assets/img/other/testimonial-author-thumb.png" alt="img" />
                                    <h3 className="testimonial__author--title">Romes Barson</h3>
                                    <span className="testimonial__author--subtitle">Manager</span>
                                </div>
                            </div>
                        </div>
                        <div className="swiper-slide">
                            <div className="testimonial__items text-center">
                                <div className="testimonial__content mb-30">
                                    <ul className="rating__wrapper d-flex justify-content-center">
                                        <li className="rating__list"><span className="rating__icon"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg></span></li>
                                        <li className="rating__list"><span className="rating__icon"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg></span></li>
                                        <li className="rating__list"><span className="rating__icon"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg></span></li>
                                        <li className="rating__list"><span className="rating__icon"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg></span></li>
                                        <li className="rating__list"><span className="rating__icon"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg></span></li>
                                    </ul>   
                                     <p className="testimonial__desc">“We understand the importance of approaching each work integrally and believe in the power of simple and we
                                        say easy cation growth.</p>
                                </div>
                                <div className="testimonial__author">
                                    <img className="testimonial__author--media" src="assets/img/other/testimonial-author-thumb.png" alt="img" />
                                    <h3 className="testimonial__author--title">Romes Barson</h3>
                                    <span className="testimonial__author--subtitle">Manager</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="testimonial__pagination swiper-pagination"></div>
                </div>
            </div>
            <span className="testimonial__position--icon left">
                <svg width="260" height="260" fill="currentColor" stroke="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V320 288 216zm256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H320c-35.3 0-64-28.7-64-64V320 288 216z"></path></svg>
            </span>
            <span className="testimonial__position--icon right">
                <svg width="260" height="260" fill="currentColor" stroke="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M448 296c0 66.3-53.7 120-120 120h-8c-17.7 0-32-14.3-32-32s14.3-32 32-32h8c30.9 0 56-25.1 56-56v-8H320c-35.3 0-64-28.7-64-64V160c0-35.3 28.7-64 64-64h64c35.3 0 64 28.7 64 64v32 32 72zm-256 0c0 66.3-53.7 120-120 120H64c-17.7 0-32-14.3-32-32s14.3-32 32-32h8c30.9 0 56-25.1 56-56v-8H64c-35.3 0-64-28.7-64-64V160c0-35.3 28.7-64 64-64h64c35.3 0 64 28.7 64 64v32 32 72z"></path></svg>
            </span>
        </section>
       
        <section className="contact__section contact__section--bg" id="contact">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6">
                        <div className="contact__left">
                            <div className="section__heading mb-50">
                                <span className="section__heading--subtitle text__secondary">CONTACT</span>
                                <h2 className="section__heading--title mb-10">Get I contact work </h2> 
                                <p className="section__heading--desc">Promote your blog posts, case udie, and product ouncems
                                    with the the branded videoscustomers coming back for
                                    services Makes best effort.</p>
                            </div>
                            <form className="contact__form" action="/#">
                                <div className="row">
                                    <div className="col-lg-6 col-md-6 col-sm-6 mb-30">
                                        <input className="contact__input--field" placeholder="Your name" type="text" />
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-6 mb-30">
                                        <input className="contact__input--field" placeholder="Your email" type="text" />
                                    </div>
                                </div>
                                <textarea className="contact__textarea--field" placeholder="Message"></textarea>
                                <button className="contact__button primary__btn">Send Request</button>
                            </form>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="contact__info">
                            <div className="contact__info--items d-flex align-items-center">
                                <span className="contact__info--icon">
                                    <svg width="25" height="34" fill="currentColor" stroke="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z"></path></svg>
                                </span>
                                <div className="contact__info--content">
                                    <h3 className="contact__info--title">Call Me</h3>
                                    <p className="contact__info--desc">
                                        <a href="tel:+880254615566">+880254615566</a> <br />
                                        <a href="tel:+880254615566">+880254615566</a>
                                    </p>
                                </div>
                            </div>
                            <div className="contact__info--items d-flex align-items-center">
                                <span className="contact__info--icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-mail"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                                </span>
                                <div className="contact__info--content">
                                    <h3 className="contact__info--title">Email Us</h3>
                                    <p className="contact__info--desc">
                                        <a href="mailto:info@example.com">info@example.com</a> <br />
                                        <a href="mailto:info@example.com">info@example.com</a>
                                    </p>
                                </div>
                            </div>
                            <div className="contact__info--items d-flex align-items-center">
                                <span className="contact__info--icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-mail"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                                </span>
                                <div className="contact__info--content">
                                    <h3 className="contact__info--title">Address</h3>
                                    <p className="contact__info--desc">
                                        20, 25 Dhaka,0123 <br />
                                            Ratrba baraj,20
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <div className="contact__map--area">
            <div className="container">
                <iframe title="frame" className="contact__map--iframe" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7887.465355142307!2d-0.13384360843222626!3d51.4876034467734!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48760532743b90e1%3A0x790260718555a20c!2sU.S.%20Embassy%2C%20London!5e0!3m2!1sen!2sbd!4v1632035375945!5m2!1sen!2sbd" style={{border:'0'}} allowfullscreen="" loading="lazy"></iframe>
            </div>
        </div>
        
        <section className="blog__section section--padding" id="blog">
            <div className="container">
                <div className="section__heading--topbar d-flex align-items-center justify-content-between mb-50">
                    <div className="section__heading max-width-580">
                        <span className="section__heading--subtitle text__secondary">LATEST BLOGS</span>
                        <h2 className="section__heading--title">Blog Latest of News 
                            tricks & Updates</h2> 
                    </div>
                    <div className="section__heading--right max-width-450">
                        <p className="section__heading--desc">Promote your blog posts, case udie, and product ouncems
                            with the the branded videoscustomers coming back for
                            services Makes best effort.</p>
                    </div>
                </div>
                <div className="blog__section--inner">
                    <div className="row">
                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <article className="blog__card">
                                <a href="/#" data-bs-toggle="modal" data-bs-target="#blogModal">
                                    <div className="blog__card--thumbnail">
                                        <img src="assets/img/blog/blog1.png" alt="img" />
                                    </div>
                                    <div className="blog__card--content">
                                        <span className="blog__card--tag">UI /UX DESIGN</span>
                                        <h3 className="blog__card--title mb-12">Angular team welarges to trequests blog</h3>
                                        <p className="blog__card--desc">Lorem ipsum dolor sit amet,elit, sed do eiusmod tempor incididunt ut labore et dolore aliqu</p>
                                    </div>
                                </a>
                            </article>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <article className="blog__card">
                                <a href="/#" data-bs-toggle="modal" data-bs-target="#blogModal">
                                    <div className="blog__card--thumbnail">
                                        <img src="assets/img/blog/blog2.png" alt="img" />
                                    </div>
                                    <div className="blog__card--content">
                                        <span className="blog__card--tag">HTML AND CSS</span>
                                        <h3 className="blog__card--title mb-12">How to create a website using html</h3>
                                        <p className="blog__card--desc">Lorem ipsum dolor sit amet,elit, sed do eiusmod tempor incididunt ut labore et dolore aliqu</p>
                                    </div>
                                </a>
                            </article>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <article className="blog__card">
                                <a href="/#" data-bs-toggle="modal" data-bs-target="#blogModal">
                                    <div className="blog__card--thumbnail">
                                        <img src="assets/img/blog/blog3.png" alt="img" />
                                    </div>
                                    <div className="blog__card--content">
                                        <span className="blog__card--tag">Shopify</span>
                                        <h3 className="blog__card--title mb-12">We mack team welarges to trequests blog</h3>
                                        <p className="blog__card--desc">Lorem ipsum dolor sit amet,elit, sed do eiusmod tempor incididunt ut labore et dolore aliqu</p>
                                    </div>
                                </a>
                            </article>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <footer className="footer footer__section footer__bg">
            <div className="container">
                <div className="main__footer d-flex justify-content-between align-items-center">
                    <p className="copyright__content mb-0">Developed with <span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" stroke="text-paragraph" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-heart"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
                        </span>  by <span><a className="text__secondary" href="/#">Morex</a></span>© 2023</p>
                    <ul className="footer__menu d-flex">
                        <li><a className="footer__menu--link" href="shop.html">Terms & Condition</a></li>
                        <li><a className="footer__menu--link" href="about.html"> Privacy Policy</a></li>
                    </ul>
                </div>
            </div>
        </footer>
        

    </main>

    <div className="modal fade" id="portfolioModal" tabindex="-1" style={{display: 'none'}} aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered portfolio__modal--dialog">
          <div className="modal-content modal-content-height">
            <button type="button" className="btn-close portfolio__modal--colse" data-bs-dismiss="modal" aria-label="Close">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-x"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
            </button>

                        {DetailsLoader === true ? (
                          
            <div className="modal-body portfolio__modal--body">
            <h2 className="portfolio__modal--title text-center mb-30"> </h2>
            <div className="portfolio__modal--info d-flex align-items-center mb-20">
            <Spinner animation="border" variant="light" style={{ width: "10rem", height: "10rem" }} />
            </div>
          
        </div>      
        ):(               
            <div className="modal-body portfolio__modal--body">
            <h2 className="portfolio__modal--title text-center mb-30">{PortfolioDetails.title}</h2>
            <div className="portfolio__modal--info d-flex align-items-center mb-20">
                <div className="portfolio__modal--info--list">
                    <p className="portfolio__modal--info--text">
                        <span className="portfolio__modal--info__icon"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-file-text"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg></span>
                        Project :&nbsp;
                        <span className="portfolio__modal--info__name">Website</span>
                    </p>
                    <p className="portfolio__modal--info--text">
                        <span className="portfolio__modal--info__icon"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-code"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg></span>
                        Languages :&nbsp;
                          <span className="portfolio__modal--info__name"> {PortfolioDetails.prog_lang}</span>
                    </p>
                </div>
                <div className="portfolio__modal--info--list">
                    <p className="portfolio__modal--info--text">
                        <span className="portfolio__modal--info__icon"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-user"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg></span>
                        Client :&nbsp;
                         <span className="portfolio__modal--info__name"> {PortfolioDetails.client}</span>
                    </p>
                    <p className="portfolio__modal--info--text">
                        <span className="portfolio__modal--info__icon"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-external-link"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg></span>
                        Preview :&nbsp;
                        <a className="portfolio__modal--info__name" href={PortfolioDetails.website_link} target="_blank" rel="noopener noreferrer"> {PortfolioDetails.website_link}</a>
                    </p>
                </div>
            </div>
            <p className="portfolio__modal--info__desc mb-30">
            {PortfolioDetails.description}
            </p>
            <div className="portfolio__modal--info__media">
                <img src={process.env.REACT_APP_API_BASE_URL+PortfolioDetails.banner_image} alt="img" />
            </div>
            <span className="section__heading--subtitle text__secondary mt-4">Screenshots : </span>
            <div className="row">
                {PortfolioMultiImg.map((multi,index) =>(
                    <div className="col-md-6" key={index}>
                    <div className="portfolio__modal--info__media">
                    <img src={process.env.REACT_APP_API_BASE_URL+multi.image} alt="img" />
                     </div>
                    </div>
        ))}
                
            </div>
        </div>

         )}


          </div>
        </div>
    </div>

    <div className="modal fade" id="blogModal" tabindex="-1" style={{display: 'none'}} aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered blog__modal--dialog">
          <div className="modal-content modal-content-height">
            <button type="button" className="btn-close portfolio__modal--colse" data-bs-dismiss="modal" aria-label="Close">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-x"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
            </button>
            <div className="modal-body blog__modal--body">
                <div className="blog__details--media mb-30">
                    <img src="assets/img/blog/blog-details-1.png" alt="img" />
                </div>
                <div className="blog__details--content mb-30">
                    <h2 className="blog__details--title mb-20">Angular team welarges to trequests blog</h2>
                    <p className="blog__details--desc">It is a long established fact that a reader will be distracted by the readable content of a page is when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using ique maiestatis sum quod sum ut alienum nec et to summo possim persequeris vix mea. Adhuc quodsi qui, sit no tale essent electramei sum sums rodesset in pro, quo scripta feugait vidisse. Lorem ipsum dolor sit amet, eu duo ferri labor dicat Mea ex modo reque senserit, et sed hinc dolor, scaevola sum salutandi expetendis vix ne his quod mundi consequat sum. There are not many of passages of lorem</p>
                    <p className="blog__details--desc">It is a long established fact that a reader will be distracted by the readable content of a page is when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters,</p>
                    <blockquote>
                        <svg className="blockquote__svg" aria-hidden="true" viewBox="0 0 24 27" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z" fill="currentColor"></path></svg>
                        <p className="blockquote__desc">"Tailwind css is just awesome. It contains tons of predesigned components and pages starting from login screen to complex dashboard. Perfect choice for your next SaaS application."</p>
                    </blockquote>
                </div>
                <div className="comment__box">
                    <div className="reviews__comment--area2 mb-30">
                        <h2 className="blog__comment--title style2 mb-30">Recent Comment</h2>
                        <div className="reviews__comment--inner">
                            <div className="reviews__comment--list d-flex">
                                <div className="reviews__comment--thumb">
                                    <img src="assets/img/other/comment-thumb1.webp" alt="comment-thumb" />
                                </div>
                                <div className="reviews__comment--content ">
                                    <div className="reviews__comment--top d-flex justify-content-between">
                                        <div className="reviews__comment--top__left">
                                            <h3 className="reviews__comment--content__title">Jakes on</h3>
                                            <span className="reviews__comment--content__date2">December 02, 2023</span>
                                        </div>
                                        <button className="comment__reply--btn primary__btn">Reply</button>
                                    </div>
                                    <p className="reviews__comment--content__desc">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos ex repellat officiis neque. Veniam, rem nesciunt. Assumenda distinctio, autem error repellat eveniet ratione dolor facilis accusantium amet pariatur, non eius!</p>
                                </div>
                            </div>
                            <div className="reviews__comment--list margin__left d-flex">
                                <div className="reviews__comment--thumb">
                                    <img src="assets/img/other/comment-thumb2.webp" alt="comment-thumb" />
                                </div>
                                <div className="reviews__comment--content ">
                                    <div className="reviews__comment--top d-flex justify-content-between">
                                        <div className="reviews__comment--top__left">
                                            <h3 className="reviews__comment--content__title">Laura Johnson</h3>
                                            <span className="reviews__comment--content__date2">December 02, 2023</span>
                                        </div>
                                        <button className="comment__reply--btn primary__btn">Reply</button>
                                    </div>
                                    <p className="reviews__comment--content__desc">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos ex repellat officiis neque. Veniam, rem nesciunt. Assumenda distinctio, autem error repellat eveniet ratione dolor facilis accusantium amet pariatur, non eius!</p>
                                </div>
                            </div>
                            <div className="reviews__comment--list d-flex">
                                <div className="reviews__comment--thumb">
                                    <img src="assets/img/other/comment-thumb3.webp" alt="comment-thumb" />
                                </div>
                                <div className="reviews__comment--content ">
                                    <div className="reviews__comment--top d-flex justify-content-between">
                                        <div className="reviews__comment--top__left">
                                            <h3 className="reviews__comment--content__title">Richard Smith</h3>
                                            <span className="reviews__comment--content__date2">December 02, 2023</span>
                                        </div>
                                        <button className="comment__reply--btn primary__btn">Reply</button>
                                    </div>
                                    <p className="reviews__comment--content__desc">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos ex repellat officiis neque. Veniam, rem nesciunt. Assumenda distinctio, autem error repellat eveniet ratione dolor facilis accusantium amet pariatur, non eius!</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="reviews__comment--reply__area">
                        <form action="/#">
                            <h2 className="blog__comment--title mb-30">Leave A Comment</h2>
                            <div className="row">
                                <div className="col-lg-4 col-md-6 mb-20">
                                    <label>
                                        <input className="reviews__comment--reply__input" placeholder="Your Name...." type="text" />
                                    </label>
                                </div>  
                                <div className="col-lg-4 col-md-6 mb-20">
                                    <label>
                                        <input className="reviews__comment--reply__input" placeholder="Your Email...." type="email" />
                                    </label>
                                </div> 
                                <div className="col-lg-4 col-md-6 mb-20">
                                    <label>
                                        <input className="reviews__comment--reply__input" placeholder="Your Website...." type="text" />
                                    </label>
                                </div> 
                                <div className="col-12 mb-15">
                                    <textarea className="reviews__comment--reply__textarea" placeholder="Your Comments...." ></textarea>
                                </div> 
                                 
                            </div>
                            <button className="blog__comment--btn primary__btn" data-hover="Submit" type="submit">Post Comment</button>
                        </form>   
                    </div> 
                </div> 
            </div>
          </div>
        </div>
    </div>


    
    </div>
  );
}

export default Home;
