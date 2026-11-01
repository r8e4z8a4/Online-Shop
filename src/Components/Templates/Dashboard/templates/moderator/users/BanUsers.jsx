import ManageRequest from "@/API/ManageRequest";
import POSThandler from "@/API/POSThandler";
import Modal from "@/Components/Templates/Dashboard/common/Modal";
import { useState } from "react";
const BanUsers = ({ phone, id, isOpen, setstatus,refetch }) => {
    const [isLoadingBan, setIsLoadingBan] = useState(false);
    const handleBan =() => {
        const successHandler = () => {
            setstatus({ _id: null, isOpenModal: false, phoneNumber: null });
            setIsLoadingBan(false);
            refetch();
        };
        setIsLoadingBan(true)
        const promise =POSThandler(`users/ban/${id}`, {}, { withCredentials: true });
        ManageRequest({ promise, TextLoader: "درحال بن کردن کاربر ...", successHandler, TextSuccess: "کاربر با موفقیت بن شد", errorHandler: () => setIsLoadingBan(false), TextError: "خطا در بن کردن کاربر . مجدد امتحان کنید" });
    };
    return (
        <Modal isOpen={isOpen} onOpenChange={() => setstatus({ isOpenModal: false, phoneNumber: null, _id: null })} title={"بن کردن کاربر"}>
            <p className="my-10 text-center text-sm">
                آیا از بن کردن کاربر <span className="text-red-600 font-bold">{phone}</span> اطمینان دارید ؟
            </p>
            <div className="flex items-center justify-end gap-2 pt-2 mb-3">
                <button onClick={() => setstatus({ _id: null, isOpenModal: false, phoneNumber: null })} className="px-4 py-2 rounded-md bg-red-500 text-white text-sm">
                    {" "}
                    انصراف
                </button>
                <button onClick={handleBan} disabled={isLoadingBan} className="px-4 py-2 rounded-md bg-blue-500 text-white text-sm disabled:opacity-50 disabled:cursor-not-allowed">
                    {isLoadingBan ? "در حال بن ..." : "بن کن"}
                </button>
            </div>
        </Modal>
    );
};
export default BanUsers;