import { Component } from "../common/Component.js";

export class ProductItem extends Component {
  constructor(props) {
    super(props);
    this.handleAddToCart = this.handleAddToCart.bind(this);
    this.showMore = false;
    // this.handleOpenDescription = this.handleOpenDescription.bind(this);
  }

  handleAddToCart() {
    this.props.cartContext.addProduct(this.props.product);
  }

  // handleOpenDescription() {
  //   this.showMore = !this.showMore;
  //   console.log(this.showMore);
  // }

  render() {
    const product = document.createElement("div");
    product.className = "product_item";
    product.innerHTML = `
      <h4>${this.props.product.title}</h4>
      <img src="${this.props.product.image}">
      <p class="product-price">$<strong>${this.props.product.price}</strong></p>
      <span class="rate-wrap"><span class="rate"></span><span class="num"><strong> ${
        this.props.product.rating.rate
      } </strong>(${this.props.product.rating.count})</span></span>
      <div class="description_container">
        <p class="description">${
          this.props.product.description.split(" ").slice(0, 10).join(" ") +
          " ..."
        }</p>
        <button class="showmore_btn">Show more</button>
        <button class="showless_btn">Show less</button>
      </div>
      
      
      
      <button class="add-to-cart-btn">Add to Cart</button>
    `;

    // Add this event to cart button

    product
      .querySelector(".add-to-cart-btn")
      .addEventListener("click", this.handleAddToCart);

    const rateElement = product.querySelector(".rate");
    rateElement.style.setProperty("--score", this.props.product.rating.rate);

    product.querySelector(".showmore_btn").addEventListener("click", () => {
      product.querySelector(".description").innerHTML =
        this.props.product.description;
      // product
      //   .querySelector(".description")
      //   .insertAdjacentHTML(
      //     "beforeend",
      //     "<button class='close_show_btn'>Show less</button>"
      //   );
      product.querySelector(".showmore_btn").style.display = "none";
      product.querySelector(".showless_btn").style.display = "block";
    });

    // document.addEventListener("click", function (e) {
    //   if (e.target.closest(".showless.btn")) {
    //     return (product.querySelector(".description").innerHTML = `${
    //       this.props.product.description.split(" ").slice(0, 10).join(" ") +
    //       " ..."
    //     } <button>Show more</button>`);
    //   }
    //   console.log(e.target.className);
    // });

    product.querySelector(".showless_btn").addEventListener("click", () => {
      product.querySelector(".description").innerHTML =
        this.props.product.description.split(" ").slice(0, 10).join(" ") +
        " ...";
      product.querySelector(".showmore_btn").style.display = "block";
      product.querySelector(".showless_btn").style.display = "none";
    });

    return product;
  }
}
