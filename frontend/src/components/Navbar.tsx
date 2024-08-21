import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import "../styles/Navbar.css";

const Navbar: React.FC = () => {
  const { totalQuantity } = useCart();

  return (
    <nav className="navbar">
      <Link to="/" className="logo">
        Coffee Shop
      </Link>
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/order-history">Order History</Link>

        <Link to="/cart" className="cart-link">
          <i className="fas fa-shopping-cart"></i>
          {totalQuantity > 0 && (
            <span className="cart-count">{totalQuantity}</span>
          )}
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
