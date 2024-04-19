import React, { useState } from "react";
import { RiMenu2Fill } from "react-icons/ri";
import { BsTelephone } from "react-icons/bs";

const TopHeader = () => {
  let link = ["Category", "Products", "Pages", "Blog", "Elements"];
  let links = link?.map((el, inx) => (
    <li key={inx}>
      <select name="" id="">
        <option value={el}>{el}</option>
      </select>
    </li>
  ));
  let [menu, setMenu] = useState(false);
  return (
    <section className="top__header">
      <div className="top__header__content container">
        <RiMenu2Fill className="menu" onClick={() => setMenu(!menu)} />
        <ul className={menu ? "navbar links" : "links"}>
          <li>
            <a href="#">Home</a>
          </li>
          {links}
        </ul>
        <div className="tel">
          <BsTelephone />
          <span>+123 ( 456 ) ( 7890 )</span>
        </div>
      </div>
    </section>
  );
};

export default TopHeader;
