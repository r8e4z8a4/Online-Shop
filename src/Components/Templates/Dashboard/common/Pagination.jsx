import Button_4 from "@/Components/Common/Buttons/Button_4";
const Pagination = ({ setPage, page, pagination }) => {
    return (
        <div className="flex items-center justify-center gap-2 mt-4 mb-17">
            <Button_4
                disabled={page <= 1}
                className={"border disabled:opacity-30 disabled:cursor-not-allowed!"}
                handler={() => {
                    setPage(page - 1);
                }}
            >
                قبلی
            </Button_4>
            <span className="text-sm text-zinc-800 dark:text-zinc-300">
                {" "}
                صفحه {pagination.page} از {pagination.totalPages}
            </span>
            <Button_4
                disabled={page >= pagination.totalPages}
                className={"border disabled:opacity-30 disabled:cursor-not-allowed!"}
                handler={() => {
                    setPage(page + 1);
                }}
            >
                بعدی
            </Button_4>
        </div>
    );
};

export default Pagination;
