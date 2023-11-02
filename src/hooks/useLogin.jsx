import { useEffect, useState } from "react";
import { getUserName } from "../services/auth.services";

export default function useLogin() {
    const [username, setUsername] = useState("");

    useEffect(() => {
        const token = window.localStorage.getItem("token");
        if (token) {
            setUsername(getUserName(token));
        } else {
            window.location.href = "/forbidden";
        }
    }, []);

    return username;
}