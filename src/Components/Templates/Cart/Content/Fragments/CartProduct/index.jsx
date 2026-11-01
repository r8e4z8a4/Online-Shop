import { useContext } from "react";
import Title from "./Elements/Title";
import Variants from "./Elements/Variants";
import { CardContext } from "@/Context/CardContext";
import ChangeQuantity from "@/Components/Common/Cards/ProductCard/Fragments/ChangeQuantity";
const IMAGE_BASE_URL = "https://shopino.pachim.run/images/products/";
const CartProduct = ({ sellerId, productId, quantity, price,name,image,products}) => {
    const currentStock=products.find(product=>product._id===productId).sellers[0].stock 
    const { updateItem ,isLoadingAction} = useContext(CardContext);
    return (
        <article className="w-full p-5 border rounded-xl border-slate-200 dark:border-dark-border dark:bg-dark-bg2 flex flex-col justify-between">
            <div className="w-full grid grid-cols-2 gap-4 mb-5">
                <div className="space-y-5 max-lg:order-2 col-span-2 lg:col-span-1">
                    <Title text={name} />
                    <Variants />
                </div>
                <div className="flex-center max-lg:order-1 col-span-2 lg:col-span-1">
                    <img src={image ? `${IMAGE_BASE_URL}${image}` : "/Photos/DefaultImage.png"} alt="Product" className="max-h-42 bg-zinc-200 dark:bg-dark-border rounded-xl" />
                </div>
            </div>
            <div className="w-full *:first:mx-0 flex-center lg:flex-between flex-wrap-reverse gap-2.5 py-2 px-5 rounded-xl border border-slate-200 bg-slate-50 dark:border-dark-border dark:bg-dark-bg1">
                <ChangeQuantity quantityProduct={currentStock} quantity={quantity} isLoadingAction={isLoadingAction} productId={productId} sellerId={sellerId} handler={updateItem}/>
                <div>
                    <div className="flex-ic gap-1 text-xs">
                        <p className="text-xl">
                            <strong>{Number(price).toLocaleString("fa-IR")}</strong>
                        </p>
                        <span>تومان</span>
                    </div>
                </div>
            </div>
        </article>
    );
};
export default CartProduct;