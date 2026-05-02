<p align="center">
  <img src="./public/images/logo/logo.png" width="100"/>
</p>

# My Shop : E-Commerce Platform
[![React](https://img.shields.io/badge/React-18-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![Recoil](https://img.shields.io/badge/Recoil-0.7-3578E5?style=for-the-badge&logo=react&logoColor=white)](https://recoiljs.org/)
[![React Router](https://img.shields.io/badge/React_Router-6-CA4245?style=for-the-badge&logo=reactrouter&logoColor=white)](https://reactrouter.com/)
[![CSS](https://img.shields.io/badge/CSS3-Styles-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![MUI Icons](https://img.shields.io/badge/MUI_Icons-5-007FFF?style=for-the-badge&logo=mui&logoColor=white)](https://mui.com/material-ui/material-icons/)

**My Shop** is a fully responsive, modern and feature-rich front-end e-commerce application built with React and Recoil. It provides users with a seamless shopping experience from browsing products to managing a wishlist, cart and authentication

<p align="center">
    <a href="https://ecommerce-listing-my-shop.vercel.app/">
      <img src="https://img.shields.io/badge/🚀 Live_Demo_vercel-View_Live-green?style=for-the-badge" />
    </a>
      <a href="https://ecommerce-listing-my-shop.netlify.app/">
      <img src="https://img.shields.io/badge/🚀 Mirror_netlify-View_Live-green?style=for-the-badge" />
    </a>
</p>

---

## 🌟 Key Features

- **🛍️ Product Listing & Filtering**: Browse through a wide variety of products with multi-level filtering capabilities (by category, price range and search terms) powered by Recoil
- **📱 Fully Responsive UI**: Optimized for all screens. Adapts perfectly from large 4K desktop monitors down to mobile phones using CSS Grid and Flexbox
- **🔒 Authentication (Split-Screen Design)**: Premium login and multi-step signup interfaces featuring a beautiful, branded split-screen UI on desktop
- **❤️ Wishlist & Cart Management**: Easily save products for later or add them to your cart. Cart calculates totals dynamically
- **💎 Rich Animations & Micro-Interactions**: Features pill-shaped category buttons, animated dropdowns, soft shadows and gradient buttons to provide a premium look and feel
- **🚧 Feature Stubs**: Includes perfectly designed "Under Construction" placeholder pages for future scalability (e.g., Profile, Notifications, Orders, Coupons etc.).

---

## 🛠️ Technology Stack

- **Frontend Framework**: React.js
- **State Management**: Recoil (for highly performant, atomic state updates)
- **Routing**: React Router v6
- **Styling**: Pure CSS (BEM-inspired naming convention, responsive media queries, CSS variables)
- **Icons**: Material-UI (MUI) Icons

---

## 🚀 Getting Started

Follow these instructions to set up the project locally on your machine

### Prerequisites

Ensure you have the following installed:
- [Node.js](https://nodejs.org/) (v16.x or higher)
- npm or yarn

### Installation

1. **Clone the repository** (if applicable):
   ```bash
   git clone https://github.com/suryanshsingh07/Ecommerce-Product-Listing.git
   cd Ecommerce-Product-Listing
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the development server**:
   ```bash
   npm start
   ```
   *The app will be available at `http://localhost:3000`*

---

## 📂 Project Structure

```text
src/
├── components/          # Reusable UI components
│   ├── cart/            # Cart screen and logic
│   ├── Home/            # Header, Footer, Product Grid, Categories
│   ├── Login/           # Login card component
│   ├── Signup/          # Multi-step signup form
│   ├── product/         # Detailed product view
│   ├── profile/         # Profile stub
│   ├── wishlist/        # Wishlist management
│   └── ImageWithLoader  # Custom image component with loading state
├── pages/               # Main page wrappers and CSS files
│   ├── home.jsx
│   ├── login.jsx
│   ├── signup.jsx
│   ├── features.css     # Shared CSS for "under construction" pages
│   └── product.js       # Dummy product JSON data
├── recoil/              # Recoil atoms for global state
│   ├── cartItem.js
│   ├── priceFilterAtom.js
│   ├── searchTextAtom.js
│   └── wishListitem.js
├── App.js               # Application routing
└── index.js             # React entry point
```

---

## 💡 State Management Architecture

This application leverages **Recoil** for global state. This avoids prop-drilling and keeps components decoupled

Key Atoms:
- `searchTextAtom`: Stores the active search query
- `activateFilter`: Stores the active category selection
- `priceFilterAtom`: Stores the active price range selection
- `wishListitem`: An array of product IDs that the user has liked
- `cartItem`: An array of product IDs added to the cart

---

## 🎨 Design System

- **Primary Colors**: Vibrant Blues (`#007BFF`, `#0044cc`)
- **Accent Colors**: Warm Oranges/Yellows (`#ff6b00`, `#ffb300`) for Call-to-Action buttons.
- **Typography**: `Poppins` (Google Fonts) for a modern, geometric and highly readable look
- **Layout**: Heavy reliance on CSS Flexbox and CSS Grid.

---

## 🔮 Future Roadmap (Coming Soon)

The following features are currently stubbed out and will be implemented in future phases:
- Backend Integration (Node.js/Express + MongoDB)
- Actual Authentication (JWT)
- Payment Gateway Integration (Stripe / Razorpay)
- User Profile Management & Order History Tracking
- Dedicated Notifications and Coupons engines

---

<p align="center">
  <a href="https://suryanshsingh.vercel.app/" target="_blank" rel="noopener"> Made by Suryansh Singh</a>
</p>
