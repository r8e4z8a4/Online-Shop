import Input_1 from "@/Components/Common/Inputs/Input_1";
import { BiPlus } from "react-icons/bi";
import { HiX } from "react-icons/hi";
const FILTER_TYPES = [
  {
    value: "selectbox",
    label: "Select (انتخابی)",
  },
  {
    value: "radio",
    label: "رادیویی",
  },
];
const FiltersEditor = ({ filters, dispatch }) => {
  const updateOptions = (index, optionValue) => {
    const options = optionValue.split(",").map((option) => option.trim());
    dispatch({
      type: "filters/optionsChange",
      payload: {
        index,
        options,
      },
    });
  };
  return (
    <div>
      <div className="flex items-center justify-between mb-2">
        <label className="text-sm font-medium">
          فیلترهای دسته‌بندی (اختیاری)
        </label>
        <button
          type="button"
          onClick={() =>
            dispatch({
              type: "filters/add",
            })
          }
          className="text-blue-500 text-xs flex items-center gap-1"
        >
          <BiPlus />
          افزودن فیلتر
        </button>
      </div>
      <div className="space-y-3 dark:bg-dark-bg2">
        {filters.map((filter, index) => (
          <div key={index} className=" border-2 border-zinc-200 dark:border-dark-border rounded-md p-3 space-y-2">
            <button
              type="button"
              onClick={() =>
                dispatch({
                  type: "filters/remove",
                  payload: {
                    index,
                  },
                })
              }
              className="text-red-500 block mr-auto"
            >
              <HiX className="size-5" />
            </button>
            <Input_1
              value={filter.name ?? ""}
              onChange={(e) =>
                dispatch({
                  type: "filters/fieldChange",
                  payload: {
                    index,
                    field: "name",
                    value: e.target.value,
                  },
                })
              }
              placeholder="نام فیلتر (مثلا رم)"
              className="dark:bg-[#0a2332]!"
            />
            <Input_1
              value={filter.slug ?? ""}
              onChange={(e) =>
                dispatch({
                  type: "filters/fieldChange",
                  payload: {
                    index,
                    field: "slug",
                    value: e.target.value,
                  },
                })
              }
              placeholder="slug (مثلا ram)"
              className="dark:bg-[#0a2332]!"
            />
            <Input_1
              value={filter.description ?? ""}
              onChange={(e) =>
                dispatch({
                  type: "filters/fieldChange",
                  payload: {
                    index,
                    field: "description",
                    value: e.target.value,
                  },
                })
              }
              placeholder="توضیح فیلتر"
              className="dark:bg-[#0a2332]!"
            />
            <select
              value={filter.type ?? ""}
              onChange={(e) =>
                dispatch({
                  type: "filters/fieldChange",
                  payload: {
                    index,
                    field: "type",
                    value: e.target.value,
                  },
                })
              }
              className=" w-full h-9 text-sm dark:bg-[#0a2332] bg-[#ededef] rounded-md outline-none px-2">
              <option disabled value="">
                انتخاب نوع فیلتر
              </option>
              {FILTER_TYPES.map((filterType) => (
                <option
                  key={filterType.value}
                  value={filterType.value}
                >
                  {filterType.label}
                </option>
              ))}
            </select>
            <Input_1 className="dark:bg-[#0a2332]!"
              value={
                Array.isArray(filter.options)
                  ? filter.options.join(",")
                  : ""
              }
              onChange={(e) =>
                updateOptions(index, e.target.value)
              }
              placeholder="گزینه‌ها با کاما جدا کن (مثلا: نو, کهنه, تعمیری)"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default FiltersEditor;