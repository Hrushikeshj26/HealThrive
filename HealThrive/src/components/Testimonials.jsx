import React, { useRef, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { IoIosArrowDropleftCircle, IoIosArrowDroprightCircle } from "react-icons/io";
import { FaStar } from "react-icons/fa";


function Testimonials() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  useEffect(() => {
    // Delay Swiper navigation assignment to allow refs to load
    setTimeout(() => {}, 0);
  }, []);

  return (
    <div className="min-h-[70vh] w-full flex flex-col items-center justify-center">
      <h1 className="text-5xl font-bold mb-6 text-center">What Our Patients Say</h1>
      <p className="text-lg text-gray-600 mb-10 text-center max-w-2xl">
        At HealThrive, we value our patients' feedback. Here are some testimonials from those who have experienced our care.
      </p>
    <div className="relative w-full max-w-6xl mx-auto flex flex-col items-center justify-center">
      <div className=" w-full max-w-4xl flex items-center justify-center">
        {/* Swiper */}
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          onInit={(swiper) => {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
            swiper.navigation.init();
            swiper.navigation.update();
          }}
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000 }}
          loop={true}
          className="rounded-lg"
        >
          {/* Slides */}
          <SwiperSlide className="p-14 bg-white rounded-3xl border-2">
            <div className="flex items-center mb-6">
                <img src="https://t3.ftcdn.net/jpg/07/33/69/20/360_F_733692054_bSgtjuH5ITVcaLlGdsy6eENEgmqq79HU.jpg" alt="Patient" className="rounded-full w-12 h-12 object-cover mr-4" />
                <h1>John Doe</h1>
                <FaStar className="text-yellow-500 ml-2" />
                <FaStar className="text-yellow-500 ml-1" />
                <FaStar className="text-yellow-500 ml-1" />
                <FaStar className="text-yellow-500 ml-1" />
                <FaStar className="text-gray-500 ml-1" />
            </div>     
            <p className="text-gray-700 mb-4 text-xl">
              "HealThrive has transformed my health journey. The staff is incredibly supportive and knowledgeable."
            </p>
          </SwiperSlide>
            <SwiperSlide className="p-14 bg-white rounded-3xl border-2">
                <div className="flex items-center mb-6">
                    <img src="https://t3.ftcdn.net/jpg/07/33/69/20/360_F_733692054_bSgtjuH5ITVcaLlGdsy6eENEgmqq79HU.jpg" alt="Patient" className="rounded-full w-12 h-12 object-cover mr-4" />
                    <h1>Jane Smith</h1>
                    <FaStar className="text-yellow-500 ml-2" />
                    <FaStar className="text-yellow-500 ml-1" />
                    <FaStar className="text-yellow-500 ml-1" />
                    <FaStar className="text-yellow-500 ml-1" />
                    <FaStar className="text-yellow-500 ml-1" />
                </div>     
                <p className="text-gray-700 mb-4 text-xl">
                "I highly recommend HealThrive. The care I received was exceptional, and I felt valued as a patient."
                </p>
            </SwiperSlide>
            <SwiperSlide className="p-14 bg-white rounded-3xl border-2">
                <div className="flex items-center mb-6">
                    <img src="https://t3.ftcdn.net/jpg/07/33/69/20/360_F_733692054_bSgtjuH5ITVcaLlGdsy6eENEgmqq79HU.jpg" alt="Patient" className="rounded-full w-12 h-12 object-cover mr-4" />
                    <h1>Emily Johnson</h1>
                    <FaStar className="text-yellow-500 ml-2" />
                    <FaStar className="text-yellow-500 ml-1" />
                    <FaStar className="text-gray-500 ml-1" />
                    <FaStar className="text-gray-500 ml-1" />
                    <FaStar className="text-gray-500 ml-1" />
                </div>
                <p className="text-gray-700 mb-4 text-xl">
                "The team at HealThrive is amazing! They listened to my concerns and provided personalized care that made a real difference in my health."
                </p>
            </SwiperSlide>
            <SwiperSlide className="p-14 bg-white rounded-3xl border-2">
                <div className="flex items-center mb-6">
                    <img src="https://t3.ftcdn.net/jpg/07/33/69/20/360_F_733692054_bSgtjuH5ITVcaLlGdsy6eENEgmqq79HU.jpg" alt="Patient" className="rounded-full w-12 h-12 object-cover mr-4" />
                    <h1>Michael Brown</h1>
                    <FaStar className="text-yellow-500 ml-2" />
                    <FaStar className="text-yellow-500 ml-1" />
                    <FaStar className="text-yellow-500 ml-1" />
                    <FaStar className="text-gray-500 ml-1" />
                    <FaStar className="text-gray-500 ml-1" />
                </div>
                <p className="text-gray-700 mb-4 text-xl">
                "I can't thank HealThrive enough for their excellent care. The staff is friendly, and the environment is welcoming."
                </p>
            </SwiperSlide>
            <SwiperSlide className="p-14 bg-white rounded-3xl border-2">
                <div className="flex items-center mb-6">
                    <img src="https://t3.ftcdn.net/jpg/07/33/69/20/360_F_733692054_bSgtjuH5ITVcaLlGdsy6eENEgmqq79HU.jpg" alt="Patient" className="rounded-full w-12 h-12 object-cover mr-4" />
                    <h1>Sarah Wilson</h1>
                    <FaStar className="text-yellow-500 ml-2" />
                    <FaStar className="text-yellow-500 ml-1" />
                    <FaStar className="text-yellow-500 ml-1" />
                    <FaStar className="text-yellow-500 ml-1" />
                    <FaStar className="text-gray-500 ml-1" />
                </div>
                <p className="text-gray-700 mb-4 text-xl">
                "HealThrive has been a game-changer for my health. The care I received was top-notch, and I felt truly cared for."
                </p>
            </SwiperSlide>
            <SwiperSlide className="p-14 bg-white rounded-3xl border-2">
                <div className="flex items-center mb-6">
                    <img src="https://t3.ftcdn.net/jpg/07/33/69/20/360_F_733692054_bSgtjuH5ITVcaLlGdsy6eENEgmqq79HU.jpg" alt="Patient" className="rounded-full w-12 h-12 object-cover mr-4" />
                    <h1>David Lee</h1>
                    <FaStar className="text-yellow-500 ml-2" />
                    <FaStar className="text-yellow-500 ml-1" />
                    <FaStar className="text-yellow-500 ml-1" />
                    <FaStar className="text-yellow-500 ml-1" />
                    <FaStar className="text-gray-500 ml-1" />
                </div>
                <p className="text-gray-700 mb-4 text-xl">
                "I am grateful for the care I received at HealThrive. The team is dedicated and truly cares about their patients."
                </p>
            </SwiperSlide>
        </Swiper>

        {/* Custom Buttons */}
        <button
          ref={prevRef}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 cursor-pointer"
        >
            <IoIosArrowDropleftCircle className="text-5xl text-gray-800 hover:text-gray-600" />
        </button>
        <button
          ref={nextRef}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 cursor-pointer"
        >
            <IoIosArrowDroprightCircle className="text-5xl text-gray-800text-5xl text-gray-800 hover:text-gray-600" />
        </button>
      </div>
      </div>
    </div>
  );
}

export default Testimonials;
