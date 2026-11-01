import ManageRequest from "@/API/ManageRequest";
import POSThandler from "@/API/POSThandler";
import { AuthContext } from "@/Context/AuthContext";
import { useContext } from "react";
import { BiLogOut } from "react-icons/bi";
import { useNavigate } from "react-router";
const Logout = () => {
  const { initAuth } = useContext(AuthContext);
  const navigate = useNavigate();
  const successHandler=()=>{
    initAuth()
    navigate('/',{replace:true})
  }
  const handleLogout = async () => {
    const promise=POSThandler('auth/logout',{},{withCredentials:true})
    ManageRequest({promise,TextLoader:'درحال اجرای عملیات',successHandler,TextSuccess:'خروج موفقیت آمیز بود',TextError:'عملیات موفقیت آمیز نبود لطفا دوباره تلاش کنید'})
  };
  return (
    <footer onClick={handleLogout} className="p-3 w-full" >
      <button className="flex items-center gap-3 duration-150 transition-all hover:bg-zinc-200 dark:hover:bg-dark-border p-1.5 rounded-lg relative w-full cursor-pointer">
        <span className="w-1 absolute top-0 rounded-full opacity-50 bottom-0 my-auto -right-1 h-[80%] z-0" />
        <div className="size-10 rounded-lg  flex items-center text-gray-500 justify-center text-xl relative overflow-hidden">
          <span className="size-full bg-gray-500 absolute z-0 opacity-15 inset-0"></span>
          <BiLogOut />
        </div>
        <span className="text-sm text-zinc-600 dark:text-zinc-400">خروج از حساب</span>
      </button>
    </footer>
  );
};

export default Logout;
