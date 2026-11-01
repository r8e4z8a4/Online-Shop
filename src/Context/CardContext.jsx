import DELETEhandler from "@/API/DELETEhandler";
import GEThandler from "@/API/GEThandler";
import ManageRequest from "@/API/ManageRequest";
import PATCHhandler from "@/API/PATCHhandler";
import POSThandler from "@/API/POSThandler";
import { AuthContext } from "@/Context/AuthContext";
import { guestCart } from "@/lib/guestCart";
import { createContext, useContext, useEffect, useState } from "react";
import { toast } from "sonner";
export const CardContext = createContext(null);
const normalizeServerItem = (item) => ({
    productId: item.product?._id,
    sellerId: item.seller?._id,
    quantity: item.quantity,
    name: item.product?.name,
    slug: item.product?.slug,
    image: item.product?.images?.[0],
    price: item.discountedPrice ?? item.originalPrice,
});
export const CardProvider = ({ children }) => {
    const { clearGuestCart, getGuestCartItems,addGuestCartItem ,updateGuestCartItem} = guestCart();
    const { user, isLoading: authIsLoading } = useContext(AuthContext);
    const [basketStatus, setBasketStatus] = useState({ items: [], isLoading: true,isLoadingAction:false });

    const fetchServerCart = async () => {
        try {
            const { data } = await GEThandler("cart", { withCredentials: true });
        
            const cart = data?.cart;
            setBasketStatus({...basketStatus,items:(cart.items||[]).map(normalizeServerItem),isLoading: false})
        } catch (err) {
            if (err?.response?.status === 404) {
                setBasketStatus({ ...basketStatus, items: [] ,isLoading: false});
            } else {
                toast.error("خطا در دریافت سبد خرید");
            }
        }
    };
    const mergeGuestCartIntoServer = async () => {
        const guestCart = getGuestCartItems();
        if (!guestCart.length) return;
        let failedCount = 0;
        for (const item of basketStatus.items) {
            try {
                await POSThandler("/cart/add", { productId: item.productId, sellerId: item.sellerId, quantity: item.quantity }, { withCredentials: true });
            } catch {
                failedCount += 1;
            }
            clearGuestCart();
            if (failedCount > 0) {
                toast.error(`${failedCount} مورد از سبد قبلی شما اضافه نشد `);
            }
        }
    };
    useEffect(() => {
        if (authIsLoading) return;
        const syncCart = async () => {
            setBasketStatus({ ...basketStatus, isLoading: true });
            if (user) {
                 await mergeGuestCartIntoServer();
                 await fetchServerCart();
            } else {
                setBasketStatus({...basketStatus, items: getGuestCartItems(),isLoading:false });
            }
        };
        syncCart();
    }, [user, authIsLoading]);
    const addItem = (item) => {
        if (user) {
            setBasketStatus({...basketStatus,isLoadingAction:true})
            const response = POSThandler("/cart/add", { productId: item.productId, sellerId: item.sellerId, quantity: item.quantity },{withCredentials:true});
            ManageRequest({promise:response,TextLoader:'درحال افزودن به سبد خرید ...',successHandler:()=>fetchServerCart(),TextSuccess:'محصول با موفقیت به سبد خرید اضافه شد',TextError:"خطا در افزودن به سبد خرید",errorHandler:()=>setBasketStatus({...basketStatus,isLoadingAction:false})})
        } else {
            setBasketStatus({...basketStatus,items:addGuestCartItem(item)});
        }
    };
    const updateItem = async (productId, sellerId, quantity,quantityProduct) => {
        if (user) {
            setBasketStatus({...basketStatus,isLoadingAction:true})
            const response = PATCHhandler("cart/update", { productId, sellerId, quantity },{withCredentials:true});
            ManageRequest({promise:response,TextLoader:'درحال آپدیت سبد خرید ...',successHandler:()=>fetchServerCart(),TextSuccess:'سبد خرید با موفقیت آپدیت شد',TextError:"خطا در آپدیت به سبد خرید",errorHandler:()=>setBasketStatus({...basketStatus,isLoadingAction:false})})
        } else {
            setBasketStatus({...basketStatus,items:updateGuestCartItem(productId, sellerId, quantity,quantityProduct)});
        }
    };
    const clearCart = async () => {
        if (user) {
            const LoadingId=toast.loading('درحال پاکسازی سبد خرید ...')
            try {
                for (const item of basketStatus.items){
                    await POSThandler('cart/remove',{ productId:item.productId, sellerId:item.sellerId },{withCredentials:true})
                }
                toast.success('سبد خرید با موفقیت خالی شد',{id:LoadingId})
                fetchServerCart();
            } catch (err) {
                toast.error("خطا در پاکسازی سبد خرید",{id:LoadingId});
            }
        } else {
            setBasketStatus({...basketStatus,items:clearGuestCart()});
        }
    };
    const itemsCount = basketStatus.items.reduce((sum, item) => sum + item.quantity, 0);
    const value = {
        items:basketStatus.items,
        itemsCount,
        isLoading:basketStatus.isLoading,
        addItem,
        updateItem,
        isLoadingAction:basketStatus.isLoadingAction,
        clearCart,
    };
    return <CardContext value={value}>{children}</CardContext>;
};
