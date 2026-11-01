import BaseURL from "@/API/BaseURL";
const DELETEhandler = async (path, config) => {
    const data = await BaseURL.delete(path, config);
    return data;
};
export default DELETEhandler;