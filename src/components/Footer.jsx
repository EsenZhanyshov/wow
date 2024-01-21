import React from "react";
import social__links from "C:\\Users\\user\\Desktop\\wow\\src\\assets\\social__links.svg";
import paypal from "C:\\Users\\user\\Desktop\\wow\\src\\assets\\paypal.svg";
import Trast from "C:\\Users\\user\\Desktop\\wow\\src\\assets\\Trust.svg";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <footer class="footer">
      <div class="wrapper">
        <div class="footer__blocks">
          <div class="footer__block-1">
            <Link>
              <p>PRIVACY POLICY</p>
            </Link>
            <Link>
              <p>TERMS OF SERVICE</p>
            </Link>
            <Link>
              <p>REFUND POLICE</p>
            </Link>
          </div>

          <div class="footer__block-2">
            <Link>
              <p>HOW IT WORKS</p>
            </Link>
            <Link>
              <p>CONTACT US</p>
            </Link>
            <Link>
              <p>JOBS</p>
            </Link>
          </div>
          <div class="footer__block-3">
            <img src={social__links} alt="#" />
            <img src={paypal} alt="#" />
            <img src={Trast} alt="#" />
          </div>
        </div>
        <div class="footer__dev">
          <Link>
            <p>© boost4gold 2022</p>
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
