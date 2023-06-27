import Controller from '@ember/controller';

export default class CartController extends Controller {
  get subtotal() {
    return this.model.reduce((acc, item) => {
      return acc + item.price;
    }, 0);
  }
  get tax() {
    return (0.07 * this.subtotal).toFixed(2);
  }
  get total() {
    return (parseFloat(this.subtotal) + parseFloat(this.tax)).toFixed(2);
  }
}
