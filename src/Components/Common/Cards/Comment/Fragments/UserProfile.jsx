import publicAsset from "@/lib/publicAsset.js";

const UserProfile = ({ name = "کاربر ناشناس", roles }) => {
    return (
        <div className="flex-ic gap-1.5">
            <img src={publicAsset("Photos/user-icon.png")} className="size-10 dark:text-slate-400 rounded-full" alt='i cant open this photo' />
            <div className="space-y-0.5 ">
                <p className="text-xs text-slate-700 dark:text-slate-400">
                    <strong>{name||'کاربر Nowix Web'}</strong>
                </p>
                <p className="text-xs text-slate-400 dark:text-slate-500 select-none font-light">{roles.includes('ADMIN')||roles.includes('SELLER')?'فروشنده':'کاربر'}</p>
            </div>
        </div>
    );
};

export default UserProfile;
