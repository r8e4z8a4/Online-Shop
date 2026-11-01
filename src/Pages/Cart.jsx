import { useContext } from "react";
import Checkout from "../Components/Templates/Cart/Checkout";
import CartProduct from "../Components/Templates/Cart/Content/Fragments/CartProduct";
import CartTitle from "../Components/Templates/Cart/Content/Fragments/CartTitle";
import ClearBasket from "../Components/Templates/Cart/Content/Fragments/ClearBasket";
import { EmptyBasket } from "../Components/Templates/Cart/EmptyBasket";
import { CardContext } from "@/Context/CardContext";
import Loader_2 from "@/Components/Common/Loaders/Loader_2";
import { useProducts } from "@/Hooks/useProducts";
const CartPage = () => {
    const { items,itemsCount, isLoading ,clearCart} = useContext(CardContext);
    const {products,isLoading:productLoading}=useProducts()
    if (isLoading||productLoading) {
        return (
            <>
                <div className="my-20.75"></div>
                <div className={`fixed inset-0 z-2001 flex items-center justify-center transition-all duration-300`}>
                    <div className="absolute inset-0 bg-black/50" />
                    <Loader_2 />
                </div>
            </>
        );
    }
    if (items.length === 0) {
        return <EmptyBasket />;
    } else {
        return (
            <main id="cart-page" className="my-10 container grid grid-cols-4 gap-5">
                <div id="cart-content" className="col-span-4 min-[555px]:col-span-2 lg:col-span-3">
                    <div className="flex-between">
                        <CartTitle productsLength={itemsCount} />
                        <ClearBasket handler={clearCart}/>
                    </div>
                    <div id="cart-products-container" className=" space-y-4 mt-2">
                        {items.map((item, index) => (
                            <CartProduct products={products} key={index} {...item} />
                        ))}
                    </div>
                </div>
                <Checkout items={items}/>
            </main>
        );
    }
};
export default CartPage;
