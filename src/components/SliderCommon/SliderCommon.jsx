import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import "./style.css";
import Slider from "react-slick";
function SliderCommon({ data }) {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <IoIosArrowForward />,
    prevArrow: <IoIosArrowBack />,
  };

  return (
    <>
      <Slider {...settings}>
        {data.map((i, k) => {
          return <img src={i} key={k} class="boxImage" />;
        })}
      </Slider>
    </>
  );
}

export default SliderCommon;
