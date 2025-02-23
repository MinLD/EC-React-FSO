import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import "./style.css";
import Slider from "react-slick";
import ProductItem from "../ProductItem/ProductItem";
function SliderCommon({
  data,
  isSliderProductItem = false,
  isSliderToShow = 1,
}) {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: isSliderToShow,
    slidesToScroll: 1,
    nextArrow: <IoIosArrowForward />,
    prevArrow: <IoIosArrowBack />,
  };

  return (
    <>
      <Slider {...settings}>
        {data?.map((i, k) => {
          return isSliderProductItem ? (
            <ProductItem
              name={i.name}
              price1={i.price}
              src={i.images[0]}
              isHomePages={false}
              srcPre={i.images[1]}
              details={i}
              isShowGrid
            />
          ) : (
            <img src={i} key={k} class="boxImage" />
          );
        })}
      </Slider>
    </>
  );
}

export default SliderCommon;
