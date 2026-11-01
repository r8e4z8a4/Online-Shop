import axios from "axios";
const BaseURL = axios.create({
    baseURL: "https://shopino.pachim.run/v1/",
});
const retryDelays = [1000, 2000, 4000, 8000];
const shouldRetry = (error) => {
    if (!error.response) {
        return true;
    }
    const status = error.response.status;
    return status === 408 || status === 429;
};
BaseURL.interceptors.response.use(
    (response) => response.data,
    async (error) => {
        const config = error.config;
        if (!config) throw error;
        config.retryCount ??= 0;
        if (!shouldRetry(error) || config.retryCount >= retryDelays.length) {
            error.message = error.response?.data?.message || error.message || "An error occurred while processing the request.";
            // console.log('Error: =>',error.response?.data);
            throw error;
        }
        const delay = retryDelays[config.retryCount];
        config.retryCount++;
        await new Promise((resolve) => setTimeout(resolve, delay));
        return BaseURL(config);
    },
);
export default BaseURL;