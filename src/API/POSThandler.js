import BaseURL from "@/API/BaseURL";
const POSThandler = async (path, data, config) => {
    const response = await BaseURL.post(path, data, config);
    return response;
};
export default POSThandler;
