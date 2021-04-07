import { Link, useLocation } from "react-router-dom";

import "./style.css";

const Home = () => {
  return (
    <div className="home">
      <div className="title">
        <h1>
          <p>Diego Nonato</p>
          <p>Programador Web</p>
        </h1>
        <Link to="about">
          <button>Saiba Mais</button>
        </Link>
      </div>
      <div className="person">
        <img
          src={`${process.env.PUBLIC_URL}/background.jpg`}
          alt="person picture"
        />
      </div> 
    </div>
  );
};

export default Home;
