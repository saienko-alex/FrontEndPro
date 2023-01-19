import { useContext } from "react";
import { AuthorizationContext } from "../providers/AuthorizationProvider";

export default function useAuth() {
    const value = useContext(AuthorizationContext);

    if(value === null) {
        throw new Error('Wrap your react tree in AuthorizationProvider')
    }

    return value; 
} 