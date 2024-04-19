import React from "react";
import { IoMdClose } from "react-icons/io";

const Hero = () => {
  let link = ["Shopping", "Iphone 15", "Macbook", "News", "Smart Watch"];
  let links = link?.map((el, inx) => (
    <li key={inx}>
      <IoMdClose /> {el}
    </li>
  ));
  return (
    <section
      className="hero"
      style={{
        background: `url(https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/macbookair-og-202402?wid=1200&hei=630&fmt=jpeg&qlt=95&.v=1707414684423) no-repeat center/cover`,
      }}
    >
      <div className="container">
        <div className="hero__content">
          <div className="text">
            <span>
              <h6>100%</h6> Organic Vegetables
            </span>
            <h2>The best way to stuff your wallet. </h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet
              reiciendis beatae consequuntur.
            </p>
            <form>
              <input
                required
                type="email"
                placeholder="Your emaill address"
                name="email"
                id="email"
              />
              <button>Subscribe</button>
            </form>
          </div>
          <ul>{links}</ul>
        </div>
      </div>
    </section>
  );
};

export default Hero;
