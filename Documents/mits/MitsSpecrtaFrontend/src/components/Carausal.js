import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../Styles/Carausal.css";
import { BiRightArrow } from "react-icons/bi";
import { AiFillCaretLeft, AiFillCaretRight } from "react-icons/ai";
// import { ArrowBackIos, ArrowForwardIos } '@mui/icons-material';
var data = [
  {
    imgsrc:
      "https://onemg.gumlet.io/a_ignore,w_899,h_200,c_fit,q_auto,f_auto/0c7480db-44af-43e6-ac94-d51d18a74a95.png",
  },
  {
    imgsrc:
      "https://onemg.gumlet.io/a_ignore,w_899,h_200,c_fit,q_auto,f_auto/97178d0a-1c2d-4d0d-849b-c10da9e345a6.png",
  },
  {
    imgsrc:
      "https://onemg.gumlet.io/a_ignore,w_899,h_200,c_fit,q_auto,f_auto/48077bcf-9650-4ef5-8b9c-e5b6b60c5e29.png",
  },
];
const PreviousBtn = (props) => {
  // console.log(props);
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <AiFillCaretLeft style={{ color: "blue", fontSize: "30px" }} />
    </div>
  );
};
const NextBtn = (props) => {
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <AiFillCaretRight style={{ color: "blue", fontSize: "30px" }} />
    </div>
  );
};

const Carausal = () => {
  return (
    <div className="carousel">
      {/* <h1>Basic carousel</h1> */}
      <Slider
        autoplay
        autoplaySpeed={2000}
        // dots
        initialSlide={2}
        infinite
        prevArrow={<PreviousBtn />}
        nextArrow={<NextBtn />}
        customPaging={(i) => {
          return (
            <div>
              <img
                src={data.imgsrc[i]}
                alt=""
                style={{
                  width: "50px",
                  height: "50px",
                  objectFit: "cover",
                  borderRadius: "10px",
                }}
              />
            </div>
          );
        }}
        dotsClass="slick-dots custom-indicator"
      >
        {data.map((item) => (
          <div>
            <img
              src={item.imgsrc}
              alt=""
              style={{ width: "100%", height: "60vh" }}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carausal;
