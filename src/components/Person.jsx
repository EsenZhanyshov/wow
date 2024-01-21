import React from "react";
import personaj from "../assets/Товар.png";

const Person = () => {
  return (
    <div className="person">
      <div className="person__section1">
        <h3>BEST OFFERSS</h3>
        <p>
          For many years now, services have existed on the expanse of PC games
          to help players achieve goals, <br /> complete difficult tasks, gain
          titles and epic rewards. Boosting Services came from the most popular{" "}
          <br /> MMO{" "}
        </p>
        <div className="section1__filter">
          <div className="btn__bg">
            <button>filter one</button>
          </div>
          <div className="btn__bg">
            <button>filter one</button>
          </div>
          <div className="btn__bg">
            <button>filter one</button>
          </div>
          <div className="btn__bg">
            <button>filter one</button>
          </div>
          <div className="btn__bg">
            <button>filter one</button>
          </div>
          <div className="btn__bg">
            <button>filter one</button>
          </div>
          <div className="btn__bg">
            <button>filter one</button>
          </div>
          <div className="btn__bg">
            <button>filter one</button>
          </div>
          <div className="btn__bg">
            <button>filter one</button>
          </div>
          <div className="btn__bg">
            <button>filter one</button>
          </div>
        </div>
      </div>
      <div className="person__section2">
        <img src={personaj} alt="" />
        <img src={personaj} alt="" />
        <img src={personaj} alt="" />
        <img src={personaj} alt="" />
        <img src={personaj} alt="" />
        <img src={personaj} alt="" />
        <img src={personaj} alt="" />
        <img src={personaj} alt="" />
        <img src={personaj} alt="" />
        <img src={personaj} alt="" />
        <img src={personaj} alt="" />
        <img src={personaj} alt="" />
        <img src={personaj} alt="" />
        <img src={personaj} alt="" />
        <img src={personaj} alt="" />
        <img src={personaj} alt="" />
      </div>
      <div className="person__section3">
        <h3>GAMING BOOSTING SERVICE</h3>
        <p>
          For many years now, services have existed on the expanse of PC games
          to help players achieve goals, <br /> complete difficult tasks, gain
          titles and epic rewards. Boosting Services came from the most popular
          MMO <br /> games, where skilled players with their skills mined gold
          and sold it for real money. In the present realities <br />
          the popularity of boosting community has reached a high quality of
          providing help in the game and many <br /> performers work under
          strict rules, not violating customer requests, as well as completing
          the order <br /> within the stipulated time with a 100% guarantee from
          the store.
        </p>
      </div>
    </div>
  );
};

export default Person;
