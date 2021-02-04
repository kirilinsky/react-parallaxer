import React from "react";
import { Parallax } from "react-parallax";
import image1 from "./assets/1.jpg";
import image2 from "./assets/2.jpg";
import image3 from "./assets/3.jpg";

function App() {
  return (
    <div className="App">
      <Parallax bgImage={image1} strength={500}>
        <div className="wrap">
          <div className="content">
            2 Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor
            amet provident asperiores beatae minus quod totam eligendi hic
            similique magni mollitia veritatis obcaecati quam facere iure,
            repellendus nostrum nesciunt optio!
          </div>
        </div>
      </Parallax>
      <Parallax bgImage={image2} blur={{ min: -1, max: 12 }}>
        <div className="wrap">
          <div className="content">
            3 Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor
            amet provident asperiores beatae minus quod totam eligendi hic
            similique magni mollitia veritatis obcaecati quam facere iure,
            repellendus nostrum nesciunt optio!
          </div>
        </div>
      </Parallax>
      <Parallax bgImage={image3} strength={-130}>
        <div className="wrap">
          <div className="content">
            3 Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor
            amet provident asperiores beatae minus quod totam eligendi hic
            similique magni mollitia veritatis obcaecati quam facere iure,
            repellendus nostrum nesciunt optio!
          </div>
        </div>
      </Parallax>
      <div className="wrap">s</div>
    </div>
  );
}

export default App;
