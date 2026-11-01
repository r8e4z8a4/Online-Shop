import { Link } from "react-router";
import SectionTitle from "../Components/Common/SectionTitle";
import InputField from "../Components/Templates/ContactUS/InputField";
import Form_2 from "@/Components/Common/Forms/Form_2";
import Map from "@/Components/Templates/ContactUS/Map";
import publicAsset from "@/lib/publicAsset.js";
const ContactUSPage = () => {
    return (
        <main className="my-20 container" id="contact-us">
            <SectionTitle text="با ما تماس بگیرید" description="از طریق فرم زیر با ما تماس بگیرید و تیم فنی Novix در اسرع وقت به راهنمایی شما پاسخ خواهند داد." />
            <div id="contact-area" className="grid items-center grid-cols-2 gap-15 p-5 border-2 rounded-3xl border-neutral-300 mt-10 dark:bg-dark-bg2 dark:border-dark-border">
                <div className="w-full col-span-2 order-2 md:order-1 md:col-span-1">
                    <p className="mb-10 text-sm text-neutral-600 dark:text-slate-400">کاربر محترم, برای پاسخگویی بهتر لطفا تمامی فیلد های زیر را تکمیل کنید.</p>
                    <Form_2/>
                </div>
                <div className="w-full col-span-2 order-1 md:order-2 md:col-span-1">
                    <img className="object-cover scale-80" src={publicAsset("Photos/contact-us.png")} />
                </div>
            </div>
            <div className="space-y-10 my-10">
                <SectionTitle text="مراجعه حضوری" description="شما می‌توانید به صورت حضوری به دفتر رسمی Novix مراجعه کنید و با همکاران ما در ارتباط باشید." />
                <Map />
            </div>
        </main>
    );
};

export default ContactUSPage;
