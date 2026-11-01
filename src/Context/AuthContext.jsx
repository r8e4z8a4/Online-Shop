import GEThandler from "@/API/GEThandler";
import { createContext, useEffect, useState } from "react";
export const AuthContext = createContext(null);
export function AuthProvider({ children }) {
    const [status, setStatus] = useState({user:null,isLoading:true});
    const initAuth = async () => {
        try {
            const response = await GEThandler("auth/me", { withCredentials: true });
            setStatus({user:response.data.user,isLoading:false})
        } catch (error) {
            setStatus({user:null,isLoading:false})
        }
    };
    useEffect(() => {
        initAuth();
    }, []);
    return <AuthContext value={{ user:status.user, isLoading:status.isLoading, initAuth }}>{children}</AuthContext>;
}
