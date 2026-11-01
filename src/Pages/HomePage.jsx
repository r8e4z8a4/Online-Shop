import { useLocalStorage, useToggle } from "react-use";
import HeroSection from "../Components/Templates/Home/Hero-Section";
import LatestProducts from "../Components/Templates/Home/Latest-Products";
import SEOSection from "../Components/Templates/Home/SEO";
import Modal from "@/Components/Templates/Dashboard/common/Modal";
const HomePage = () => {
    const [alert,setAlert]=useLocalStorage('alert',true)
    const [isOpenModal,toggle]=useToggle(alert)
    const changeState=()=>{
        toggle()
        setAlert(false)
    }
    return (
        <>
            <Modal title={'اطلاعیه'} isOpen={isOpenModal} onOpenChange={changeState}><p className="p-2">اطلاعیه شماره یک : این پروژه به دلایل بک اند به صورت کامل تکمیل نشده اما تا حد قابل توجه ای کامل شده <br/> <br/> اطلاعیه شماره دو : برای ورود به پنل مدیریت وب سایت باید با شماره 09921558293 وارد شوید و کد تایید 1111 می باشد . همچنین کد ورود برای کاربران هم 1111 می باشد باشد.</p></Modal>
            <HeroSection />
            <LatestProducts />
            <SEOSection />
        </>
    );
};
export default HomePage;
