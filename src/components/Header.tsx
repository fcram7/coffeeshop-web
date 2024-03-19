import { useState, MouseEvent, createRef } from 'react';

import CoffeeBeansProduct from "/coffee-beans-product-1.jpg";
import CartItem from './CartItem';


const Header = () => {
  const [navBar, setNavBar] = useState(false);
  const [searchBar, setSearchBar] = useState(false);
  const [shoppingCart, setShoppingCart] = useState(false);

  const searchInputRef = createRef<HTMLInputElement>();

  const hamburgerButtonHandler = (e: MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setNavBar((prevNavBar) => !prevNavBar);
  };

  const searchButtonHandler = (e: MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setSearchBar((prevSearchBar) => !prevSearchBar);
    searchInputRef.current?.focus();
  };

  const cartButtonHandler = (e: MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setShoppingCart((prevShoppingCart) => !prevShoppingCart);
  };

  //OUTSIDE OF ELEMENT CLICK
  const navbarMenu = document.querySelector(".navbar-nav");
  const hamburger = document.querySelector("#hamburgerMenu");
  const search = document.querySelector(".search-form");
  const searchButton = document.querySelector("#searchButton");
  const cart = document.querySelector(".shopping-cart")
  const cartButton = document.querySelector("#shoppingCart");

  document.addEventListener("click", (e: Event) => {
    const target = e.target as Node;
    if (!navbarMenu?.contains(target) && !hamburger?.contains(target)) {
      setNavBar(false);
    }

    if (!search?.contains(target) && !searchButton?.contains(target) && !searchBar) {
      setSearchBar(false);
    }

    if (!cart?.contains(target) && !cartButton?.contains(target)) {
      setShoppingCart(false);
    }
  });

  return ( 
    <header className="navbar-section">
      <nav className="navbar flex">
        <a href="#" className="navbar-logo">Coffee<span>Shop</span></a>

        <div className={`navbar-nav ${navBar ? "active" : ""}`}>
          <a href="#">Home</a>
          <a href="#about">About</a>
          <a href="#ourmenu">Our Menu</a>
          <a href="#beans">Beans</a>
          <a href="#contactus">Contact Us</a>
        </div>

        <div className="navbar-extra">
          <a id="searchButton" onClick={searchButtonHandler}><i className="ri-search-line"></i></a>
          <a id="shoppingCart" onClick={cartButtonHandler}><i className="ri-shopping-cart-line"></i></a>
          <a id="hamburgerMenu" onClick={hamburgerButtonHandler}><i className="ri-menu-line"></i></a>
        </div>

        <div className={`search-form ${searchBar ? "active" : ""}`}>
          <input type="search" id="searchBox" placeholder="Search Here..." ref={searchInputRef}/>
          <label htmlFor="searchBox"><i className="ri-search-line"></i></label>
        </div>

        <div className={`shopping-cart ${shoppingCart ? "active" : ""}`}>
          <CartItem
            cartItemImg={CoffeeBeansProduct}
            productName="Product 1"
            itemPrice={40000}
          />

          <CartItem
            cartItemImg={CoffeeBeansProduct}
            productName="Product 1"
            itemPrice={40000}
          />

          <CartItem
            cartItemImg={CoffeeBeansProduct}
            productName="Product 1"
            itemPrice={40000}
          />
        </div>
      </nav>
    </header>
   );
}
 
export default Header;