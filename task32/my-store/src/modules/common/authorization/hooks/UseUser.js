import useAuth from "./UseAuth";

export default function useUser() {
    const { user } = useAuth();

    return user;
}