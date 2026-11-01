import styled from "styled-components";
const Input_1 = ({ id = "",className, ...property }) => {
    return (
        <StyledWrapper>
            <input {...property} id={id} className={`input dark:text-zinc-400 dark:bg-dark-bg1/65 text-black bg-zinc-200/65 mt-1 ${className}`} />
        </StyledWrapper>
    );
};
const StyledWrapper = styled.div`
    .input {
        width: 100%;
        border: none;
        padding: 10px;
        border-radius: 10px;
        outline: none;
    }
    .input:-webkit-autofill,
    .input:-webkit-autofill:hover,
    .input:-webkit-autofill:focus,
    .input:-webkit-autofill:active {
        -webkit-box-shadow: 0 0 0 1000px var(--autofill-bg) inset !important;
        -webkit-text-fill-color: var(--autofill-text) !important;
        caret-color: var(--autofill-text);
    }
    html.dark & .input {
        --autofill-bg: #0a2332;
        --autofill-text: #fff;
    }
    html:not(.dark) & .input {
        --autofill-bg: #ededef;
        --autofill-text: #000;
    }
    .input:focus {
        animation: rotateShadow 2s infinite linear;
    }
    @keyframes rotateShadow {
        0% {
            box-shadow:
                -2px -2px 0px 0px #aa00ff,
                2px 2px 0px 0px #3700ff;
        }
        25% {
            box-shadow:
                -2px 2px 0px 0px #aa00ff,
                2px -2px 0px 0px #3700ff;
        }
        50% {
            box-shadow:
                2px 2px 0px 0px #aa00ff,
                -2px -2px 0px 0px #3700ff;
        }
        75% {
            box-shadow:
                2px -2px 0px 0px #aa00ff,
                -2px 2px 0px 0px #3700ff;
        }
        100% {
            box-shadow:
                -2px -2px 0px 0px #aa00ff,
                2px 2px 0px 0px #3700ff;
        }
    }
`;
export default Input_1;