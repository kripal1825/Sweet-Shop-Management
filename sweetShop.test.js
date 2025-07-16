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

