import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

export default function Footer() {
  return (
    <footer className="footer bg-light text-dark py-4">
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <h5 className="text-uppercase fw-bold">MDCOM</h5>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>

          {/* Contact Info */}
          <div className="col-md-3">
            <h5 className="fw-bold">Contact Us</h5>
            <p>Email: info@example.com</p>
            <p>Phone: +91 1234567890</p>
            <p>Address: 123 Saligramam, Chennai, Tamil Nadu</p>
          </div>

          {/* Useful Links */}
          <div className="col-md-3">
            <h5 className="fw-bold">Useful Links</h5>
            <ul className="list-unstyled">
              <li><a href="#" className="text-dark text-decoration-none">Shop All</a></li>
              <li><a href="#" className="text-dark text-decoration-none">Tempered Glass</a></li>
              <li><a href="#" className="text-dark text-decoration-none">Back-Cover</a></li>
              <li><a href="#" className="text-dark text-decoration-none">About Us</a></li>
            </ul>
          </div>

          {/* Social Media Icons */}
          <div className="col-md-3">
            <h5 className="fw-bold">Follow Us</h5>
            <div className="d-flex gap-3">
              <a ><i className="bi bi-whatsapp"></i>whatsapp</a>
              <a ><i className="bi bi-facebook"></i>facebook</a>
              <a ><i className="bi bi-instagram"></i>instagram</a>
              <a ><i className="bi bi-linkedin"></i>linkedin</a>
              <a ><i className="bi bi-tiktok"></i>tiktok</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}