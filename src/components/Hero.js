import React from 'react';
import styled from 'styled-components';
import { other_images } from '../utils/images';

const Hero = () => {
  return (
    <HeroWrapper className='bg-black'>
      <div className='container h-100 flex'>
        <div className='hero-content'>
          <h1>
            The More You Learn, <br /> The More You Earn.
          </h1>
          <p>
            Earn NFT Certificates and Rewards. <br /> Contribute Towards A
            Social Cause.
          </p>
        </div>
      </div>
    </HeroWrapper>
  );
};

const HeroWrapper = styled.div`
  background: url(${other_images.hero_img}) center/cover no-repeat;
  height: 400px;
  // background-size: 100% 100%;

  .container {
    .hero-content {
      background-color: var(--clr-white);
      max-width: 400px;
      width: 100%;
      margin-left: 0;
      padding: 20px;

      h1 {
        font-size: 32px;
        margin-bottom: 5px;
        white-space: nowrap;
      }
      p {
        font-size: 15px;
      }
    }
  }
`;

export default Hero;
