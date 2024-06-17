import React, { useState } from 'react';

import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from 'reactstrap';

const items = [
    {
        src:'https://picsum.photos/id/123/1200/400',
        altText:'slide1',
        caption:"봄",
        key:1,
        header: '성남시 자연이 아름다운 남한산성! 그리고 폴리텍'
    },
    {
        src:'https://picsum.photos/id/456/1200/400',
        altText:'slide2',
        caption:"여름",
        key:2,
        
    },
    {
        src:'https://picsum.photos/id/678/1200/400',
        altText:'slide2',
        caption:"가을",
        key:3,
        header: '성남시 자연이 아름다운 남한산성! 그리고 폴리텍3'
    }

]

const CarouselSlide=(args)=>{
    const [activeIndex, setActiveIndex] = useState(0);
    const [animating, setAnimating] = useState(false);

    const next = () => {
        if (animating) return;
        const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
        setActiveIndex(nextIndex);
    };

    const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
    };


    const goToIndex = (newIndex) => {
        if (animating) return;
        setActiveIndex(newIndex);
    };

    const slides = items.map((item) => {
        return (
          <CarouselItem
            onExiting={() => setAnimating(true)}
            onExited={() => setAnimating(false)}
            key={item.src}
          >
            <img src={item.src} alt={item.altText} />
            <CarouselCaption
              captionText={item.caption}
              captionHeader={item.caption}
            />
          </CarouselItem>
        );
    });    

    return(
        <>
            <Carousel
              activeIndex={activeIndex}
              next={next}
              previous={previous}
              {...args}
            >
              <CarouselIndicators
                items={items}
                activeIndex={activeIndex}
                onClickHandler={goToIndex}
              />
              {slides}
              <CarouselControl
                direction="prev"
                directionText="Previous"
                onClickHandler={previous}
              />
              <CarouselControl
                direction="next"
                directionText="Next"
                onClickHandler={next}
              />
            </Carousel>

            
        </>

    );
}

export default CarouselSlide;