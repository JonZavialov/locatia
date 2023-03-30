// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./profilePage.css";

// import required modules
import { Autoplay, Pagination } from "swiper";
import { useRef } from "react";

function Carousel({ images, name }) {
    const swiperRef = useRef();
    const onInit = (Swiper) => {
        swiperRef.current = Swiper;
        swiperRef.current.autoplay.stop();
    };
    const handleMouseEnter = () => {
        swiperRef.current.slideNext()
        if (swiperRef.current) swiperRef.current.autoplay.start();
    };
    const handleMouseLeave = () => {
        if (swiperRef.current) swiperRef.current.autoplay.stop();
    };

    return (
        <div id="image-swiper-container" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <Swiper pagination={true} modules={[ Pagination, Autoplay ]} autoplay={{delay: 1500}} className="mySwiper" onInit={onInit}>
                {images.map((image, i) => (
                    // TODO: replace key with unique image id
                    <SwiperSlide key={i}>
                        <img src={image} alt={name} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
  );
}

export default Carousel;
