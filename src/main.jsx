import App from "@/App";
import { createRoot } from "react-dom/client";
import { Toaster } from "sonner";
createRoot(document.getElementById("root")).render(
    <>
        <App />
        <Toaster
            position="top-center"
            richColors
            toastOptions={{
                classNames: {
                    toast: "rounded-! border-4! shadow-lg!",
                    success: "bg-green-600! text-white! border-green-500!",
                    error: "bg-red-600! text-white! border-red-500!",
                    loading: "bg-yellow-500! text-white! border-yellow-400!",
                    actionButton:"bg-blue-600! pb-1 text-white! rounded-lg! hover:bg-blue-700!",
                },
            }}
        />
    </>,
);
