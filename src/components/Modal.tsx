import { MouseEvent } from 'react'

interface modal {
  closeModal: (e: MouseEvent) => void,
  modalDisplay: string,
  productImage: string,
  productName: string,
  productDescription: string,
  previousPrice: number,
  discountedPrice: number,
}

const Modal = ({ closeModal, modalDisplay, productImage, productName, productDescription, previousPrice, discountedPrice }: modal) => {
  return ( 
    <div className={`modal ${modalDisplay}`} id="itemDetailModal">
      <div className="modal-container">
        <a href="#" className="close-icon" onClick={closeModal}>
          <i className="ri-close-line"></i>
        </a>

        <div className="modal-content flex">
          <img src={productImage} alt={productName} />

          <div className="product-content">
            <h3>
              {productName}
            </h3>
            <p>
              {productDescription}
            </p>

            <div className="product-rating">
              <i className="ri-star-line"></i>
              <i className="ri-star-line"></i>
              <i className="ri-star-line"></i>
              <i className="ri-star-line"></i>
              <i className="ri-star-line"></i>
            </div>

            <div className="product-price">
              IDR {discountedPrice} <span>IDR {previousPrice}</span>
            </div>

            <button className="flex"><i className="ri-shopping-cart-line"></i> Add To Cart</button>
          </div>
        </div>
      </div>
    </div>
   );
}
 
export default Modal;