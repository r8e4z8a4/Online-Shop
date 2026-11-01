import { useEffect, useState } from "react";
import GEThandler from "@/API/GEThandler";
export const useProductComments = (productId,limit = 3) => {
    const [comments, setComments] = useState([]);
    const [nextCursor, setNextCursor] = useState(null);
    const [hasNextPage, setHasNextPage] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [isLoadingMore, setIsLoadingMore] = useState(false);
    const [error, setError] = useState("");
    const fetchComments = async (cursor = null) => {
        const isLoadMore = Boolean(cursor);
        if (isLoadMore) {
            setIsLoadingMore(true);
        } else {
            setIsLoading(true);
        }
        setError("");
        try {
            const params = new URLSearchParams({productId,limit: String(limit),});
            cursor&&params.append("cursor", cursor);            
            const { data } = await GEThandler(`/comments?${params.toString()}`);
            const newComments = data?.comments || [];
            const pagination = data?.pagination;
            setComments((prevComments) => (isLoadMore ? [...prevComments, ...newComments] : newComments));
            setNextCursor(pagination?.nextCursor);
            setHasNextPage(pagination?.hasNextPage);
        } catch (err) {
            setError(isLoadMore ? "خطا در دریافت کامنت های بیشتر" : "خطا در دریافت کامنت‌ها");
        } finally {
            if (isLoadMore) {
                setIsLoadingMore(false);
            } else {
                setIsLoading(false);
            }
        }
    };
    const loadMoreComments = () => {
        if (!hasNextPage || isLoadingMore || !nextCursor||error) {
            return;
        }
        fetchComments(nextCursor);
    };
    useEffect(() => {
        if (productId) {
            fetchComments();
        }
    }, [productId]);
    return {
        comments,
        isLoading,
        isLoadingMore,
        error,
        hasNextPage,
        loadMoreComments,
    };
};
