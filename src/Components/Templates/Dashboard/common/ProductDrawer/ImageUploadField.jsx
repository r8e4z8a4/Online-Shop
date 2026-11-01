import Button_4 from "@/Components/Common/Buttons/Button_4";
import { useEffect, useRef, useState } from "react";
import { BiImageAdd } from "react-icons/bi";
import { HiX } from "react-icons/hi";
const MAX_IMAGE = 10;
const ImageUploadField = ({ files, onChange }) => {
    const [previewUrls, setPreviewUrls] = useState([]);
    const isFull = files.length >= MAX_IMAGE;
    const inputRef = useRef(null);
    const handleFiles = (e) => {
        const selectedImages = Array.from(e.target.files);
        const remaining = MAX_IMAGE - files.length;
        const imagesToAdd = selectedImages.slice(0, remaining);
        onChange('addIMG',undefined,undefined,[...files, ...imagesToAdd]);
    };
    const removeFile = (index) => {
        onChange('removeIMG',undefined,undefined,files.filter((_, i) => i !== index));
    };
    useEffect(() => {
        const urls = files.map((file) => URL.createObjectURL(file));
        setPreviewUrls(urls);
        return () => {
            urls.map((url) => URL.revokeObjectURL(url));
        };
    }, [files]);
    return (
        <div>
            <div className="flex items-center justify-between mb-2 mt-6">
                <label className="text-sm font-medium text-zinc-700 dark:text-zinc-400"> تصاویر محصول </label>
                <span className="text-xs text-zinc-400">
                    {files.length} از {MAX_IMAGE}
                </span>
            </div>
            <input type="file" ref={inputRef} className="hidden" multiple onChange={handleFiles} accept="images/*" />
            <div className="grid grid-cols-4 gap-2">
                {previewUrls.map((url, index) => (
                    <div key={index} className="relative aspect-square rounded-md overflow-hidden primary-border group">
                        <img src={url} className="w-full h-full object-cover" alt="i cant open this photo" />
                        <button type="button" onClick={() => removeFile(index)} className="absolute top-1 right-1 bg-red-500 text-white rounded-full size-5 text-xs flex items-center justify-center hover:bg-red-600">
                            <HiX />
                        </button>
                    </div>
                ))}
                {!isFull && (
                    <Button_4 handler={() => inputRef.current?.click()} className={"aspect-square border-dashed! border-2 rounded-4xl! flex! flex-col! items-center! justify-center! gap-1!"}>
                        <BiImageAdd className="text-xl" />
                        <span className="text-[11px]">افزودن تصویر</span>
                    </Button_4>
                )}
            </div>
            {isFull && <p className="text-xs text-zinc-400 mt-2">حداکثر تعداد تصاویر ({MAX_IMAGE} عدد) انتخاب شده است.</p>}
        </div>
    );
};
export default ImageUploadField;