class SweetShop {
  constructor() {
    this.inventory = new Map(); // key: sweet ID, value: sweet object
  }

  addSweet(sweet) {
    if (this.inventory.has(sweet.id)) {
      throw new Error('Sweet with this ID already exists.');
    }
    this.inventory.set(sweet.id, sweet);
  }

  getAllSweets() {
    return Array.from(this.inventory.values());
  }

  deleteSweet(id) {
    if (!this.inventory.has(id)) {
      throw new Error('Sweet with this ID does not exist.');
    }
    this.inventory.delete(id);
  }

    searchByName(name) {
    return Array.from(this.inventory.values()).filter(sweet =>
      sweet.name.toLowerCase().includes(name.toLowerCase())
    );
  }

  searchByCategory(category) {
    return Array.from(this.inventory.values()).filter(sweet =>
      sweet.category.toLowerCase() === category.toLowerCase()
    );
  }

  searchByPriceRange(min, max) {
    return Array.from(this.inventory.values()).filter(sweet =>
      sweet.price >= min && sweet.price <= max
    );
  }

    sortByName() {
    return Array.from(this.inventory.values()).sort((a, b) =>
      a.name.localeCompare(b.name)
    );
  }

  sortByPrice() {
    return Array.from(this.inventory.values()).sort((a, b) => a.price - b.price);
  }

  sortByQuantity() {
    return Array.from(this.inventory.values()).sort((a, b) => b.quantity - a.quantity);
  }


}

module.exports = SweetShop;
