import React from "react";
import Navbar from "./Navbar";
import header__logo from "C:\\Users\\user\\Desktop\\wow\\src\\assets\\header__logo.svg";
import profile__img from "C:\\Users\\user\\Desktop\\wow\\src\\assets\\header__profile-img.svg";
import basket from "C:\\Users\\user\\Desktop\\wow\\src\\assets\\header__basket.svg";
import search_icon from "C:\\Users\\user\\Desktop\\wow\\src\\assets\\input-search__btn.svg";
import { useNavigate, useParams } from "react-router-dom";

const Header__wrapper = () => {
  const navigate = useNavigate();
  const link = window.location.href;
  console.log(link);
  return (
    <div
      style={
        link === "http://localhost:3000/"
          ? {
              background: "rgba(255, 255, 255, 0)",
              position: "absolute",
              top: "0",
            }
          : { background: "#0c1016" }
      }
      className="wrapper__bg"
    >
      <div className="header__wrapper">
        <div className="header__logo logo">
          <div onClick={() => navigate("/")} className="logo__image">
            <img src={header__logo} alt="#" />
          </div>
          <div className="logo__title">
            <h2>
              boost
              <span className="word-other">4</span>
              gold
            </h2>
          </div>
        </div>
        <Navbar />

        <div className="header__controls controls">
          <div className="controls__inputs">
            <input
              className="controls-input input"
              type="text"
              placeholder="Search"
            />
            <div className="input-search__btn">
              <img src={search_icon} alt="" />
            </div>
          </div>

          <div className="controls__select select">
            <select className="select__options" name="" id="">
              <option className="select__option" value="GOLD">
                GOLD
              </option>
              <option className="select__option" value="GOLD">
                GOLD
              </option>
              <option className="select__option" value="GOLD">
                GOLD
              </option>
            </select>
          </div>

          <div className="controls__basket basket">
            <img className="basket-img" src={basket} alt="#" />
          </div>
          <div className="controls__profile profile">
            <div className="profile__img">
              <img className="profile-img" src={profile__img} alt="#" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header__wrapper;
