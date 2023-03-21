import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../Styles/Trending.css";
import { AiFillCaretLeft, AiFillCaretRight } from "react-icons/ai";
import { useState } from "react";
import { useEffect } from "react";
import { Heading, Text } from "@chakra-ui/react";
import Products from "../Pages/Products";

let slidesToShow = 5;
const PreviousBtn = (props) => {
  // console.log(props);
  const { className, onClick, currentSlide } = props;
  return (
    <>
      {currentSlide !== 0 && (
        <div className={className} onClick={onClick}>
          <AiFillCaretLeft style={{ color: "blue", fontSize: "30px" }} />
        </div>
      )}
    </>
  );
};
const NextBtn = (props) => {
  const { className, onClick, slideCount, currentSlide } = props;
  // console.log(props);

  return (
    <>
      {currentSlide !== slideCount - slidesToShow && (
        <div className={className} onClick={onClick}>
          <AiFillCaretRight style={{ color: "blue", fontSize: "30px" }} />
        </div>
      )}
    </>
  );
};

const carouselProperties = {
  prevArrow: <PreviousBtn />,
  nextArrow: <NextBtn />,
  slidesToShow: slidesToShow,
  slidesToScroll: 2,
  infinite: false,
  // slidesToScroll={3}
  responsive: [
    {
      breakpoint: 426,
      settings: {
        slidesToShow: 1,
        centerMode: false,
      },
    },
    {
      breakpoint: 769,
      settings: {
        slidesToShow: 3,
        centerMode: false,
      },
    },
    {
      breakpoint: 1025,
      settings: {
        slidesToShow: 4,
        centerMode: false,
        slidesToScroll: 2,
      },
    },
  ],
};

const Trending = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const [data, setData] = useState([]);
  const updateWidth = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);
  useEffect(() => {
    fetch("http://localhost:5000/products")
      .then((response) => response.json())
      .then((json) => {
        setData(json.products);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  console.log(data);
  if (width <= 426) {
    slidesToShow = 1;
  } else if (width > 426 && width <= 769) {
    slidesToShow = 3;
  } else if (width > 769 && width <= 1025) {
    slidesToShow = 4;
  } else {
    slidesToShow = 5;
  }

  return (
    <>
      <h1 className="font text-4xl text-center pt-15 font-bold tracking-tight text-[#4299e1] sm:text-5xl">
        Our Trending Products
      </h1>{" "}
      <br />
      <div
        key={Math.random + Math.random}
        style={{ display: "block", margin: "auto", width: "90%" }}
        className="carousel "
      >
        {/* <h1>Basic carousel</h1> */}
        <Slider {...carouselProperties}>
          {data.map((item) => (
            <Card item={item.imgUrl} name={item.name} price={item.rate} />
          ))}
        </Slider>
      </div>
    </>
  );
};

const Card = ({ item, name, price }) => {
  return (
    <div
      key={Math.random + Math.random}
      className="cards"
      style={{ textAlign: "center" }}
    >
      <img
        className="multi__image"
        src={item}
        alt=""
        style={{
          width: "100%",
          height: "170px",
          objectFit: "contain",
          marginBottom: "10px",
          // border: '2px solid red'
        }}
      />
      <h3 className="card">{name}</h3>
      <h4 className="card2"> Price from {price}</h4>
    </div>
  );
};

export default Trending;
