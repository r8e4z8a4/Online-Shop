import { BiEdit } from "react-icons/bi";
import { FaEllipsisVertical, FaTrash } from "react-icons/fa6";
import Dropdown from "../../../common/Dropdown";
import DropdownItem from "../../../common/Dropdown/DropdownItem";
import Modal from "../../../common/Modal";
import { useToggle } from "react-use";
import DeleteCategoryModal from "@/Components/Templates/Dashboard/common/ModelContents/DeleteCategoryModal";
import CreateCategoryModal from "@/Components/Templates/Dashboard/templates/moderator/categories/CreateCategoryModal";
const ManageCategoryDropdown = ({ fetchCategories, category ,fetchSubSubCategories}) => {
    const [isOpenForm, OpenFormtoggle] = useToggle(false);
    const [isOpenModal, Modaltoggle] = useToggle(false);
    const onSuccess=()=>{
        fetchCategories(true)
        fetchSubSubCategories(true)
    }
    return (
        <>
            <Dropdown
                Trigger={
                    <button className="text-lg size-10 flex items-center justify-center">
                        <FaEllipsisVertical />
                    </button>
                }
            >
                <DropdownItem
                    onClick={() => {
                        Modaltoggle();
                    }}
                >
                    <FaTrash className="text-base!" />
                    <span>حذف دسته بندی </span>
                </DropdownItem>
                <DropdownItem
                    onClick={() => {
                        OpenFormtoggle()
                    }}
                >
                    <BiEdit className="text-xl!" />
                    <span>ویرایش دسته بندی </span>
                </DropdownItem>
            </Dropdown>
            <Modal isOpen={isOpenModal} onOpenChange={() => Modaltoggle(false)} title="حذف دسته بندی">
                <DeleteCategoryModal fetchSubSubCategories={fetchSubSubCategories} fetchCategories={fetchCategories} category={category} onClose={Modaltoggle} />
            </Modal>
            <CreateCategoryModal category={category} isOpen={isOpenForm} onClose={() => OpenFormtoggle()} onSuccess={onSuccess} />
        </>
    );
};
export default ManageCategoryDropdown;
