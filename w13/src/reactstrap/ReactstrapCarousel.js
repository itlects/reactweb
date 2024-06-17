import React from 'react';
import { UncontrolledCarousel } from 'reactstrap';

const items = [
    {
      src: 'https://picsum.photos/id/123/1200/400',
      altText: '슬라이드1 이미지 대체 문구',
      caption: '슬라이드1 설명',
      header: '슬라이드1 제목'
    },
    {
      src: 'https://han.gl/d4jbj',
      altText: '슬라이드2 이미지 대체 문구',
      caption: '슬라이드2 설명',
      header: '슬라이드2 제목'
    },
    {
      src: 'https://han.gl/U7FFH',
      altText: '슬라이드3 이미지 대체 문구',
      caption: '슬라이드3 설명',
      header: '슬라이드3 제목'
    }
  ];
  
  const ReactstrapCarousel = ()=>{
    
      return (
          <UncontrolledCarousel items={items} />
      )
  }
  
  export default ReactstrapCarousel;