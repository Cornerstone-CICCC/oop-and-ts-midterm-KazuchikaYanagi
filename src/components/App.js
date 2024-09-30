import { Component } from "../common/Component.js";
import { Header } from "./Header.js";
import { ProductList } from "../components/ProductList.js";
import { CartList } from "../components/CartList.js";

export class App extends Component {
  render() {
    const appContainer = document.createElement("div");
    appContainer.className = "container";
    appContainer.insertAdjacentHTML(
      "afterbegin",
      `
        <div class="header_wrapper"></div>
        <div class="content_wrapper">
           <main>
              <h1>Welcome to ShopBuy 😎</h1>
           </main>
           <aside id="cartlist_container" class="morning_aside"></aside>
        </div>
        <div class="footer_wrapper"></div>
      `
    );

    // Create instance and render
    const header = new Header().render();
    const productList = new ProductList({
      cartContext: this.props.cartContext,
    });
    const cartList = new CartList({
      cartContext: this.props.cartContext,
    }).render();

    // Insert html into DOM
    appContainer.querySelector(".header_wrapper").appendChild(header);
    appContainer.querySelector("aside").appendChild(cartList);

    productList.mount(appContainer.querySelector("main"));
    // cartList.mount()

    return appContainer;
  }
}
