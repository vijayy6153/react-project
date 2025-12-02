import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Autoplay, Pagination } from "swiper/modules";


import { useEffect, useState } from "react";

export default function Hero() {

  const [data, setData] = useState(null);
  useEffect(() => {
    fetch("http://localhost:5000/api/homepage")
      .then(res => res.json())
      .then(res => {
        if (res.status === 200) setData(res.data);
      })
      .catch(err => console.log(err));
  }, []);

   if (!data) return <div>Loading...</div>;
  return (
    <section className="heroWrp position-relative w-100 py-4">
      <div className="container">
        <h2 className="text-center fw-normal">
         <span dangerouslySetInnerHTML={{ __html: data.title }} />
        </h2>

        <div className="dataWrp d-flex justify-content-between align-items-center flex-wrap my-3">

          {/* Swiper Carousel */}
          <div className="mblBox p-1 my-2">
            <Swiper
              modules={[Autoplay, Pagination]}
              autoplay={{ delay: 2500, disableOnInteraction: false }}
              loop
              pagination={{ clickable: true, el: '.custom-pagination' }}
              spaceBetween={20}
              slidesPerView={1}
            >
              <SwiperSlide><img src={`http://localhost:5000/uploads/homepage/${data.slideimage1}`} alt="Slide 1" className="w-100" /></SwiperSlide>
              <SwiperSlide><img src={`http://localhost:5000/uploads/homepage/${data.slideimage1}`} alt="Slide 2" className="w-100" /></SwiperSlide>
              <SwiperSlide><img src={`http://localhost:5000/uploads/homepage/${data.slideimage1}`} alt="Slide 3" className="w-100" /></SwiperSlide>
            </Swiper>
            <div className="custom-pagination"></div>
          </div>

          {/* Video */}
          <div className="vdoBox p-1 my-2">
            <div style={{ padding: "56.25% 0 0 0", position: "relative" }}>
              <iframe
                src={`${data.video_url}?autoplay=1&muted=1&loop=1`}
                frameBorder="0"
                allow="autoplay; fullscreen; picture-in-picture"
                style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }}
              ></iframe>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
