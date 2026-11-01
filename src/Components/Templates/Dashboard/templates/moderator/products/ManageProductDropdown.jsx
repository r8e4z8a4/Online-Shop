import { BiEdit } from "react-icons/bi";
import { FaEllipsisVertical, FaTrash } from "react-icons/fa6";
import Dropdown from "../../../common/Dropdown";
import DropdownItem from "../../../common/Dropdown/DropdownItem";
import Modal from "../../../common/Modal";
import DeleteProductModal from "../../../common/ModelContents/DeleteProductModal";
import ProductDrawer from "../../../common/ProductDrawer";
import { useToggle } from "react-use";
import useCategories from "@/Hooks/useCategories";
const ManageProductDropdown = ({fetchProducts,product}) => {
    const { data, fetchData } = useCategories();
    const [isDrawerOpen, Drawertoggle] = useToggle(false);
    const [isOpenModal, Modaltoggle] = useToggle(false);
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
                    <span>حذف محصول </span>
                </DropdownItem>
                <DropdownItem
                    onClick={() => {
                        Drawertoggle();
                        fetchData();
                    }}
                >
                    <BiEdit className="text-xl!" />
                    <span>ویرایش محصول </span>
                </DropdownItem>
            </Dropdown>
            <Modal isOpen={isOpenModal} onOpenChange={() => Modaltoggle(false)} title="حذف محصول">
                <DeleteProductModal fetchProducts={fetchProducts} product={product} onClose={Modaltoggle} />
            </Modal>
            <ProductDrawer Edit product={product} fetchProducts={fetchProducts} isOpen={isDrawerOpen} onToggle={Drawertoggle} fetchData={fetchData} error={data.error} isLoading={data.isLoading} categories={data.categories} />
        </>
    );
};
export default ManageProductDropdown;
