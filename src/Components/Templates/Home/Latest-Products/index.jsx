import ProductCard from "@/Components/Common/Cards/ProductCard";
import SectionTitle from "@/Components/Common/SectionTitle";
import ProductCardSkeleton from "@/Components/Templates/Home/Latest-Products/ProductCardSkeleton";
import { useProducts } from "@/Hooks/useProducts";
import { VscDebugRestart } from "react-icons/vsc";
import { Link } from "react-router";
import "swiper/css";
import Slider from "@/Components/Templates/Product/Content/RelatedProducts/Slider";
const LatestProducts = () => {
    const { products, isLoading, error, refetch } = useProducts();
    return (
        <section className="container my-12.5">
            <SectionTitle text="جدیدترین محصولات" action={<Link to="/products" className="text-sm text-blue-500 hover:underline"> مشاهده همه محصولات</Link>}/>
            {isLoading ? (
                <Slider loop breakpoints={{500: {slidesPerView: 2},992: {slidesPerView: 3},1200: {slidesPerView: 4}}} Content={ProductCardSkeleton} data={Array.from({ length: 5 })}/>
            ) : error ? (
                <div className="flex-ic gap-5">
                    <p className="text-red-600 text-sm">خطا در دریافت محصولات</p>
                    <VscDebugRestart className="cursor-pointer text-green-600" onClick={() => refetch(true)} />
                </div>
            ) : (
                <Slider loop data={products} breakpoints={{500: {slidesPerView: 2},992: {slidesPerView: 3},1200: {slidesPerView: 4}}} Content={ProductCard} /> 
            )}
        </section>
    );
};

export default LatestProducts;
