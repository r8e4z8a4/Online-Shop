import Input_1 from "@/Components/Common/Inputs/Input_1";
import { BiPlus } from "react-icons/bi";
import { HiX } from "react-icons/hi";
const DynamicKeyValueFields = ({ title,type, items, onchange, keyPlaceholder = "کلید (مثلا رم)", valuePlaceholder = "مقدار (مثلا 8 گیگابایت)" }) => {
    return (
        <div>
            <div className="flex items-center justify-between mt-5">
                <label className="text-sm font-medium text-zinc-700 dark:text-zinc-400">{title}</label>
                <button type="button" onClick={()=>onchange('add',type,undefined,{ id: crypto.randomUUID(), key: "", value: "" })} className="text-green-500 text-xs flex items-center gap-1">
                    <BiPlus /> افزودن
                </button>
            </div>
            <div className="space-y-2">
                {items.map((item, index) => (
                    <div key={item.id} className="flex items-center gap-2">
                        <Input_1 name={`${type}-key`} placeholder={keyPlaceholder} type="text" defaultValue={item.key}/>
                        <Input_1 name={`${type}-value`} placeholder={valuePlaceholder} type="text" defaultValue={item.value}/>
                        {items.length > 1 && (
                            <button className="text-red-500 shrink-0" type="button" onClick={() => onchange('remove',type,item.id)}>
                                <HiX />
                            </button>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};
export default DynamicKeyValueFields;
