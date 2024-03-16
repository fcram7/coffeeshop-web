import { useState } from 'react';

const Header = () => {
  const [hamburgerClicked, setHamburgerClicked] = useState(false)
  const hamburgerButtonHandler = () => {
    setHamburgerClicked(true);
    if (hamburgerClicked === true) {
      setHamburgerClicked(false);
    }
  };

  const navbar = document.querySelector("navbar-nav");
  const hamburger = document.querySelector("#hamburgerMenu");

  document.addEventListener('click', (e: MouseEvent) => {
    const target = e.target as Node;
    if (!navbar?.contains(target) && !hamburger?.contains(target)) {
      setHamburgerClicked(false);
    }
  });

  return ( 
    <header className="navbar-section">
      <nav className="navbar flex">
        <a href="#" className="navbar-logo">Coffee<span>Shop</span></a>

        <div className={hamburgerClicked ? "navbar-nav active" : "navbar-nav"}>
          <a href="#">Home</a>
          <a href="#about">About</a>
          <a href="#ourmenu">Our Menu</a>
          <a href="#contactus">Contact Us</a>
        </div>

        <div className="navbar-extra">
          <a href="#" id="search"><i className="ri-search-line"></i></a>
          <a href="#" id="shoppingCart"><i className="ri-shopping-cart-line"></i></a>
          <a href="#" id="hamburgerMenu" onClick={hamburgerButtonHandler}><i className="ri-menu-line"></i></a>
        </div>
      </nav>
    </header>
   );
}
 
export default Header;