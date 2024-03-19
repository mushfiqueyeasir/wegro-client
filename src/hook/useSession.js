import { useEffect, useState } from "react";
import { getToken } from "../utils/token";

const useSession = () => {
    const [user, setUser] = useState([]);
    const [loading, setLoading] = useState(true);
    const [refetchData, setRefetchData] = useState(false);
    useEffect(() => {
        fetch(`${process.env.REACT_APP_PUBLIC_SERVER}/user/session`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                Authorization: "Bearer " + getToken()
            }
        })
            .then((res) => res.json())
            .then((data) => {
                setUser(data.data);
                setLoading(false);
            });
    }, [refetchData]);
    const refetch = () => setRefetchData((prevState) => !prevState);
    return [user, loading, refetch];
};

export default useSession;
