import { useEffect, useRef } from "react";
import AiOverview from "./Fragments/AiOverview";
import { useProductComments } from "@/Hooks/useProductComments";
import CommentForm from "@/Components/Common/Forms/CommentForm";
import Comment from "@/Components/Common/Cards/Comment";
const ProductComments = ({ productID }) => {
    const { comments, isLoadingMore, hasNextPage, loadMoreComments ,error} = useProductComments(productID);
    const loadMoreRef = useRef(null);
    useEffect(() => {
        const element = loadMoreRef.current;
        if (!element) return;
        const observer = new IntersectionObserver(([{isIntersecting}]) => {
                if (isIntersecting && hasNextPage && !isLoadingMore) loadMoreComments();
            },
        );
        observer.observe(element);
        return () => {
            observer.disconnect();
        };
    }, [isLoadingMore, hasNextPage]);
    return (
        <section id="product-comments" className="space-y-8 dark:bg-dark-bg2 dark:border-dark-border">
            <h4 className="text-lg text-slate-700 dark:text-slate-400 font-black">نظرات کاربران</h4>
            <AiOverview />
            <div id="comments-container" className="grid grid-cols-2 *:w-full space-y-6 gap-3">
                <CommentForm productID={productID}/>
                <div className="col-span-2 min-[885px]:col-span-1">
                    <div className="pt-0! space-y-2">
                        {comments?.map((comment) => (
                            <Comment key={comment._id} {...comment} />
                        ))}
                    </div>
                    <div ref={loadMoreRef} className="h-10 flex items-center justify-center">
                        {error?error:isLoadingMore ? <span className="mt-5 text-sm text-slate-500">در حال دریافت کامنت های بیشتر</span>
                        :!hasNextPage && comments.length > 0 && <span className="mt-5 text-sm text-slate-500">همه کامنت‌ها نمایش داده شدن.</span>
                        }
                    </div>
                </div>
            </div>
        </section>
    );
};
export default ProductComments;