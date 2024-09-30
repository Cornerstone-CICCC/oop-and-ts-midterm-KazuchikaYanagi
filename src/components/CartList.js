import { Component } from "../common/Component.js";
import { CartItem } from "./CartItem.js";

export class CartList extends Component {
  constructor(props) {
    super(props);
    this.state = { cart: [] };
    this.updateCart = this.updateCart.bind(this);
    this.props.cartContext.subscribe(this.updateCart);
    this.props.cartContext.totalPrice.bind(this);
    this.props.cartContext.openDescription.bind(this);
    this.productsListElement = null;
    this.cartElement = null;
  }

  // handleTotalPrice() {
  //   this.props.cartContext.totalPrice;
  // }

  updateCart(cart) {
    // cart is coming from context
    this.state.cart = cart;
    console.log(cart);

    // Clear the current ul
    this.productsListElement.innerHTML = "";

    // Iterate over cart items

    // good solution

    this.state.cart.forEach((product) => {
      const productItem = new CartItem({
        product,
        cartContext: this.props.cartContext,
      });
      this.productsListElement.appendChild(productItem.render());
    });

    const total = this.props.cartContext.cart.reduce((acc, current) => {
      return acc + current.quantity;
    }, 0);
    const quantityElement = document.createElement("p");
    quantityElement.className = "total_quantity";
    quantityElement.innerHTML = `🛒 Total Quantity: <strong>${total}</strong>`;
    this.productsListElement.prepend(quantityElement);

    const totalPrice = this.props.cartContext.cart.reduce((acc, current) => {
      return acc + current.product.price * current.quantity;
    }, 0);
    const totalPriceElement = document.createElement("p");
    totalPriceElement.className = "total_price";
    totalPriceElement.innerHTML = `💰 Total Price: $<strong>${totalPrice.toFixed(
      2
    )}</strong>`;
    this.productsListElement.prepend(totalPriceElement);
  }

  // Bad solution
  //   const cartItems = this.state.cart.map(
  //     (product) =>
  //       new CartItem({ product, cartContext: this.props.cartContext }).render()
  //         .outerHTML
  //   );

  //   this.productsListElement.innerHTML = cartItems;
  // }

  render() {
    const cartElement = document.createElement("div");
    cartElement.className = "cart_modal";
    cartElement.innerHTML = `
        <div class="cart_inner">
          <button class="slide_close_btn">&times;</button>
          <p>🛒 Cart List 🛒</p>
        </div>
        <ul></ul>
    `;

    this.productsListElement = cartElement.querySelector("ul");

    cartElement
      .querySelector(".slide_close_btn")
      .addEventListener("click", function () {
        document.querySelector("#cartlist_container").style.display = "none";
      });

    return cartElement;
  }
}
