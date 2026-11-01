import clsx from "clsx";
const Timer = ({ hour, minute, second }) => {
    return <p className={clsx(hour == "00" && minute == "00" && second == "00" && "text-red-700!")}>اعتبار کد تا {`${minute}:${second}`}</p>;
};
export default Timer;
