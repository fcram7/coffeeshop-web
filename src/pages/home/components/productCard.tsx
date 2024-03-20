import { MouseEvent } from 'react';
import rupiah from '../../../priceConverter/priceConverter';

interface card {
  productImg: string,
  productName: string,
  productPrice: number,
  detailButton: (e: MouseEvent) => void,
  addToCartButton: (e: MouseEvent) => void,
}

const ProductCard = (props: card) => {
  return ( 
    <article className="product-card">
      <div className="product-icons flex">
        <a 
          className="flex"
          href=""
          onClick={props.addToCartButton}
        >
          <i className="ri-shopping-cart-line"></i>
        </a>
        <a
          className="item-detail-button flex"
          href=""
          onClick={props.detailButton}
        >
          <i className="ri-eye-line"></i>
        </a>
      </div>

      <div className="product-image">
        <img src={props.productImg} alt="Coffee Beans Product 1" />
      </div>

      <div className="product-content">
        <h3>
          {props.productName}
        </h3>
        <div className="product-rating">
          <i className="ri-star-line"></i>
          <i className="ri-star-line"></i>
          <i className="ri-star-line"></i>
          <i className="ri-star-line"></i>
          <i className="ri-star-line"></i>
        </div>

        <div className="product-price">
          <h4>{rupiah(props.productPrice)}</h4>
        </div>
      </div>
    </article>
   );
}
 
export default ProductCard;