# Project Overview
---
# Testing Goals
1. Verify login behaviour (valid/invalid users)
2. Verify product list and details 
3. Test cart functionality
4. Test checkout flow
5. Validate logout and session handling

---
# Test Plan & Breakdown
1. Login Tests

login.spec.js
- valid login (standard_user)
- invalid login (wrong credentials)
- locked-out user

2. Inventory Tests

inventory.spec.js
- check that product list loads after login
- validate number of products displayed
- verify item names and prices

3. Cart Tests

cart.spec.js
- add items to cart
- remove item from cart
- check cart badge count

4. Checkout Flow

checkout.spec.js
- fill checkout form
- verify order summary
- finish purchase