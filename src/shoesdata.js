import shoes1 from "./image/shoes1.png";
import shoes2 from "./image/shoes2.png";
import shoes3 from "./image/shoes3.png";
import shoes4 from "./image/shoes4.png";
import shoes5 from "./image/shoes5.png";
import shoes6 from "./image/shoes6.png";
import shoes7 from "./image/shoes7.png";
import shoes8 from "./image/shoes8.png";
import { FaStar, FaStarHalf } from "react-icons/fa";



const shoes = [
  {
    id: 1,
    img: shoes1,
    price: "$200",
    rating: [
      <FaStar className="star-icon-filled" />,
      <FaStar className="star-icon-filled" />,
      <FaStar className="star-icon-filled" />,
      <FaStar className="star-icon-filled" />,
      <FaStar className="star-icon-filled" />,
    ],
  },

  {
    id: 2,
    img: shoes2,
    price: "$200",
    rating: [
      <FaStar className="star-icon-filled" />,
      <FaStar className="star-icon-filled" />,
      <FaStar className="star-icon-filled" />,
      <FaStar className="star-icon-filled" />,
      <FaStarHalf className="star-icon-filled" />,
    ],
  },

  {
    id: 3,
    img: shoes3,
    price: "$200",
    rating: [
      <FaStar className="star-icon-filled" />,
      <FaStar className="star-icon-filled" />,
      <FaStar className="star-icon-filled" />,
      <FaStarHalf className="star-icon-filled" />,
      <FaStar className="star-icon-empty" />,
    ],
  },

  {
    id: 4,
    img: shoes4,
    price: "$200",
    rating: [
      <FaStar className="star-icon-filled" />,
      <FaStar className="star-icon-filled" />,
      <FaStar className="star-icon-filled" />,
      <FaStar className="star-icon-filled" />,
      <FaStar className="star-icon-empty" />,
    ],
  },

  {
    id: 5,
    img: shoes5,
    price: "$200",
    rating: [
      <FaStar className="star-icon-filled" />,
      <FaStar className="star-icon-filled" />,
      <FaStar className="star-icon-filled" />,
      <FaStar className="star-icon-filled" />,
      <FaStar className="star-icon-filled" />,
    ],
  },

  {
    id: 6,
    img: shoes6,
    price: "$200",
    rating: [
      <FaStar className="star-icon-filled" />,
      <FaStar className="star-icon-filled" />,
      <FaStar className="star-icon-filled" />,
      <FaStar className="star-icon-filled" />,
      <FaStarHalf className="star-icon-filled" />,
    ],
  },

  {
    id: 7,
    img: shoes7,
    price: "$200",
    rating: [
      <FaStar className="star-icon-filled" />,
      <FaStar className="star-icon-filled" />,
      <FaStar className="star-icon-filled" />,
      <FaStar className="star-icon-empty" />,
      <FaStar className="star-icon-empty" />,
    ],
  },

  {
    id: 8,
    img: shoes8,
    price: "$200",
    rating: [
      <FaStar className="star-icon-filled" />,
      <FaStar className="star-icon-filled" />,
      <FaStar className="star-icon-filled" />,
      <FaStar className="star-icon-filled" />,
      <FaStarHalf className="star-icon-filled" />,
    ],
  },
];


export default shoes