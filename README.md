# 🧪 SauceDemo E2E Test Suite (Playwright)

This repository contains a comprehensive **End-to-End Testing Suite** for the [SauceDemo](https://www.saucedemo.com) application, built using **Playwright**.

🔗 Live App: [https://www.saucedemo.com](https://www.saucedemo.com)
🛠️ Tech Stack: Playwright • Node.js • JavaScript

---

## 🚀 Purpose

This project was created as a structured, hands-on implementation of **Playwright E2E testing best practices**. It simulates a full user journey through the SauceDemo application, covering login, inventory navigation, cart management, and checkout flow.

✅ While SauceDemo is a public demo app used for practice, this suite showcases my ability to:

* Design maintainable E2E test architectures
* Use reusable utility functions
* Write data-driven tests
* Handle selectors, flows, and test assertions
* Structure real-world QA automation suites

> 🧠 **Note:** This project represents my foundational proficiency in test automation. I am currently applying these skills to real-world or custom-built applications for deeper portfolio impact.

---

## 📁 Folder Structure
saucedemo-e2e/
├── tests/
│ ├── login.spec.js # Login test cases
│ ├── inventory.spec.js # Product page validations
│ ├── cart.spec.js # Cart interaction tests
│ └── checkout.spec.js # Checkout flow coverage
│
├── utils/
│ ├── login.js # Reusable login helper
│ └── testData.js # Test user data (valid, invalid, locked)
│
├── playwright.config.js # Playwright test runner config
├── package.json
└── README.md


---

## 🧪 Test Coverage

| Module     | Test Cases Covered                                                  |
|------------|---------------------------------------------------------------------|
| Login      | Valid login, Invalid login, Locked-out user                        |
| Inventory  | Product list rendering, Name/price visibility, UI layout checks     |
| Cart       | Add/remove items, Cart badge, Cart persistence                      |
| Checkout   | Form validation, Price summary, Successful checkout confirmation    |

---

## 🛠 Setup Instructions

### 1. Clone this repo
```bash
git clone https://github.com/your-username/saucedemo-e2e.git
cd saucedemo-e2e

### 2. Install dependencies
```bash
npm install
npx playwright install

### 3. Run all tests
```bash
npx playwright test

### 4. View report
```bash
npx playwright show-report

##💡 Key Features
✅ Reusable login utility with dynamic credentials

✅ Data-driven test structure

✅ Parallel browser testing (configurable)

✅ Automatic screenshots, traces, and video on failure

✅ Clean and modular file organization

## 📌 Next Steps
This suite lays the foundation for robust E2E testing skills. I am currently applying Playwright to:

Real-world or custom applications (e.g., to-do apps, ecommerce flows)

Responsive and mobile device testing

CI/CD pipelines (GitHub Actions)

API mocking and visual regression testing

### 🧑‍💻 Author
Rebecca Shirievo
LinkedIn • GitHub

## 📝 License
This project is for educational and portfolio purposes only. SauceDemo is owned by Sauce Labs.