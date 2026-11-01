import { NavLink } from "react-router";
import styled from "styled-components";

const Button_5 = ({ children, to, className,handler }) => {
    return (
        <StyledWrapper>
            <button onClick={handler}>
                <NavLink to={to} className={(i) => (i.isActive ? `${className} text-blue-500!` : `${className} text-slate-900! dark:text-white!`)} end id="bot">
                    {children}
                </NavLink>
            </button>
        </StyledWrapper>
    );
};

const StyledWrapper = styled.div`
    button {
        font-size: 15px;
        color: #e1e1e1;
        font-family: inherit;
        font-weight: 800;
        cursor: pointer;
        position: relative;
        border: none;
        background: none;
        text-transform: uppercase;
        transition-timing-function: cubic-bezier(0.25, 0.8, 0.25, 1);
        transition-duration: 400ms;
        transition-property: color;
    }
    a {
        color: white;
        text-decoration: none;
    }

    button:focus,
    button:hover {
        color: #fff;
    }

    button:focus:after,
    button:hover:after {
        width: 50%;
        left: 0%;
    }

    button:after {
        content: "";
        pointer-events: none;
        bottom: 25px;
        left: 50%;
        position: absolute;
        width: 0%;
        height: 2px;
        background-color: #0d4655;
        transition-timing-function: cubic-bezier(0.25, 0.8, 0.25, 1);
        transition-duration: 400ms;
        transition-property: width, left;
    }

    #bot:focus,
    #bot:hover {
        color: #8685ef;
    }
    #bot:focus:after,
    #bot:hover:after {
        width: 50%;
        right: 0%;
    }

    #bot:after {
        content: "";
        pointer-events: none;
        bottom: -5px;
        left: 50%;
        position: absolute;
        width: 0%;
        height: 2px;
        background-color: #0d4655;
        transition-timing-function: cubic-bezier(0.25, 0.8, 0.25, 1);
        transition-duration: 400ms;
        transition-property: width, right;
    }
`;

export default Button_5;
