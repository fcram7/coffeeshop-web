import { useState, MouseEvent, useEffect } from 'react';
import Modal from '../../components/Modal';
import ProductCard from './components/productCard';
import CoffeeBeansProduct from "/coffee-beans-product-1.jpg";
import useProductStore from '../../zustand/product';

const Beans = () => {
  type Product = {
    id: string,
    name: string,
    img: string,
    description: string,
    price: number,
  }

  const [modal, setModal] = useState(false);

  const { products, cart, addToCart, totalPrice, quantity } = useProductStore();
  
  useEffect(() => {
    console.log(cart)
    console.log(totalPrice)
    console.log(quantity)
  }, [cart, totalPrice, quantity])

  const productDetailButtonHandler = (e: MouseEvent) => {
    e.preventDefault();
    setModal((prevModal) => !prevModal);
  }

  const closeModalButtonHandler = (e: MouseEvent) => {
    e.preventDefault();
    setModal((prevModal) => !prevModal);
  }

  const addToCartButtonHandler = (product: Product) => {
    addToCart(product);
    console.log(cart);
  }

  const modalArea = document.querySelector("#itemDetailModal");
  window.onclick = (e: Event) => {
    const target = e.target as Node;
    if(target === modalArea) {
      setModal((prevModal) => !prevModal);
    }
  }

  return (
    <>
      <section className="beans-section section" id="beans">
        <h2 className="beans-section-title section-title">
          Our <span>Beans</span>
        </h2>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est, sapiente.</p>

        <div className="beans-section-content grid">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              detailButton={productDetailButtonHandler}
              addToCartButton={(e: MouseEvent) => {
                e.preventDefault()
                e.stopPropagation()
                addToCartButtonHandler(product)
              }}
              productImg={product.img}
              productName={product.name}
              productPrice={product.price}
            />
          ))}
        </div>
      </section>
      <Modal
        closeModal={closeModalButtonHandler}
        modalDisplay={modal ? "flex" : "none"}
        productImage={CoffeeBeansProduct}
        productName="Coffee Beans Little Nap"
        productDescription="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam enim quidem quibusdam alias corporis illum!"
        productPrice={30000}
      />
    </>
   );
}
 
export default Beans;