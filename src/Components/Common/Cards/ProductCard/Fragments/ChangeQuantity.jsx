import Button_3 from "@/Components/Common/Buttons/Button_3";
import Loader_1 from "@/Components/Common/Loaders/Loader_1";
import { CgMathMinus, CgMathPlus } from "react-icons/cg";
const ChangeQuantity = ({ handler, quantity,quantityProduct, isLoadingAction, productId, sellerId }) => {
    return (
        <div className="dark:bg-dark-bg1 bg-white border-2 border-amber-400 dark:border-dark-border rounded-xl flex-between max-w-55 w-full mx-auto gap-2 p-2 md:p-4">
            <Button_3 disabled={isLoadingAction} handler={() => handler(productId, sellerId, quantity + 1,quantityProduct)} className={"p-1! disabled:cursor-not-allowed! disabled:opacity-40!"}>
                <CgMathPlus className="md:text-lg" />
            </Button_3>
            <span>{isLoadingAction ? <Loader_1 className={'size-2.5!'}/> : quantity}</span>
            <Button_3 disabled={isLoadingAction} handler={() => handler(productId, sellerId, quantity - 1,quantityProduct)} className={"p-1! disabled:cursor-not-allowed! disabled:opacity-40!"}>
                <CgMathMinus className="md:text-lg" />
            </Button_3>
        </div>
    );
};
export default ChangeQuantity;
