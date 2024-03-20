import { useState, MouseEvent, createRef } from 'react';
import CartItem from './CartItem';
import useProductStore from '../zustand/product';


const Header = () => {
  const [navBar, setNavBar] = useState(false);
  const [searchBar, setSearchBar] = useState(false);
  const [shoppingCart, setShoppingCart] = useState(false);

  const {
    cart,
    quantity,
    totalPrice,
    addToCart,
    removeFromCart,
  } = useProductStore();

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
  const cartMenu = document.querySelector(".shopping-cart");
  const cartButton = document.querySelector("#shoppingCart");

  document.addEventListener("click", (e: Event) => {
    const target = e.target as Node;

    if (!navbarMenu?.contains(target) && !hamburger?.contains(target)) {
      setNavBar(false);
    }

    if (!search?.contains(target) && !searchButton?.contains(target) && !searchBar) {
      setSearchBar(false);
    }

    if (!cartMenu?.contains(target) && !cartButton?.contains(target)) {
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
          <a id="shoppingCart" onClick={cartButtonHandler}>
            <i className="ri-shopping-cart-line"></i>
            {quantity ? <span className="in-cart-quantity">{quantity}</span> : null}
          </a>
          <a id="hamburgerMenu" onClick={hamburgerButtonHandler}><i className="ri-menu-line"></i></a>
        </div>

        <div
          className={`search-form ${searchBar ? "active" : ""}`}
          onClick={(e) => e.stopPropagation()}
        >
          <input type="search" id="searchBox" placeholder="Search Here..." ref={searchInputRef}/>
          <label htmlFor="searchBox"><i className="ri-search-line"></i></label>
        </div>

        <div
          className={`shopping-cart ${shoppingCart ? "active" : ""}`}
          onClick={(e: MouseEvent) => e.stopPropagation()}
        >
          {cart.length !== 0 ? 
            cart.map((item, index) => (
              <CartItem
                key={index}
                cartItemImg={item.img}
                productName={item.name}
                itemPrice={item.price}
                productQuantity={item.quantity}
                itemTotalPrice={item.totalPricePerProduct}
                addItem={(e: MouseEvent) => {
                  e.stopPropagation()
                  addToCart(item)
                }}
                removeItem={(e: MouseEvent) => {
                  e.stopPropagation()
                  removeFromCart(item.id, item)
                }}
              />
            )) : (<h1>Cart Empty!</h1>)
          }

          {cart.length !== 0 ? 
            <h3 className="total-price">Total: {totalPrice}</h3>
            : null
          }
        </div>
      </nav>
    </header>
   );
}
 
export default Header;