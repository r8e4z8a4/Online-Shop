import FullReadContainer from "./Fragments/FullReadContainer";
// import { LONG_TEXT } from "@/lib/constants";
const Description = () => {
    return (
        <div className="space-y-8 dark:border-dark-border dark:bg-dark-bg2">
            <h4 className="text-lg text-slate-700 dark:text-slate-400 font-black">توضیحات محصول</h4>
            <FullReadContainer isOpen={false} onToggle={() => {}}>
                <div className="text-sm text-justify text-slate-700 dark:text-slate-400 font-normal">
                    {/* {LONG_TEXT} */}
                    <br />
                    <br />
                    {/* {LONG_TEXT} */}
                    <br />
                    <br />
                    {/* {LONG_TEXT} */}
                </div>
            </FullReadContainer>
        </div>
    );
};

export default Description;
