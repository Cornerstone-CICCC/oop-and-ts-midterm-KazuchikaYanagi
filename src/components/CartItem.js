import { Component } from "../common/Component.js";

export class CartItem extends Component {
  constructor(props) {
    super(props);
    this.handleRemoveToCart = this.handleRemoveToCart.bind(this);
    this.handleIncrementQuality = this.handleIncrementQuantity.bind(this);
    this.handleDecrementQuantity = this.handleDecrementQuantity.bind(this);
  }

  handleRemoveToCart(id) {
    console.log(id);
    this.props.cartContext.removeProduct(id);
  }

  handleIncrementQuantity(id) {
    this.props.cartContext.incrementQuantity(id);
  }

  handleDecrementQuantity(id) {
    this.props.cartContext.decrementQuantity(id);
  }

  render() {
    const el = document.createElement("li");
    el.insertAdjacentHTML(
      "afterbegin",
      `
        <img src="${this.props.product.product.image}" />
        
        <div class="option_container">
          <p>$<span>${this.props.product.product.price}</span> &times; ${this.props.product.quantity}</p>
          <div class="btn_container">
            <button class="delete_btn">Remove</button>
            <div class="quantity_container">
              <button class="dec_btn">-</button>
              <span>${this.props.product.quantity}</span>
              <button class="inc_btn">+</button>
            </div>
          </div>
        </div>
      `
    );

    el.querySelector(".delete_btn").addEventListener("click", () =>
      this.handleRemoveToCart(this.props.product.id)
    );

    el.querySelector(".inc_btn").addEventListener("click", () => {
      this.handleIncrementQuantity(this.props.product.id);
    });

    el.querySelector(".dec_btn").addEventListener("click", () => {
      this.handleDecrementQuantity(this.props.product.id);
    });

    return el;
  }
}
