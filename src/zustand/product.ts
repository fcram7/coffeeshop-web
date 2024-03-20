import { create } from 'zustand';

type Product = {
  id: string,
  name: string,
  img: string,
  description: string,
  price: number,
  quantity?: number,
  totalPricePerProduct?: number,
}

const coffeeBeans: Product[] = [
  {
    id: "coffeeBean1",
    name: "Robusta Brazil",
    img: "/coffee-beans-product-1.jpg",
    description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam enim quidem quibusdam alias corporis illum!",
    price: 25000
  },

  {
    id: "coffeeBean2",
    name: "Espresso Blend",
    img: "/coffee-beans-product-2.jpg",
    description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam enim quidem quibusdam alias corporis illum!",
    price: 20000
  },

  {
    id: "coffeeBean3",
    name: "Primo Passo",
    img: "/coffee-beans-product-3.jpg",
    description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam enim quidem quibusdam alias corporis illum!",
    price: 30000
  },

  {
    id: "coffeeBean4",
    name: "Aceh Gayo",
    img: "/coffee-beans-product-4.jpg",
    description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam enim quidem quibusdam alias corporis illum!",
    price: 30000
  },

  {
    id: "coffeeBean5",
    name: "Sumatera Mandeiling",
    img: "/coffee-beans-product-5.jpg",
    description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam enim quidem quibusdam alias corporis illum!",
    price: 35000
  }
]

interface productState {
  products: Product[],
  cart: Product[],
  totalPrice: number,
  quantity: number,
  addToCart: (product: Product) => void,
  removeFromCart: (id: string, product: Product) => void
}

const useProductStore = create<productState>(set => ({
  products: coffeeBeans,
  cart: [],
  totalPrice: 0,
  quantity: 0,
  addToCart: (product: Product) => set(state => {
    const existingProduct = state.cart.find((item) => item.id === product.id);
    if (existingProduct) {
      existingProduct.quantity! += 1;
      existingProduct.totalPricePerProduct = product.price * existingProduct.quantity!;
      return {
        ...state,
        quantity: state.quantity + 1,
        totalPrice: state.totalPrice += product.price,
      };
    } else {
      return {
        ...state,
        cart: [...state.cart, {...product, quantity: 1, totalPricePerProduct: product.price}],
        quantity: state.quantity + 1,
        totalPrice: state.totalPrice += product.price,
      }
    }
  }),
  removeFromCart: (id: string, product: Product) => set(state => {
    const existingProduct = state.cart.find((item) => item.id === id);
    if (existingProduct && existingProduct.quantity! > 1) {
      existingProduct.quantity! -= 1;
      existingProduct.totalPricePerProduct = product.price * existingProduct.quantity!;
      return {
        ...state,
        quantity: state.quantity - 1,
        totalPrice: state.totalPrice -= product.price
      };
    } else if (existingProduct && existingProduct.quantity! === 1) {
      return {
        cart: state.cart.filter((item) => item.id !== id),
        quantity: state.quantity - 1,
        totalPrice: state.totalPrice -= existingProduct.price,
      }
    } else {
      return {
        ...state,
        cart: [...state.cart, {...product}],
        quantity: state.quantity - 1,
        totalPrice: state.totalPrice -= product.price,
      }
    }
  })
}))

export default useProductStore;