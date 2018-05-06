interface CartItem {
  name: string;
  price: number;
  qty: number;
}

interface CartAPI {
  length: number;
  total: number;
  addItem(item: CartItem): CartAPI;
  add(name: string, price: number, qty?: number): CartAPI;
}

export function cashier(): CartAPI {
  var items: CartItem[] = [];

  return {
    get length() {
      return items.reduce((acc, item: CartItem) => {
        const { qty = 0 } = item || {};
        return acc + qty;
      }, 0);
    },
    get total() {
      return items.reduce((acc, item: CartItem) => {
        const { price = 0, qty = 0 } = item || {};
        return acc + price * qty;
      }, 0);
    },
    add(name: string, price: number, qty: number = 1): CartAPI {
      items.push({ name, price, qty });
      return this;
    },
    addItem(item: CartItem): CartAPI {
      items.push(item);
      return this;
    }
  };

  // function add(name: string, price: number, qty: number = 1): CartAPI {
  //   items.push({ name, price, qty });
  //   return this;
  // }

  // function addItem(item: CartItem): CartAPI {
  //   items.push(item);
  //   return this;
  // }

  function countQuantity(): number {
    return items.reduce((acc, item: CartItem) => {
      const { qty = 0 } = item || {};
      return acc + qty;
    }, 0);
  }

  function calculate(): number {
    return items.reduce((acc, item: CartItem) => {
      const { price = 0, qty = 0 } = item || {};
      return acc + price * qty;
    }, 0);
  }
}
