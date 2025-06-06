import Image from 'next/image';
import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import { Autoplay } from 'swiper/modules';
import { about4, playButton } from '@/app/untils/imgimport';
import { Modal } from 'antd';
import { useParams } from 'next/navigation';

const CompanyHistory = ({ data }) => {
    const {lang} = useParams()
    const [isModalVisible, setIsModalVisible] = useState(false);
    const videoRef = useRef(null);

    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
        if (videoRef.current) {
            videoRef.current.pause(); // Pause the video when the modal is closed
        }
    };
    
    const { sec_three } = data;

    return (
        <section className="about2 py-20 bg-[#F5F5F5] overflow-hidden relative">
            <div className="container mx-auto">
                <div className="about2Heading flex justify-between items-center">
                    <div className="about2Headingl flex items-center gap-7">
                        <div className="about2Headinglimg relative">
                            <Image
                                src={playButton}
                                className="absolute top-[50%] transform translate-y-[-50%] left-5 cursor-pointer"
                                alt="Play Button"
                                onClick={showModal}
                            />
                           { <Modal
                                title={data?.sec_three_heading_one}
                                onCancel={handleCancel}
                                open={isModalVisible}
                                footer={null}
                                width={"70%"}
                            >
                                <div className="video-container">
                                    <video ref={videoRef} className='w-full h-[60vh]' width="320" height="240" controls preload="none">
                                        <source src={"/webImages/raalc.mp4"} type="video/mp4" />
                                        Your browser does not support the video tag.
                                    </video>
                                </div>
                            </Modal>}
                            <Image
                                src={data?.sec_three_image}
                                width={10}
                                height={10}
                                className="w-[18rem] h-[8rem] object-cover rounded-full"
                                alt={data?.sec_three_heading_one ?? ""}
                            />
                        </div>
                        <div className="about2HeadinglText leading-[1] w-[15rem] text-[2.75rem] uppercase font-bold font-MluvkaBold">
                            {data?.sec_three_heading_one}
                        </div>
                    </div>
                    <div className="about2HeadingR">
                        <Image src={about4} alt={data?.sec_three_heading_one} />
                    </div>
                </div>
                <div className="about2Body mt-16">
                    <Swiper
                        modules={[Autoplay]}
                        slidesPerView={1}
                        slidesPerGroupSkip={1}
                        slidesPerGroup={1}
                        spaceBetween={20}
                        speed={1000}
                        pagination={{
                            el: ".swiper-pagination",
                            type: "progressbar",
                        }}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                            reverseDirection: lang === "ar",
                        }}
                        breakpoints={{
                            300: { slidesPerView: 1 },
                            768: { slidesPerView: 1 },
                            1024: { slidesPerView: 5 },
                        }}
                        className="about2BodySwiper"
                    >
                     {Array.isArray(sec_three) && sec_three.length > 0 &&
    (lang === "ar" ?  sec_three.slice().reverse() : sec_three).map(({ description, heading_one, year }, index) => (
        <SwiperSlide key={index}>
            <div className="about2BodyBox">
                <div className="relative about2BodyBox_">
                    <div className="h4 p-2 bg-[#F5F5F5] text-[1.1rem] w-fit block">{year}</div>
                </div>
                <div className="h2 my-3 text-[1.375rem] capitalize font-bold font-Mluvka">
                    {heading_one}
                </div>
                <p className='max-[1400px]:text-[.9rem]'>{description}</p>
            </div>
        </SwiperSlide>
    ))
}
                    </Swiper>
                </div>
            </div>
        </section>
    );
};

export default CompanyHistory;
