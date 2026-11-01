import React from 'react';
import { BiSearch } from 'react-icons/bi';
import styled from 'styled-components';
const Search = () => {
  return (
    <StyledWrapper className='flex-ic my-1 gap-3 hidden min-[800px]:block'>
      <div className="nebula-input dark:bg-dark-bg1 rounded-lg">
        <input required type="text" name="text" autoComplete="off" className="input py-2 px-3 border-2 border-zinc-400 dark:border-dark-border" />
        <label className="user-label right-5 w-min text-nowrap dark:bg-dark-bg1 bg-white">جستجو کنید</label>
        <div className="nebula-particle" style={{'--x': '0.2', '--y': '-0.4', '--delay': '0.1s'}} />
        <div className="nebula-particle" style={{'--x': '0.5', '--y': '-0.2', '--delay': '0.3s'}} />
        <div className="nebula-particle" style={{'--x': '0.3', '--y': '0.3', '--delay': '0.5s'}} />
        <div className="nebula-particle" style={{'--x': '0.7', '--y': '0.1', '--delay': '0.2s'}} />
        <div className="nebula-particle" style={{'--x': '0.1', '--y': '-0.7', '--delay': '0.4s'}} />
        <div className="nebula-particle" style={{'--x': '0.6', '--y': '0.4', '--delay': '0.6s'}} />
      </div>
    </StyledWrapper>
  );
}
const StyledWrapper = styled.div`
  .nebula-input {
    position: relative;
  }
  .nebula-input .input {
    width: 100%;
    font-size: 16px;
    outline: none;
    border-radius: 8px;
    transition: all 0.4s ease-out;
  }
  .nebula-input .user-label {
    position: absolute;
    top: 10px;
    pointer-events: none;
    color: #6a6a8a;
    transition: all 0.5s ease-out;
    padding: 0 5px;
  }
  .nebula-input .input:focus {
    border-color: #b56aff;
    box-shadow:
      0 5px 8px rgba(181, 106, 255, 0.3),
      0 10px 20px rgba(181, 106, 255, 0.2),
      0 15px 40px rgba(181, 106, 255, 0.15),
      0 20px 60px rgba(181, 106, 255, 0.1);
  }
  .nebula-input .input:focus ~ .user-label,
  .nebula-input .input:valid ~ .user-label {
    transform: translateY(-25px);
    font-size: 12px;
    color: #d18cff;
    left: 10px;
    top:14px;
  }
  .nebula-particle {
    position: absolute;
    width: 6px;
    height: 6px;
    border-radius: 50%;
    pointer-events: none;
    opacity: 0;
    top: 50%;
    left: 10px;
    filter: blur(0.8px);
    mix-blend-mode: screen;
    transition: opacity 0.3s ease;
  }
  .nebula-input .input:focus ~ .nebula-particle {
    animation: nebula-float 2s forwards ease-out;
  }
  @keyframes nebula-float {
    0% {
      transform: translate(0, -50%) scale(0.8);
      opacity: 0;
      background: #c774ff;
    }
    20% {
      opacity: 0.8;
    }
    100% {
      transform: translate(calc(var(--x) * 140px), calc(var(--y) * 35px))
        scale(1.1);
      opacity: 0;
      background: #6df2ff;
    }
  }`;
export default Search;
