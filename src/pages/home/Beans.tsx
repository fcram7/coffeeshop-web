import { useState, MouseEvent } from 'react';
import Modal from '../../components/Modal';
import ProductCard from './components/productCard';
import CoffeeBeansProduct from "/coffee-beans-product-1.jpg";

const Beans = () => {
  const [modal, setModal] = useState(false)

  const productDetailButtonHandler = (e: MouseEvent) => {
    e.preventDefault();
    setModal((prevModal) => !prevModal);
  }

  const closeModalButtonHandler = (e: MouseEvent) => {
    e.preventDefault();
    setModal((prevModal) => !prevModal);
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
          <ProductCard
            onClick={productDetailButtonHandler}
            productImg={CoffeeBeansProduct}
            productName="Coffee Beans Little Nap"
            previousPrice={45000}
            discountedPrice={30000}
          />

          <ProductCard
            onClick={productDetailButtonHandler}
            productImg={CoffeeBeansProduct}
            productName="Coffee Beans Little Nap"
            previousPrice={45000}
            discountedPrice={30000}
          />
          <ProductCard
            onClick={productDetailButtonHandler}
            productImg={CoffeeBeansProduct}
            productName="Coffee Beans Little Nap"
            previousPrice={45000}
            discountedPrice={30000}
          />
        </div>
      </section>
      <Modal
        closeModal={closeModalButtonHandler}
        modalDisplay={modal ? "flex" : "none"}
        productImage={CoffeeBeansProduct}
        productName="Coffee Beans Little Nap"
        productDescription="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam enim quidem quibusdam alias corporis illum!"
        previousPrice={45000}
        discountedPrice={30000}
      />
    </>
   );
}
 
export default Beans;