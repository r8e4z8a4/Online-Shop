import BaseURL from "@/API/BaseURL";
const PATCHhandler = async (path, data, config) => {
    const response = await BaseURL.patch(path, data, config);
    return response;
};
export default PATCHhandler;
