import { useState } from "react";
import { FaBan } from "react-icons/fa";
import { toPersianDate } from "@/lib/Date.js";
import Table from "@/Components/Templates/Dashboard/common/Table";
import TableToolbar from "@/Components/Templates/Dashboard/common/Table/elements/TableToolbar";
import TableHead from "@/Components/Templates/Dashboard/common/Table/elements/TableHead";
import TableRow from "@/Components/Templates/Dashboard/common/Table/elements/TableRow";
import TableCell from "@/Components/Templates/Dashboard/common/Table/elements/TableCell";
import TableBody from "@/Components/Templates/Dashboard/common/Table/elements/TableBody";
import Pagination from "@/Components/Templates/Dashboard/common/Pagination";
import { useUsers } from "@/Hooks/useUsers";
import BanUsers from "@/Components/Templates/Dashboard/templates/moderator/users/BanUsers";
const roleLabels = {
    USER: "کاربر",
    ADMIN: "مدیر",
    SELLER: "فروشنده",
};
const ModeratorUserTable = () => {
    const { users, isLoading, error, pagination, setPage, page, refetch } = useUsers();
    const [status, setstatus] = useState({isOpenModal:false,_id:null,phoneNumber:null});
    return (
        <>
            <Table>
                <TableToolbar useFlexBetween>
                    <div>
                        <h2 className="font-black text-lg">تمامی کاربران</h2>
                    </div>
                </TableToolbar>
                <TableHead>
                    <TableRow className="text-start">
                        <TableCell>نقش</TableCell>
                        <TableCell>شماره تماس</TableCell>
                        <TableCell>تاریخ ثبت نام</TableCell>
                        <TableCell>عملیات</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody className="*:h-16! font-medium text-xs!">
                    {isLoading && (
                        <TableRow>
                            <TableCell colSpan={3} className="text-center">
                                در حال بارگزاری ...
                            </TableCell>
                        </TableRow>
                    )}
                    {!isLoading && error && (
                        <TableRow>
                            <TableCell colSpan={3} className="text-center text-red-500">
                                {error || "خطا در دریافت کاربران"}
                            </TableCell>
                        </TableRow>
                    )}
                    {!isLoading && !error && users.length === 0 && (
                        <TableRow>
                            <TableCell colSpan={3} className="text-center">
                                کاربری وجود ندارد.{" "}
                            </TableCell>
                        </TableRow>
                    )}
                    {!isLoading &&!error &&
                        users.map((user) => {
                            return (
                                <TableRow key={user._id}>
                                    <TableCell>{user.roles.map((role) => roleLabels[role]).join(" - ")}</TableCell>
                                    <TableCell>{user.phone}</TableCell>
                                    <TableCell>{toPersianDate(user.createdAt)}</TableCell>
                                    <TableCell>
                                        {/* <button className="text-blue-500 rounded-md" title="ویرایش">
                                            <BiPencil />
                                        </button> */}
                                        <button className="text-red-500 rounded-md" title="بن" onClick={() => setstatus({isOpenModal:true,_id:user._id,phoneNumber:user.phone})}>
                                            <FaBan />
                                        </button>
                                    </TableCell>
                                </TableRow>
                            );
                        })}
                </TableBody>
            </Table>
            {pagination?.totalPages > 1 && <Pagination setPage={setPage} page={page} pagination={pagination} />}
            <BanUsers refetch={refetch} phone={status.phoneNumber} id={status._id} isOpen={status.isOpenModal} setstatus={setstatus}/>
        </>
    );
};
export default ModeratorUserTable;
