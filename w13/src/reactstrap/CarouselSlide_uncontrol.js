import React, { useState } from 'react';

import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
  UncontrolledCarousel
} from 'reactstrap';

const items = [
    {
        src:'https://picsum.photos/id/123/1200/400',
        altText:'slide1',
        caption:"봄",
        key:1,
        header: '제목1'
    },
    {
        src:'https://picsum.photos/id/456/1200/400',
        altText:'slide2',
        caption:"여름",
        key:2,
        header: '제목2'
    },
    {
        src:'https://picsum.photos/id/678/1200/400',
        altText:'slide2',
        caption:"가을",
        key:3,
        header: '제목3'
    }

]

const CarouselSlide_uncontrol=()=>{
    
    return(
        <>
            <UncontrolledCarousel items={items}/>

            
        </>

    );
}

export default CarouselSlide_uncontrol;