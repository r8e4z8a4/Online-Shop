import { ThemeContext } from '@/Context/ThemeContext';
import React, { useContext } from 'react';
import styled from 'styled-components';
const Star = () => {
  const {theme}=useContext(ThemeContext)
  return (
    <StyledWrapper>
        <p className='text-xs mb-3 dark:text-zinc-400! text-zinc-600!'>امتیاز شما :</p>
      <div className="rating mr-auto! mb-12">
        <input type="radio" id="star5" name="rate" defaultValue={5} />
        <label title="Excellent!" htmlFor="star5">
          <svg fill={theme=='dark'?'#0d4655':'#d0d0d0'} xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512">
            <path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" />
          </svg>
        </label>
        <input defaultValue={4} name="rate" id="star4" type="radio" />
        <label title="Great!" htmlFor="star4">
          <svg fill={theme=='dark'?'#0d4655':'#d0d0d0'} xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512">
            <path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" />
          </svg>
        </label>
        <input defaultValue={3} name="rate" id="star3" type="radio" />
        <label title="Good" htmlFor="star3">
          <svg fill={theme=='dark'?'#0d4655':'#d0d0d0'} xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512">
            <path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" />
          </svg>
        </label>
        <input defaultValue={2} name="rate" id="star2" type="radio" />
        <label title="Okay" htmlFor="star2">
          <svg fill={theme=='dark'?'#0d4655':'#d0d0d0'} xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512">
            <path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" />
          </svg>
        </label>
        <input defaultValue={1} name="rate" id="star1" type="radio" />
        <label title="Bad" htmlFor="star1">
          <svg fill={theme=='dark'?'#0d4655':'#d0d0d0'} xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512">
            <path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" />
          </svg>
        </label>
      </div>
    </StyledWrapper>
  );
}
const StyledWrapper = styled.div`
  .rating {
    display: flex;
    flex-direction: row-reverse; /* ستاره ۵ اول در DOM، ولی سمت راست */
    justify-content: flex-start;
    direction: ltr;              /* ترتیب ستاره‌ها مستقل از rtl صفحه */
    gap: 4px;
    position: relative;          /* بالاتر از عناصر بعدی قرار بگیرد */
    width: fit-content;
    margin-inline: auto 0;       /* اگر می‌خواهی سمت راست (rtl) بماند */
  }

  .rating > input {
    position: absolute;          /* به‌جای display:none، برای دسترسی‌پذیری با کیبورد */
    opacity: 0;
    pointer-events: none;
  }

  .rating > label {
    cursor: pointer;
    font-size: 25px;
    line-height: 1;
  }

  .rating > label > svg {
    // fill: red;
    transition: fill 0.3s ease;
  }

  .rating > input:checked ~ label > svg { fill: #ffa723; }

  .rating > label:hover ~ label > svg,
  .rating > label:hover > svg { fill: #ff9e0b; }

  .rating > input:focus-visible + label {
    outline: 2px solid currentColor;
    outline-offset: 2px;
  }

  /* رنگ اختصاصی هر امتیاز */
  #star1:checked ~ label > svg { fill: #ef4444; }
  #star2:checked ~ label > svg { fill: #e06c2b; }
  #star3:checked ~ label > svg { fill: #eab308; }
  #star4:checked ~ label > svg { fill: #19c37d; }
  #star5:checked ~ label > svg { fill: #ab68ff; }

  #star1:hover ~ label > svg, #star1:hover + label > svg { fill: #a23c3c; }
  #star2:hover ~ label > svg, #star2:hover + label > svg { fill: #99542d; }
  #star3:hover ~ label > svg, #star3:hover + label > svg { fill: #9f7e18; }
  #star4:hover ~ label > svg, #star4:hover + label > svg { fill: #22885e; }
  #star5:hover ~ label > svg, #star5:hover + label > svg { fill: #7951ac; }
`;
export default Star;