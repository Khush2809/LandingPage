import React from "react";
import img1 from "./../Images/img1.jpg";
import img2 from "./../Images/img2.jpg";
import img3 from "./../Images/img3.jpg";
// import img4 from "./../Images/img4.jpg";
import img5 from "./../Images/img5.jpg";
import img6 from "./../Images/img6.jpg";
import img7 from "./../Images/img7.jpg";
import img8 from "./../Images/img8.jpg";
import img9 from "./../Images/img9.jpg";
import img10 from "./../Images/img10.jpg";
import img11 from "./../Images/img11.jpg";
import img12 from "./../Images/img12.jpg";
import img13 from "./../Images/img13.jpg";
import img14 from "./../Images/img14.jpg";
import img15 from "./../Images/img15.jpg";
import img16 from "./../Images/img16.jpg";
import img17 from "./../Images/img17.jpg";
import img18 from "./../Images/img18.jpg";
import img19 from "./../Images/img19.jpg";
import "./../css/Scrollbar.css";

const Scrollbar = () => {
  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      <marquee scrollamount="12" loop="infinite" scrolldelay="100">
        <img src={img1} alt="img1" className="scroll"></img>
        <img src={img2} alt="img2" className="scroll"></img>
        <img src={img3} alt="img3" className="scroll"></img>
        {/* <img src={img4} alt="img4" className="scroll"></img> */}
        <img src={img5} alt="img5" className="scroll"></img>
        <img src={img6} alt="img6" className="scroll"></img>
        <img src={img7} alt="img7" className="scroll"></img>
        <img src={img8} alt="img8" className="scroll"></img>
        <img src={img9} alt="img9" className="scroll"></img>
        <img src={img10} alt="img10" className="scroll"></img>
        <img src={img11} alt="img11" className="scroll"></img>
        <img src={img12} alt="img12" className="scroll"></img>
        <img src={img13} alt="img13" className="scroll"></img>
        <img src={img14} alt="img14" className="scroll"></img>
        <img src={img15} alt="img15" className="scroll"></img>
        <img src={img16} alt="img16" className="scroll"></img>
        <img src={img17} alt="img17" className="scroll"></img>
        <img src={img18} alt="img18" className="scroll"></img>
        <img src={img19} alt="img19" className="scroll"></img>
      </marquee>{" "}
    </div>
  );
};

export default Scrollbar;
// import React, { Component } from "react";
// import Slider from "react-slick";

// export default class Responsive extends Component {
//   render() {
//     var settings = {
//       dots: true,
//       infinite: true,
//       speed: 500,
//       slidesToShow: 4,
//       slidesToScroll: 4,
//       initialSlide: 0,
//       responsive: [
//         {
//           breakpoint: 1024,
//           settings: {
//             slidesToShow: 3,
//             slidesToScroll: 3,
//             infinite: true,
//             dots: true,
//           },
//         },
//         {
//           breakpoint: 600,
//           settings: {
//             slidesToShow: 2,
//             slidesToScroll: 2,
//             initialSlide: 2,
//           },
//         },
//         {
//           breakpoint: 480,
//           settings: {
//             slidesToShow: 1,
//             slidesToScroll: 1,
//           },
//         },
//       ],
//     };
//     return (
//       <div>
//         <h2> Responsive </h2>
//         <Slider
//           {...settings}
//           style={{
//             display: "flex",
//             flexDirection: "row",
//             backgroundColor: "pink",
//           }}
//         >
//           <div>
//             <h3>1</h3>
//           </div>
//           <div>
//             <h3>2</h3>
//           </div>
//           <div>
//             <h3>3</h3>
//           </div>
//           <div>
//             <h3>4</h3>
//           </div>
//           <div>
//             <h3>5</h3>
//           </div>
//           <div>
//             <h3>6</h3>
//           </div>
//           <div>
//             <h3>7</h3>
//           </div>
//           <div>
//             <h3>8</h3>
//           </div>
//         </Slider>
//       </div>
//     );
//   }
// }
