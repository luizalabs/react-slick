import React, { Component } from "react";
import Slider from "../src/slider";

export default class WithLinkInside extends Component {
  render() {
    var settings = {
      centerMode: true,
      className: "",
      dots: true,
      infinite: true
    };
    return (
      <div>
        <h2>With link inside</h2>
        <Slider {...settings}>
          <div>
            <a href="https://github.com/akiran/react-slick" target="_blank">
              <h3>1</h3>
            </a>
          </div>
          <div>
            <a href="https://github.com/akiran/react-slick" target="_blank">
              <h3>2</h3>
            </a>
          </div>
          <div>
            <a href="https://github.com/akiran/react-slick" target="_blank">
              <h3>3</h3>
            </a>
          </div>
          <div>
            <a href="https://github.com/akiran/react-slick" target="_blank">
              <h3>4</h3>
            </a>
          </div>
          <div>
            <a href="https://github.com/akiran/react-slick" target="_blank">
              <h3>5</h3>
            </a>
          </div>
          <div>
            <a href="https://github.com/akiran/react-slick" target="_blank">
              <h3>6</h3>
            </a>
          </div>
        </Slider>
      </div>
    );
  }
}
