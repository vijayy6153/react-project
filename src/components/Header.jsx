import React from "react";
import { NavLink } from "react-router-dom";
import logo from '@/assets/images/Logo-1.svg';

export default function Header() {
  return (
    <header className="z-3 position-relative w-100 py-2 py-lg-3">
      <div className="container-fluid d-flex justify-content-between align-items-center">
        <h1 className="logoIMG">
          <a href="/"><img src={logo} alt="Logo" /></a>
        </h1>

        <nav className="navbar navbar-expand-lg py-0">
          <button
            className="navbar-toggle d-flex d-lg-none flex-column hamBurger"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>

          <div className="collapse navbar-collapse py-2 py-lg-0" id="navbarSupportedContent">
            <ul className="navbar-nav w-100 align-items-center">
              <li className="nav-item my-2 my-lg-0 ms-0 ms-lg-3 acTive">
                <a className="nav-link py-2 px-3" href="/">Home</a>
              </li>
              <li className="nav-item my-2 my-lg-0 ms-0 ms-lg-3">
                <a className="nav-link py-2 px-3" href="/products">Products</a>
              </li>
              <li className="nav-item my-2 my-lg-0 ms-0 ms-lg-3">
                <a className="nav-link py-2 px-3" href="/use-cases">Use Cases</a>
              </li>
              <li className="nav-item my-2 my-lg-0 ms-0 ms-lg-3">
                <a className="nav-link py-2 px-3" href="/pricing">Pricing</a>
              </li>
              <li className="nav-item my-2 my-lg-0 ms-0 ms-lg-3">
                <a className="nav-link py-2 px-3" href="/contact">Contact</a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
}
