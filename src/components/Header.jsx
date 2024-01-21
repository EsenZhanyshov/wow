import React from "react";
import Navbar from "./Navbar";
import header__logo from "C:\\Users\\user\\Desktop\\wow\\src\\assets\\header__logo.svg";
import profile__img from "C:\\Users\\user\\Desktop\\wow\\src\\assets\\header__profile-img.svg";
import basket from "C:\\Users\\user\\Desktop\\wow\\src\\assets\\header__basket.svg";
import search_icon from "C:\\Users\\user\\Desktop\\wow\\src\\assets\\input-search__btn.svg";

const Header = () => {
  return (
    <header className="header">
      <div className="wrapper">
        <div className="header__wrapper">
          <div className="header__logo logo">
            <div className="logo__image">
              <img src={header__logo} alt="#" />
            </div>
            <div className="logo__title">
              <h2>
                boost<span className="word-other">4</span>gold
              </h2>
            </div>
          </div>
          <Navbar />

          <div class="header__controls controls">
            <div class="controls__inputs">
              <input
                class="controls-input input"
                type="text"
                placeholder="Search"
              />
              <div class="input-search__btn">
                <img src={search_icon} alt="" />
              </div>
            </div>

            <div class="controls__select select">
              <select class="select__options" name="" id="">
                <option class="select__option" value="GOLD">
                  GOLD
                </option>
                <option class="select__option" value="GOLD">
                  GOLD
                </option>
                <option class="select__option" value="GOLD">
                  GOLD
                </option>
              </select>
            </div>

            <div class="controls__basket basket">
              <img class="basket-img" src={basket} alt="#" />
            </div>
            <div class="controls__profile profile">
              <div class="profile__img">
                <img class="profile-img" src={profile__img} alt="#" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
