export class CartContext {
  static idCounter = 0;

  constructor() {
    this.cart = [];
    this.listeners = [];
  }

  getProduct() {
    return this.cart;
  }

  totalPrice() {
    this.total.reduce((cur, sum) => {
      console.log((sum += cur));
      return (sum += cur);
    }, 0);
  }

  addProduct(product) {
    const foundItem = this.cart.find((el) => {
      return product.id == el.product.id;
    });
    // console.log(foundItem);
    // foundItem.map((el) => console.log(el));
    if (!foundItem) {
      this.cart.push({
        product,
        quantity: 1,
        id: CartContext.idCounter++,
        showMore: false,
      });
    } else {
      console.log(foundItem);
      this.cart = this.cart.map((el) =>
        foundItem.product.id === el.product.id
          ? { ...el, quantity: el.quantity + 1 }
          : el
      );
      console.log(this.cart);
    }

    this.notifyListeners();
  }

  incrementQuantity(id) {
    this.cart = this.cart.map((el) =>
      el.id === id ? { ...el, quantity: el.quantity + 1 } : el
    );
    this.notifyListeners();
  }

  decrementQuantity(id) {
    this.cart = this.cart.map((el) =>
      el.id === id && el.quantity > 1
        ? { ...el, quantity: el.quantity - 1 }
        : el
    );
    this.notifyListeners();
  }

  removeProduct(id) {
    this.cart = this.cart.filter((el) => el.id !== id);
    this.notifyListeners();
  }

  openDescription(id) {
    this.cart = this.cart.map((el) =>
      el.id === id ? { ...el, showMore: !el.showMore } : el
    );
    this.notifyListeners();
  }

  subscribe(listener) {
    this.listeners.push(listener);
    console.log(listener);
  }

  notifyListeners() {
    this.listeners.forEach((listener) => listener(this.cart));
  }
}
