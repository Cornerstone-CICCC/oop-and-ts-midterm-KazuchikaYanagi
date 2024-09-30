import { Component } from "../common/Component.js";

export class Header extends Component {
  render() {
    const header = document.createElement("header");
    header.innerHTML = `
        <div id="logo">
           <a href="#"><img src="../img/ShopBuy_nobg.svg"/></a>
        </div>
        <nav class="top_nav">
           <menu>
              <li class="cart"><a href="#cartlist_container"><img src="../img/shopping-cart.svg"></a></li>
              <li class="dark_mode">
                <a href="#">
                  <img src="../img/sun.svg" class="sun" />
                  <img src="../img/moon.svg" class="moon" />
                </a>
              </li>
           </menu>
        </nav>

        
        `;

    header.querySelector(".cart").addEventListener("click", function () {
      document.querySelector("aside").style.display = "block";
    });

    header
      .querySelector(".dark_mode .sun")
      .addEventListener("click", function () {
        document.querySelector("main").classList.add("dark");
        document.querySelector("main").classList.remove("morning");
        header.querySelector(".sun").style.display = "none";
        header.querySelector(".moon").style.display = "block";
        header.style.background = "rgba(0, 0, 0, 0.5)";
        header.style.backdropFilter = "blur(10px)";
        document.querySelector("aside").classList.remove("morning_aside");
        document.querySelector("aside").classList.add("dark_aside");
      });

    header
      .querySelector(".dark_mode .moon")
      .addEventListener("click", function () {
        document.querySelector("main").classList.remove("dark");
        document.querySelector("main").classList.add("morning");
        header.querySelector(".sun").style.display = "block";
        header.querySelector(".moon").style.display = "none";
        header.style.background = "rgba(255, 255, 255, 0.1)";
        header.style.backdropFilter = "blur(10px)";
        document.querySelector("aside").classList.add("morning_aside");
        document.querySelector("aside").classList.remove("dark_aside");
      });
    return header;
  }
}
