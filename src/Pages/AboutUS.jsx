import React from "react";
import SectionTitle from "../Components/Common/SectionTitle";
// import { LOREM_TEXT } from "../lib/constants.js";
import Accordion from "../Components/Common/Accordion";
import aboutUsData from "../Components/Templates/AboutUS/settings/data";
import { Link } from "react-router";
import { FaExternalLinkAlt } from "react-icons/fa";
import Button_3 from "@/Components/Common/Buttons/Button_3";
const AboutUSPage = () => {
    return (
        <main id="about-us" className="container my-10">
            <SectionTitle text="ما کی هستیم؟" description={""} />
            <div className="w-full mt-10 gap-10 grid grid-cols-1 md:grid-cols-2">
                <Accordion options={aboutUsData} />
                <div className="order-1 md:order-2">
                    <img src="/Photos/about-us.png" />
                </div>
            </div>
            <div className="my-14">
                <SectionTitle text="پاسخ خود را پیدا نکردید؟" />
                <p>
                    شما می‌توانید
                    <Link className="inline-block px-1 font-bold underline text-blue-500" to="/contact-us">
                        از طریق این صفحه
                    </Link>
                    با ما تماس بگیرید و سوال خود را از تیم فنی Novix بپرسید !
                </p>
                <Button_3 className=" text-sm mt-4 max-w-max  px-4 py-2.5 rounded-md bg-blue-500 dark:bg-dark-bg2! dark:border-dark-border border-2 text-white">
                    <Link className="flex-ic gap-2" to={"/contact-us"}>
                        <FaExternalLinkAlt />
                        <span>تماس با ما</span>
                    </Link>
                </Button_3>
            </div>
        </main>
    );
};

export default AboutUSPage;
