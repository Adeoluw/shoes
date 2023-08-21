import React from 'react'
import Redshoe1 from "../image/red_shoes1.png"
import Redshoe2 from "../image/red_shoes2.png"
import Redshoe3 from "../image/red_shoes3.png"
import Redshoe4 from "../image/red_shoes4.png"

const About = () => {

    const [currentProjection, setCurrentProjection] = React.useState(Redshoe1);

    function toRedshoesOne(){
        setCurrentProjection(Redshoe1)
    }

    function toRedshoesTwo() {
        setCurrentProjection(Redshoe2)
    }

    function toRedshoesThree() {
        setCurrentProjection(Redshoe3)
    }

    function toRedshoesFour() {
        setCurrentProjection(Redshoe4)
    }
  return (
    <div className="about-con" id="about">
      <h1>ABOUT</h1>
      <div className="about-section">
        <div className="image-display">
          <div className="image-profiles">
            <div className="img-con" onClick={toRedshoesOne}>
              <img src={Redshoe1} alt="" />
            </div>
            <div className="img-con" onClick={toRedshoesTwo}>
              <img src={Redshoe2} alt="" />
            </div>
            <div className="img-con" onClick={toRedshoesThree}>
              <img src={Redshoe3} alt="" />
            </div>
            <div className="img-con" onClick={toRedshoesFour}>
              <img src={Redshoe4} alt="" />
            </div>
          </div>
          <div className="image-projection">
            <img src={currentProjection} alt="" />
          </div>
        </div>
        <div className="about-text">
          <p>
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classical Latin literature from 45 BC,
            making it over 2000 years old. Richard McClintock, a Latin professor
            at Hampden-Sydney College in Virginia, looked up one of the more
            obscure Latin words, consectetur, from a Lorem Ipsum passage, and
            going through the cites of the word in classical literature,
            discovered the undoubtable source. Lorem Ipsum comes from sections
            1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes
            of Good and Evil) by Cicero, written in 45 BC. This book is a
            treatise on the theory of ethics, very popular during the
            Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit
            amet..", comes from a line in section 1.10.32. The standard chunk of
            Lorem Ipsum used since the 1500s is reproduced below for those
            interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et
            Malorum" by Cicero are also reproduced in their exact original form,
            accompanied by English versions from the 1914 translation by H.
            Rackham.
          </p>
        </div>
      </div>
      <div className="about-button-con">
        <button className="about-button">Shop now</button>
      </div>
    </div>
  );
}

export default About
