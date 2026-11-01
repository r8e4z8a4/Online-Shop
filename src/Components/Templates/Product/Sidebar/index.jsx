import { useContext } from "react";
import MiniProduct from "./Fragments/MiniProduct";
import NoticeDescription from "./Fragments/NoticeDescription";
import Price from "./Fragments/Price";
import Counseling from "./Fragments/Counseling";
import Button_3 from "@/Components/Common/Buttons/Button_3";
import { CardContext } from "@/Context/CardContext";
import { toast } from "sonner";
import ChangeQuantity from "@/Components/Common/Cards/ProductCard/Fragments/ChangeQuantity";
const Sidebar = ({ product }) => {
    const { addItem, isLoadingAction, items ,updateItem} = useContext(CardContext);
    const quantity = items.find((item) => item.productId == product._id)?.quantity||0;
    const addToCartHandler = async () => {
        if (!product?.sellers[0]?.seller?._id) {
            toast.error("این محصول در حال حاضر فروشنده‌ای ندارد");
            return;
        }
        if (product?.sellers[0]?.stock <= 0) {
            toast.error("این محصول موجود نیست");
            return;
        }
        addItem({
            productId: product?._id,
            sellerId: product?.sellers[0]?.seller?._id,
            quantity: 1,
            name: product?.name,
            slug: product?.slug,
            image: product?.images[0],
            price: product?.sellers[0]?.price,
        });
    };
    return (
        <aside className="order-1 col-span-4 min-[555px]:col-span-2 min-[555px]:sticky min-[555px]:top-32 min-[885px]:col-span-1 w-full rounded-xl border-2 border-neutral-200 dark:border-dark-border bg-zinc-200 dark:bg-dark-bg2 max-h-max p-5 space-y-5">
            <MiniProduct name={product.name} src={product?.images[0] ? `https://shopino.pachim.run/images/products/${product.images[0]}` : "/Photos/DefaultImage.png"} />
            <NoticeDescription />
            <Price price={Number(product?.sellers[0]?.price).toLocaleString("fa-IR")} />
            {!quantity? (
                <Button_3 disabled={isLoadingAction} handler={addToCartHandler} className={"w-full disabled:cursor-not-allowed! disabled:opacity-30!"}>
                    {isLoadingAction ? "در حال افزودن" : " افزودن به سبد خرید"}
                </Button_3>
            ) : (
                <ChangeQuantity quantityProduct={product.sellers[0]?.stock} productId={product._id} sellerId={product.sellers[0].seller._id} quantity={quantity} isLoadingAction={isLoadingAction} handler={updateItem}/>
            )}
            <Counseling />
        </aside>
    );
};
export default Sidebar;
