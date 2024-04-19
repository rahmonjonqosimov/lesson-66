import React from "react";
import logo from "../../../assets/images/Header.logo.svg";
import { IoSearchOutline, IoCartOutline } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa";
import { IoMdHeartEmpty } from "react-icons/io";

const BottomHeader = () => {
  return (
    <section className="bottom__header">
      <div className="container">
        <div className="bottom__header__content">
          <a href="#">
            <img src={logo} className="logo" alt="Logo" />
          </a>
          <form>
            <input type="search" placeholder="Search For items..." />
            <select name="" id="">
              <option value="">All Categories</option>
            </select>
            <button>
              <IoSearchOutline />
            </button>
          </form>
          <ul>
            <li>
              <FaRegUser />
              Account
            </li>
            <li>
              <IoMdHeartEmpty />
              Wishlist
            </li>
            <li>
              <IoCartOutline /> Cart
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default BottomHeader;
