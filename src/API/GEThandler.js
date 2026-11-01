import BaseURL from "@/API/BaseURL";
const GEThandler = async (path, config) => {
    const data = await BaseURL.get(path, config);
    return data;
};
export default GEThandler;
