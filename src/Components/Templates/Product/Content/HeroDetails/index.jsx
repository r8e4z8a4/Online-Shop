import ProductVariants from "./Fragments/ProductVariants";
import UsefulButtons from "./Fragments/UsefulButtons";
import publicAsset from "@/lib/publicAsset.js";

const HeroDetails = ({ product }) => {
    return (
        <>
            <section className="dark:bg-dark-bg2 dark:border-dark-border border-slate-400 bg-zinc-100" id="product-hero-details">
                <div className="col-span-6 w-full">
                    <div className="flex items-center mb-10 justify-end">
                        <UsefulButtons />
                    </div>
                    <div className="flex-wrap flex md:grid md:grid-cols-2 gap-3.5">
                        <img src={product?.images[0]?`https://shopino.pachim.run/images/products/${product.images[0]}`:publicAsset("Photos/DefaultImage.png")} alt="icant open this photo" className="size-full max-h-110 rounded-xl object-cover bg-zinc-300 dark:bg-dark-border" />
                        <div className="space-y-7">
                            <div className="space-y-5">
                                <div className="space-y-2">
                                    <h1 className="font-bold text-slate-800 dark:text-slate-400">{product.name}</h1>
                                    <p className=" text-slate-500 text-xs">{product.description}</p>
                                </div>
                            </div>
                            <ProductVariants customFields={product.customFields}/>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default HeroDetails;
