import { toast } from "react-toastify";

export const create = ({ endPoint, data, reset, message, navigate }) => {
  fetch(`${process.env.REACT_APP_PUBLIC_SERVER}/${endPoint}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data),
  })
    .then(response => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then(() => {
      if (reset) {
        reset();
      }
      if (navigate) {
        navigate("/");
      }
      toast.success("User Created!", {
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    })
    .catch(error => {
      console.error("Error:", error);
      toast.error("An error occurred", {
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    });
};
