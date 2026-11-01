import { useLocalStorage } from "react-use";
import { toast } from "sonner";
const GUEST_CART_KEY = "guest_cart";
export const guestCart = () => {
    const [raw, setRaw] = useLocalStorage(GUEST_CART_KEY, []);
    const getGuestCartItems = () => {
        return raw
    };
    const saveGuestCartItems = (items) => {
        setRaw(items);
        return items;
    };
    const isSameCartItem = (item, productId, sellerId) => item.productId === productId && item.sellerId === sellerId;
    const addGuestCartItem = ({ productId, sellerId, quantity, name, slug, image, price }) => {
        const items = getGuestCartItems();
        const updatedItems = [...items, { productId, sellerId, quantity, name, slug, image, price }];
        const newItems = saveGuestCartItems(updatedItems);
        return newItems;
    };
    const updateGuestCartItem = (productId, sellerId, quantity,quantityProduct) => {
        const items = getGuestCartItems()
        if (quantity>quantityProduct) {
            toast.error('تعداد انتخابی بیش از موجودی می باشد.')
            return items
        }
        const updatedItems = quantity <= 0 ? items.filter((item) => !isSameCartItem(item, productId, sellerId)) : items.map((item) => (isSameCartItem(item, productId, sellerId) ? { ...item, quantity } : item));
        saveGuestCartItems(updatedItems);
        return updatedItems
    };
    const clearGuestCart = () => saveGuestCartItems([]);
    return {getGuestCartItems,saveGuestCartItems,isSameCartItem,addGuestCartItem,updateGuestCartItem,clearGuestCart}
};
