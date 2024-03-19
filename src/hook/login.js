import { toast } from "react-toastify";

export const loginUser = ({ data, refetch, navigate, darkMOde }) => {
    const requestOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    };
    fetch(`${process.env.REACT_APP_PUBLIC_SERVER}/user/login`, requestOptions)
        .then(async (response) => {
            const isJson = response.headers.get("content-type")?.includes("application/json");
            const data = isJson && (await response.json());
            if (!response.ok) {
                const error = data.error;
                return Promise.reject(error);
            } else {
                await localStorage.setItem("wegro", data.data.token);

                toast.info(data.message, {
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: darkMOde ? "dark" : "light"
                });
                refetch();
                navigate("/");
            }
        })
        .catch((error) => {
            toast.error(error, {
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light"
            });
        });
};
