// import { LOREM_TEXT } from "@/lib/constants";
import Message from "./Fragments/Message";
import UserProfile from "./Fragments/UserProfile";
import { toPersianDate } from "@/lib/Date";
import { FaStar } from "react-icons/fa6";
const Comment = ({ content, createdAt, user, rating }) => {
    return (
        <article className="p-4 space-y-3 rounded-lg border border-slate-200 dark:bg-dark-bg1 dark:border-dark-border py-6">
            <div className="flex-between">
                <UserProfile {...user} />
                <div className="text-xs text-slate-400 space-y-1" dir="ltr">
                    <p>{createdAt && toPersianDate(createdAt)}</p>
                    <div className="flex-ic gap-1">
                        {Array.from({ length: 5 }).map((_, index) => (
                            <FaStar key={index} className={index<rating&&'text-amber-400'}/>
                        ))}
                    </div>
                </div>
            </div>
            <Message message={content} />
        </article>
    );
};

export default Comment;
