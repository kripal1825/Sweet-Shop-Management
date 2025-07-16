const SweetShop = require('./sweetShop');

describe('SweetShop - Add Sweet', () => {
  let shop;

  beforeEach(() => {
    shop = new SweetShop();
  });

  test('should add a new sweet to the inventory', () => {
    const sweet = {
      id: 1001,
      name: 'Kaju Katli',
      category: 'Nut-Based',
      price: 50,
      quantity: 20
    };

    shop.addSweet(sweet);
    const allSweets = shop.getAllSweets();

    expect(allSweets.length).toBe(1);
    expect(allSweets[0]).toEqual(sweet);
  });

  test('should not allow duplicate sweet IDs', () => {
    const sweet1 = {
      id: 1001,
      name: 'Kaju Katli',
      category: 'Nut-Based',
      price: 50,
      quantity: 20
    };

    const sweet2 = {
      id: 1001,
      name: 'Gulab Jamun',
      category: 'Milk-Based',
      price: 30,
      quantity: 10
    };

    shop.addSweet(sweet1);
    expect(() => shop.addSweet(sweet2)).toThrow('Sweet with this ID already exists.');
  });
});

describe('SweetShop - Delete Sweet', () => {
  let shop;

  beforeEach(() => {
    shop = new SweetShop();
    shop.addSweet({
      id: 1001,
      name: 'Kaju Katli',
      category: 'Nut-Based',
      price: 50,
      quantity: 20
    });
  });

  test('should delete a sweet by ID', () => {
    shop.deleteSweet(1001);
    const allSweets = shop.getAllSweets();
    expect(allSweets.length).toBe(0);
  });

  test('should throw error if trying to delete non-existent sweet', () => {
    expect(() => shop.deleteSweet(9999)).toThrow('Sweet with this ID does not exist.');
  });
});


describe('SweetShop - View Sweets', () => {
  let shop;

  beforeEach(() => {
    shop = new SweetShop();
    shop.addSweet({
      id: 1001,
      name: 'Kaju Katli',
      category: 'Nut-Based',
      price: 50,
      quantity: 20
    });
    shop.addSweet({
      id: 1002,
      name: 'Gajar Halwa',
      category: 'Vegetable-Based',
      price: 30,
      quantity: 15
    });
  });

  test('should return all sweets in the inventory', () => {
    const allSweets = shop.getAllSweets();
    expect(allSweets.length).toBe(2);
    expect(allSweets[0].name).toBe('Kaju Katli');
    expect(allSweets[1].name).toBe('Gajar Halwa');
  });
});

describe('SweetShop - Sort Sweets', () => {
  let shop;

  beforeEach(() => {
    shop = new SweetShop();
    shop.addSweet({ id: 1001, name: 'Gulab Jamun', category: 'Milk-Based', price: 20, quantity: 10 });
    shop.addSweet({ id: 1002, name: 'Kaju Katli', category: 'Nut-Based', price: 50, quantity: 5 });
    shop.addSweet({ id: 1003, name: 'Barfi', category: 'Milk-Based', price: 30, quantity: 20 });
  });

  test('should sort sweets by name A-Z', () => {
    const sorted = shop.sortByName();
    const names = sorted.map(s => s.name);
    expect(names).toEqual(['Barfi', 'Gulab Jamun', 'Kaju Katli']);
  });

  test('should sort sweets by price low to high', () => {
    const sorted = shop.sortByPrice();
    const prices = sorted.map(s => s.price);
    expect(prices).toEqual([20, 30, 50]);
  });

  test('should sort sweets by quantity high to low', () => {
    const sorted = shop.sortByQuantity();
    const quantities = sorted.map(s => s.quantity);
    expect(quantities).toEqual([20, 10, 5]);
  });
});


describe('SweetShop - Purchase Sweet', () => {
  let shop;

  beforeEach(() => {
    shop = new SweetShop();
    shop.addSweet({ id: 1001, name: 'Kaju Katli', category: 'Nut-Based', price: 50, quantity: 10 });
  });

  test('should reduce quantity after purchase', () => {
    shop.purchaseSweet(1001, 3);
    const sweet = shop.getAllSweets()[0];
    expect(sweet.quantity).toBe(7);
  });

  test('should throw error if sweet not found', () => {
    expect(() => shop.purchaseSweet(9999, 1)).toThrow('Sweet with this ID does not exist.');
  });

  test('should throw error if not enough stock', () => {
    expect(() => shop.purchaseSweet(1001, 20)).toThrow('Not enough stock available.');
  });
});

describe('SweetShop - Restock Sweet', () => {
  let shop;

  beforeEach(() => {
    shop = new SweetShop();
    shop.addSweet({ id: 1001, name: 'Kaju Katli', category: 'Nut-Based', price: 50, quantity: 10 });
  });

  test('should increase quantity after restocking', () => {
    shop.restockSweet(1001, 5);
    const sweet = shop.getAllSweets()[0];
    expect(sweet.quantity).toBe(15);
  });

  test('should throw error if sweet not found', () => {
    expect(() => shop.restockSweet(9999, 5)).toThrow('Sweet with this ID does not exist.');
  });
});
