const PageLabel = ({label}) => {
  return (
    <div className={`w-full max-sm:mt-3 before:mx-auto h-px flex text-zinc-500 dark:text-zinc-300 items-center justify-center text-sm primary-border dark:border-dark-border relative`}>
        <span className="absolute px-14 bg-zinc-50 dark:bg-dark-bg1 duration-500 text-center">
            {label}
        </span>
    </div>
  );
};
export default PageLabel;