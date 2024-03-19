interface cartItem {
  cartItemImg: string,
  productName: string,
  itemPrice: number
}

const CartItem = ({cartItemImg, productName, itemPrice}: cartItem) => {
  return ( 
    <article className="cart-item flex">
      <img src={cartItemImg} alt="Product 1" />
      <div className="item-detail">
        <h3>{productName}</h3>
        <div className="item-price">IDR {itemPrice}</div>
      </div>

      <i className="ri-delete-bin-2-line delete-item"></i>
    </article>
);
}
 
export default CartItem;