const Price = ({ price }) => {
  return (
    <div className="flex gap-1 items-center justify-end">
      <span className="text-xl font-bold">
        <strong>{price}</strong>
      </span>
      <span className="text-sm font-bold text-slate-700 dark:text-slate-400">تومان</span>
    </div>
  );
};

export default Price;
