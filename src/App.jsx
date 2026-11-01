import { AuthProvider } from "@/Context/AuthContext";
import { CardProvider } from "@/Context/CardContext";
import { ThemeProvider } from "@/Context/ThemeContext";
import router from "@/lib/routes";
import { useEffect } from "react";
import { RouterProvider } from "react-router";
import { toast } from "sonner";
const Handler = (type) => {
    type ? toast.success("دوباره آنلاین شدید") : toast.error("شما آفلاین شدید لطفا اتصال اینترنت خود را بررسی کنید");
};
const App = () => {
    useEffect(() => {
        const handleOffline = () => Handler(false);
        const handleOnline = () => Handler(true);
        window.addEventListener("offline", handleOffline);
        window.addEventListener("online", handleOnline);

        return () => {
            window.removeEventListener("offline", handleOffline);
            window.removeEventListener("online", handleOnline);
        };
    }, []);
    return (
        <ThemeProvider>
            <AuthProvider>
                <CardProvider>
                <RouterProvider router={router}/>
                </CardProvider>
            </AuthProvider>
        </ThemeProvider>
    );
};
export default App;
