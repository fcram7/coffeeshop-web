import rupiah from '../priceConverter/priceConverter'

import { MouseEvent } from 'react'

interface cartItem {
  cartItemImg: string,
  productName: string,
  productQuantity?: number,
  itemPrice: number,
  itemTotalPrice?: number,
  addItem: (e: MouseEvent) => void,
  removeItem: (e: MouseEvent) => void,
}

const CartItem = ({
  productQuantity,
  cartItemImg,
  productName,
  itemPrice,
  itemTotalPrice,
  addItem,
  removeItem
}: cartItem) => {


  return ( 
    <article className="cart-item flex">
      <img src={cartItemImg} alt="Product 1" />
      <div className="item-detail">
        <h3>{productName}</h3>
        <div className="item-price">{rupiah(itemPrice)}</div>

        <span>Qty: </span>
        <button id="minus" onClick={removeItem}>&minus;</button>
        <span>{productQuantity}</span>
        <button id="plus" onClick={addItem}>&#43;</button>

        <span>Total &#61; {rupiah(itemTotalPrice!)}</span>
      </div>

      <i className="ri-delete-bin-2-line delete-item"></i>
    </article>
);
}
 
export default CartItem;