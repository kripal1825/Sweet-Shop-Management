# Sweet Shop Management System


A simple inventory management system for a sweet shop, built using **JavaScript** with **Test-Driven Development (TDD)**. It supports adding, deleting, viewing, searching, sorting, purchasing, and restocking sweets.



## Features

- Add new sweets with unique ID, name, category, price, and quantity.
- Delete sweets by ID.
- View all sweets currently in inventory.
- Search sweets by:
  - Name (partial match)
  - Category (exact match)
  - Price range
- Sort sweets by:
  - Name (A-Z)
  - Price (low to high)
  - Quantity (high to low)
- Purchase sweets (decreases stock).
- Restock sweets (increases stock).
- Robust error handling for invalid operations.



## Test-Driven Development

All features are developed using **TDD** with **Jest**.  
Tests are located in `sweetShop.test.js`.



## Setup & Run

### 1. Clone the repo
```bash
git clone https://github.com/your-username/sweet-shop-management.git
cd sweet-shop-management
