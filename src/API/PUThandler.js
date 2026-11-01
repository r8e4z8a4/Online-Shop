import BaseURL from "@/API/BaseURL";
const PUThandler = async (path,myData,config) => {
    const data = await BaseURL.put(path,myData,config);
    return data;
};
export default PUThandler;