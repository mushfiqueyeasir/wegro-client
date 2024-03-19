export const getToken = () => {
    const tempToken = localStorage.getItem("wegro") ? localStorage.getItem("wegro") : "";
    return tempToken;
};
