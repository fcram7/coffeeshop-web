const Footer = () => {
  return ( 
    <footer className="footer-section">
      <div className="footer-content">
        <div className="socials">
          <a href="#">
            <i className="ri-instagram-line"></i>
          </a>
          <a href="#">
            <i className="ri-twitter-line"></i>
          </a>
        </div>

        <div className="links">
          <a href="#">Home</a>
          <a href="#aboutus">About Us</a>
          <a href="#ourmenu">Our Menu</a>
          <a href="#contactus">Send Us A Message!</a>
        </div>

        <div className="credit">
          <p>
            Developed by <a href="#">Fachri Achmad Maulana</a>. | &copy; 2023
          </p>
        </div>
      </div>
    </footer>
   );
}
 
export default Footer;