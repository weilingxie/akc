import React from "react";

const Header = ({ address, email, phone, facebook, youtube }) => {
  return (
    <header id="header" className="header">
      <div className="header-container">
        <section>
          <div className="header-item header-address">
            <i className="fas fa-map-marked fa-2x"></i>
            <p className="header-address-text">{address}</p>
          </div>
        </section>
        <section>
          <div className="header-item header-email">
            <i className="fas fa-envelope fa-2x"></i>
            <p className="header-email-text">{email}</p>
          </div>
          <div className="header-item header-phone">
            <i className="fas fa-phone-square fa-2x"></i>
            <p className="header-phone-text">{phone}</p>
          </div>
          <div className="header-item header-social-media">
            <a href={facebook}>
              <i className="fab fa-facebook-square fa-2x"></i>
            </a>
            <a href={youtube}>
              <i className="fab fa-youtube fa-2x"></i>
            </a>
          </div>
        </section>
      </div>
    </header>
  );
};

export default Header;
