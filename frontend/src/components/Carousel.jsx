// Carousel.js
import React from 'react';
import Slider from 'react-slick';
import styled from 'styled-components';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './Carousel.css'

const slidesData = [
  { image: 'https://www.phdassistance.com/wp-content/uploads/2017/11/man-01-85x85.png', text: 'I was struggling to identify a research problemfor my Ph.D. dissertation until I sought assistance from PhD Dissertation Problem Identification Services. Their team of expertsprovided invaluable guidance in narrowingdown my research focus and formulating aclear problem statement. They took the time to understand my research interests and goals, and their expertise helped to identify a unique and significant research problem. I am greatful for their support , which set the foundation for a successful dissertation journey. Thanks, team- Gabriel Philippines' },
  { image: 'https://www.phdassistance.com/wp-content/uploads/2017/11/man-01-85x85.png', text: 'My friend recommended that I use your service just when I was about to give up on mydissertation. Because I was trapped and didnt know what to do, the suggestion came at agood moment. I m now a PhD holder, and I moverjoyed about it. Thank you for your help' },
  { image: 'https://www.phdassistance.com/wp-content/uploads/2017/11/girl2-01-85x85.png', text: 'I m a PCC undergraduate who had to do a scientific poster presentation. Your templates were beautiful and easy to use. I had no issue creating, altering, or changing the entire thing. It was also arrived on schedule and looked fantastic! I was quite taken aback. So, we re my classmates as well as my teacher. Thank you for your quick and efficient service!' },
  { image: 'https://www.phdassistance.com/wp-content/uploads/2017/11/girl-01-85x85.png', text: 'l d want to express my gratitude to Phdassistance for their invaluable assistance in developing our programme. Everyonewas courteous, competent, and diligent. I was able to meet our deadline thanks to them, and I want to continue working with them in the future.' },
  { image: 'https://www.phdassistance.com/wp-content/uploads/2017/11/man-01-85x85.png', text: 'l am immensely grateful for the PhD Assistance desk-based data collection services I received for my research project.The team was efficient and meticulous, demonstrating a strong understanding of my research objectives. They conductedcomprehensive literature reviews, collected relevant data from various sources, and organized it in a structured manner.Their attention to detail and accuracy ensured that the data collected was reliable and relevant to my study. I highlyrecommend their services to any researcher in need of desk-based data collection - Thanks, team- Dr Michael Johnson,Researcher.' },
  { image: 'https://www.phdassistance.com/wp-content/uploads/2017/11/man-01-85x85.png', text: 'My work was completely changed when I recently used a research support service for my academic project. They wereexcellent at choosing the appropriate sample size and gathering primary data, both of which were essential to the validityof my research. My ability to reach important conclusions was helped by their expert handling of secondary data andIndepth counsel on data analysis and interpretation. Additionally, they skillfully assembled and delivered my projectgiving special attention to important elements like the introduction and conclusion. They provided an invaluable serviceand I heartily endorse them.' },
  { image: 'https://www.phdassistance.com/wp-content/uploads/2017/11/man-01-85x85.png', text: 'lused a fantastic research assistance service. They provided me with thorough guidance at every stage of the projectfrom developing solid procedures to establishing precise goals. Their assistance with creating targeted questionnaires and leading informative focus groups improved the quality of my data collection. My findings would not have beenpossible without the accurate statistical analysis they offered. I was impressed by how well-developed the content wasincluding the appendices and a structured literature review. I heartily endorse using their services.' },
  { image: 'https://www.phdassistance.com/wp-content/uploads/2017/11/man-01-85x85.png', text: 'I was blown away by the ease and speed with which I was able to place my order, as well as the speed with which it wassent and arrived. The fabric poster was excellent. This is a service I will definitely use again!' },
  { image: 'https://www.phdassistance.com/wp-content/uploads/2017/11/girl-01-85x85.png', text: 'l can say that it was a pleasant experience in which Phdassistance displayed flexibility in adapting to our needs andpresented an exceptional report that met all of our expectations. Personally, I appreciated the teams prompt follow-up,and we will undoubtedly contact them if additional research assistance is required.' },
  { image: 'https://www.phdassistance.com/wp-content/uploads/2017/11/man-01-85x85.png', text: '"Iwas having difficulty deriving important insights from the vast amount of data I gathered until I worked with PhDAssistance. Their data analysis services provide high-quality big data (through Hadoop, a Java-based platform). Theirteam identified hidden patterns and trends in the data, allowing us to make data-driven decisions that positively impactedour business. They also provided intuitive visualizations that made complex data easy to comprehend for all stakeholders.Thanks to their efforts, I have gained a competitive edge in our industry:" - Jane Doe, Head of Data Science' },
];

const CarouselContainer = styled.div`
  width: 80%;
  margin: auto;
  text-align: center;
`;

const Image = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  border: 4px solid red;
  object-fit: cover;
  display: block;
  margin: auto;
`;

const Text = styled.p`
  text-align: center;
  margin: 35px;
  background-color: #F8F6F6;
  padding: 30px;
  font-weight: 250;
  border-radius: 21px;
`;

const DotContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 10px;
`;

const Dot = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: #000;
  margin: 0 5px;
  cursor: pointer;
`;

const CustomPaging = ({ onClick, active }) => (
  <Dot onClick={onClick} style={{ background: active ? '#555' : '#000' }} />
);

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    customPaging: (i) => <CustomPaging />,
    appendDots: dots => <DotContainer>{dots}</DotContainer>,
    nextArrow: <div>Next</div>,
    prevArrow: <div>Prev</div>,
  };

  return (
    <div className="">
      <h2 className='testimony'>Client Testimony</h2>
      <CarouselContainer>
        <Slider {...settings}>
          {slidesData.map((slide, index) => (
            <div key={index}>
              <Image src={slide.image} alt={`Slide ${index + 1}`} />
              <Text>{slide.text}</Text>
            </div>
          ))}
        </Slider>
      </CarouselContainer>
    </div>
  );
};

export default Carousel;