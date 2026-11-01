import TableHead from "@/Components/Templates/Dashboard/common/Table/elements/TableHead";
import TableCell from "@/Components/Templates/Dashboard/common/Table/elements/TableCell";
import TableRow from "@/Components/Templates/Dashboard/common/Table/elements/TableRow";
import TableBody from "@/Components/Templates/Dashboard/common/Table/elements/TableBody";
import TableToolbar from "@/Components/Templates/Dashboard/common/Table/elements/TableToolbar";
import Table from "@/Components/Templates/Dashboard/common/Table";
import ManageProductDropdown from "@/Components/Templates/Dashboard/templates/moderator/products/ManageProductDropdown";
import Search_add from "@/Components/Templates/Dashboard/common/Search_add";
import { useProducts } from "@/Hooks/useProducts";
import { VscDebugRestart } from "react-icons/vsc";
import { getDisplayPrice } from "@/lib/price";
import Button_4 from "@/Components/Common/Buttons/Button_4";
import Pagination from "@/Components/Templates/Dashboard/common/Pagination";
const ModeratorProductsTable = () => {
    const { products, pagination, page, setPage, isLoading, error, refetch: fetchProducts } = useProducts();
    return (
        <>
            <Table>
                <TableToolbar useFlexBetween>
                    <h2 className="font-black text-lg text-zinc-800 dark:text-zinc-400">تمامی محصولات</h2>
                    <Search_add fetchProducts={fetchProducts}/>
                </TableToolbar>
                <TableHead>
                    <TableRow>
                        <TableCell className={"max-md:hidden!"}>شناسه</TableCell>
                        <TableCell> محصول</TableCell>
                        <TableCell>قیمت</TableCell>
                        <TableCell>مدیریت</TableCell>
                    </TableRow>
                </TableHead>
                {isLoading ? (
                    <p>درحال دریافت محصولات ...</p>
                ) : error ? (
                    <div className="flex-ic gap-5">
                        <p>خطا در دریافت محصولات</p>
                        <VscDebugRestart className="cursor-pointer" onClick={() => fetchProducts(true)} />
                    </div>
                ) : !products.length ? (
                    <p>هنوز هیچ محصولی در سایت ثبت نشده.</p>
                ) : (
                    <TableBody className={"text-zinc-600 *:h-16! font-medium text-xs! dark:text-white/50"}>
                        {products?.map((product) => {
                            const price = getDisplayPrice(product.sellers);
                            return (
                                <TableRow key={product._id}>
                                    <TableCell className={"max-md:hidden!"}>{product.shortIdentifier}</TableCell>
                                    <TableCell className="flex items-center gap-4 text-xs font-medium">
                                        <span className="line-clamp-1">{product.name}</span>
                                    </TableCell>
                                    <TableCell>
                                        <span className="font-bold">{price}</span>
                                        <span className="text-sm px-1">تومان</span>
                                    </TableCell>
                                    <TableCell>
                                        <ManageProductDropdown fetchProducts={fetchProducts} product={product}/>
                                    </TableCell>
                                </TableRow>
                            );
                        })}
                    </TableBody>
                )}
            </Table>
            {pagination?.totalPages == 1&&<div className="my-34"></div>}
            {pagination?.totalPages > 1 && <Pagination setPage={setPage} page={page} pagination={pagination}/>}
        </>
    );
};
export default ModeratorProductsTable;
