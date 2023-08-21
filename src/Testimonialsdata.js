import girl1 from "./image/girl_dp1.jpg"
import girl2 from "./image/gir_dp2.jpg"
import girl3 from "./image/gir_dp3.jpg"
import man1 from "./image/man_dp1.jpg"
import man2 from "./image/man_dp2.jpg"
import man3 from "./image/man_dp3.jpg"
import { FaStar, FaStarHalf } from "react-icons/fa";


const reviewsData = [
  {
    image: girl1,
    name: "Kaveesha Vidurangi",
    rating: [
      <FaStar className="star-icon-filled" />,
      <FaStar className="star-icon-filled" />,
      <FaStar className="star-icon-filled" />,
      <FaStarHalf className="star-icon-filled" />,
      <FaStar className="star-icon-empty" />,
    ],
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis, amet nesciunt voluptatem cum architecto ipsum vero nulla voluptatibus dolorum modi assumenda eum? Aliquid inventore velit ipsa repellat numquam atque dolores!",
  },
  {
    image: man1,
    name: "Sayuru Tharanga",
    rating: [
      <FaStar className="star-icon-filled" />,
      <FaStar className="star-icon-filled" />,
      <FaStar className="star-icon-filled" />,
      <FaStar className="star-icon-filled" />,
      <FaStar className="star-icon-filled" />,
    ],
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis, amet nesciunt voluptatem cum architecto ipsum vero nulla voluptatibus dolorum modi assumenda eum? Aliquid inventore velit ipsa repellat numquam atque dolores!",
  },
  {
    image: girl2,
    name: "Ranidi Lochana",
    rating: [
      <FaStar className="star-icon-filled" />,
      <FaStar className="star-icon-filled" />,
      <FaStar className="star-icon-filled" />,
      <FaStar className="star-icon-filled" />,
      <FaStarHalf className="star-icon-filled" />,
    ],
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis, amet nesciunt voluptatem cum architecto ipsum vero nulla voluptatibus dolorum modi assumenda eum? Aliquid inventore velit ipsa repellat numquam atque dolores!",
  },
  {
    image: man2,
    name: "Senuda Dilwan",
    rating: [
      <FaStar className="star-icon-filled" />,
      <FaStar className="star-icon-filled" />,
      <FaStar className="star-icon-filled" />,
      <FaStar className="star-icon-empty" />,
      <FaStar className="star-icon-empty" />,
    ],
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis, amet nesciunt voluptatem cum architecto ipsum vero nulla voluptatibus dolorum modi assumenda eum? Aliquid inventore velit ipsa repellat numquam atque dolores!",
  },
  {
    image: man3,
    name: "Charith Aruna",
    rating: [
      <FaStar className="star-icon-filled" />,
      <FaStar className="star-icon-filled" />,
      <FaStar className="star-icon-filled" />,
      <FaStar className="star-icon-filled" />,
      <FaStarHalf className="star-icon-filled" />,
    ],
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis, amet nesciunt voluptatem cum architecto ipsum vero nulla voluptatibus dolorum modi assumenda eum? Aliquid inventore velit ipsa repellat numquam atque dolores!",
  },
  {
    image: girl3,
    name: "John Deo",
    rating: [
      <FaStar className="star-icon-filled" />,
      <FaStar className="star-icon-filled" />,
      <FaStar className="star-icon-filled" />,
      <FaStar className="star-icon-filled" />,
      <FaStar className="star-icon-filled" />,
    ],
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis, amet nesciunt voluptatem cum architecto ipsum vero nulla voluptatibus dolorum modi assumenda eum? Aliquid inventore velit ipsa repellat numquam atque dolores!",
  },
];


export default reviewsData