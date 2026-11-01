import Sidebar from "@/Components/Templates/Product/Sidebar";
import ProductComments from "../Components/Templates/Product/Content/Comments";
import Description from "../Components/Templates/Product/Content/Description";
import HeroDetails from "../Components/Templates/Product/Content/HeroDetails";
import RelatedProducts from "../Components/Templates/Product/Content/RelatedProducts";
import { useLoaderData } from "react-router";
import { use } from "react";
const ProductPage = () => {
    const { productPromise } = useLoaderData();
    const {data} = use(productPromise);
    return (
        <main id="product-content" className="w-[95%] mx-auto grid grid-cols-4 gap-5 my-10">
            <section className="space-y-10 *:p-5 *:border-2 *:border-neutral-200 *:rounded-xl max-[555px]:order-2 col-span-4 min-[555px]:col-span-2 min-[885px]:col-span-3">
                <HeroDetails product={data.product} />
                {/* <Description /> */}
                {/* <RelatedProducts /> */}
                <ProductComments productID={data.product._id}/>
            </section>
            <Sidebar product={data.product}/>
        </main>
    );
};
export default ProductPage;
