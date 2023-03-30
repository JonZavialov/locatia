// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./profilePage.css";

// import required modules
import { Autoplay, Pagination } from "swiper";

function Carousel({ images, name }) {
    return (
        <div id="image-swiper-container">
            <Swiper pagination={true} modules={[ Pagination, Autoplay ]} autoplay={{delay: 3000}} className="mySwiper">
                {images.map((image, i) => (
                    // TODO: replace i with unique image id
                    <SwiperSlide key={i}>
                        <img src={image} alt={name} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
  );
}

export default Carousel;
