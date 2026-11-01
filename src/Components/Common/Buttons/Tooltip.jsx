import styled from 'styled-components';
const Tooltip = ({children,text,handler}) => {
  return (
    <StyledWrapper>
      <button onClick={handler} className={`faq-button dark:border-dark-border! border-slate-500! border-2! dark:bg-dark-bg1 bg-blue-500`}>
          {children}
        <span className={`tooltip dark:before:bg-dark-border before:bg-blue-700 dark:border-dark-border border-slate-500 dark:bg-dark-bg1 bg-blue-500`}>{text}</span>
      </button>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .faq-button {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.151);
    position: relative;
  }

  .faq-button:hover {
    animation: jello-vertical 1s both;
  }
  .faq-button svg {
    height: 1.5em;
    fill: white;
  }

  @keyframes jello-vertical {
    0% {
      transform: scale3d(1, 1, 1);
    }
    30% {
      transform: scale3d(0.75, 1.25, 1);
    }
    40% {
      transform: scale3d(1.25, 0.75, 1);
    }
    50% {
      transform: scale3d(0.85, 1.15, 1);
    }
    65% {
      transform: scale3d(1.05, 0.95, 1);
    }
    75% {
      transform: scale3d(0.95, 1.05, 1);
    }
    100% {
      transform: scale3d(1, 1, 1);
    }
  }

  .tooltip {
    position: absolute;
    top: 50px;
    opacity: 0;
    white-space:nowrap;
    color: white;
    padding: 5px 10px;
    border-radius: 5px;
    border-width: 2px;
    display: flex;
    align-items: center;
    justify-content: center;
    transition-duration: 0.2s;
    pointer-events: none;
    letter-spacing: 0.5px;
  }

  .tooltip::before {
    position: absolute;
    content: "";
    width: 10px;
    height: 10px;
    background-size: 1000%;
    background-position: center;
    transform: rotate(45deg);
    bottom: -15%;
    transition-duration: 0.3s;
  }

  .faq-button:hover .tooltip {
    top: -40px;
    opacity: 1;
    transition-duration: 0.3s;
  }`;

export default Tooltip;
