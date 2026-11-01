import { BiPhoneCall } from "react-icons/bi";

const Counseling = () => {
  return (
    <div className="flex-between text-slate-500 dark:text-slate-400">
      <div className="space-y-1">
        <p className="text-xs">برای مشاوره خرید این کالا با شماره:</p>
        <p dir="ltr" className="text-xs text-end">
          {"۰۲۱-۵۸۴۲۶"}
        </p>
      </div>

      <BiPhoneCall className="text-3xl" />
    </div>
  );
};

export default Counseling;
