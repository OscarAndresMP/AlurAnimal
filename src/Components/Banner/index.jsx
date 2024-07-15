import './Banner.css'
import 'swiper/css'
import { Swiper, SwiperSlide } from 'swiper/react';
const BannerSlide = (props) => {
    const {data} = props
    return<>
        <Swiper
            spaceBetween={50}
            slidesPerView={1}
            autoplay={{delay: 3000,
            disableOnInteraction: false
            }}
        >
            {data.map((e) =>  <SwiperSlide className='banner' key={e.id}><img src={e.image} alt={e.name}/></SwiperSlide>)}
        </Swiper>
    </>
}

export default BannerSlide;