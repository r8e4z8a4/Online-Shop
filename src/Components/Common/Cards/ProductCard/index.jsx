import Button_4 from "@/Components/Common/Buttons/Button_4";
import ChangeQuantity from "@/Components/Common/Cards/ProductCard/Fragments/ChangeQuantity";
import { CardContext } from "@/Context/CardContext";
import { useContext } from "react";
import { Link } from "react-router";
import { toast } from "sonner";
const ProductCard = ({ description, name,sellers, slug, images, _id }) => {
    const { items, updateItem, addItem, isLoadingAction } = useContext(CardContext);
    const quantity = items.find((item) => item.productId == _id)?.quantity||0;
    const addToCartHandler = async () => {
        if (!sellers[0]?.seller) {
            toast.error("این محصول در حال حاضر فروشنده‌ای ندارد");
            return;
        }
        if (sellers[0]?.stock <= 0) {
            toast.error("این محصول موجود نیست");
            return;
        }
        addItem({
            productId: _id,
            sellerId:sellers[0]?.seller,
            quantity: 1,
            name: name,
            slug:slug,
            image:images[0],
            price:sellers[0]?.price,
        });
    };
    return (
        <article className="w-full relative space-y-3 flex pl-2 h-115 justify-between flex-col border-2 dark:border-dark-border border-zinc-400 rounded-2xl p-3">
            <Link className="absolute size-full" to={`/product/${slug}`} />
            <header className="h-34.5 flex-center w-full">
                <img src={images.length ? `https://shopino.pachim.run/images/products/${images[0]}` : "/Photos/DefaultImage.png"} className="w-full h-60 dark:bg-dark-border bg-white block rounded-lg mt-25" />
            </header>
            <main className="h-full space-y-2.5">
                <p className="font-bold text-[16px] mt-25">{name}</p>
                <p className="font-bold line-clamp-3 text-slate-700 dark:text-slate-400 text-sm">{description}</p>
            </main>
            <footer className="mt-auto! flex items-end justify-end">
                <div className="flex-between w-full gap-2 *:first:mx-0">
                    {!quantity ? (
                        <Button_4 disabled={isLoadingAction} handler={addToCartHandler} className={"border-2 dark:border-dark-border border-slate-300 disabled:cursor-not-allowed! disabled:opacity-40!"}>
                           {isLoadingAction?'در حال افزودن':' افزودن به سبد'}
                        </Button_4>
                    ) : (
                        <ChangeQuantity quantityProduct={sellers[0]?.stock} productId={_id} sellerId={sellers[0].seller} quantity={quantity} isLoadingAction={isLoadingAction} handler={updateItem} />
                    )}
                    <div className="flex-ic gap-1">
                        <p className="font-black text-sm">{Number(sellers ? sellers[0].price : 0).toLocaleString("fa-IR")}</p>
                        <div className="text-slate-600 dark:text-slate-400 text-xs">تومان</div>
                    </div>
                </div>
            </footer>
        </article>
    );
};

export default ProductCard;
