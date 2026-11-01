import React from 'react';
import styled from 'styled-components';

const Loader_1 = ({className}) => {
  return (
    <StyledWrapper>
      <div className="loader gap-1">
        <div className={`circle circle-1 ${className}`} />
        <div className={`circle circle-2 ${className}`} />
        <div className={`circle circle-3 ${className}`} />
        <div className={`circle circle-4 ${className}`} />
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .loader {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
  }
  .circle {
    position: relative;
    border-radius: 50%;
    box-shadow: inset 0 0 0 2px red;
    transform-origin: center;
    animation: fill 1.5s ease-in-out infinite;
  }
  .circle-1 {
    animation-delay: 0s;
  }
  .circle-2 {
    animation-delay: -0.4s;
  }
  .circle-3 {
    animation-delay: -0.8s;
  }
  .circle-4 {
    animation-delay: -1.2s;
  }

  @keyframes fill {
    0% {
      transform: scale(1);
    }

    50% {
      box-shadow: inset 0 0 0 2px #fff, inset 0 0 0 6px #1c1c1e;
      transform: scale(1.5);
    }

    100% {
      box-shadow: inset 0 0 0 2px #fff, inset 0 0 0 6px #fff;
      transform: scale(1);
    }
  }`;

export default Loader_1;
