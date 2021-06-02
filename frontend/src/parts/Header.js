import React from "react";
import BrandIcon from "parts/IconText";
import Button from "elements/Button/Button";
import Fade from "react-reveal/Fade";

import IconKerangjang from "assets/images/icon/icon_keranjang.svg";

export default function Header(props) {
  if (props.isCentered) {
    return (
      <Fade>
        <header className="spacing-sm">
          <div className="container">
            <nav className="navbar navba-expand-lg">
              <Button className="brand-text-icon mx-auto" href="/" type="link">
                GRH
              </Button>
            </nav>
          </div>
        </header>
      </Fade>
    );
  }

  return (
    <Fade>
      <header className="spacing-sm">
        <div className="container">
          <nav className="navbar">
            <div className="container-fluid">
              <BrandIcon />
              <form action="" className="d-flex">
                <input type="search" className="form-control me-2" placeholder="Search" aria-label="Search" />
                <Button className="btn btn-outline-secondary" type="submit">
                  Search
                </Button>
              </form>
              <Button className="btn" type="link" href="/cart">
                <img src={IconKerangjang} alt="" />
              </Button>
            </div>
          </nav>
        </div>
      </header>
    </Fade>
  );
}
