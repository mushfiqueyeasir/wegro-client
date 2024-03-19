import { useEffect, useState } from "react";
import { getToken } from "../utils/token";

const useFetch = ({ api, parameter, query }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [refetchData, setRefetchData] = useState(false);

  let uri;
  if (parameter) {
    uri = `${process.env.REACT_APP_PUBLIC_SERVER}/${api}/${parameter}`;
  } else if (query) {
    uri = `${process.env.REACT_APP_PUBLIC_SERVER}/${api}?${query}`;
  } else {
    uri = `${process.env.REACT_APP_PUBLIC_SERVER}/${api}`;
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(uri, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + getToken(),
          },
        });
        const responseData = await response.json();
        setData(responseData.data);
        setLoading(false);
      } catch (error) {
        setLoading(false);
      }
    };

    fetchData();
  }, [uri, query, refetchData]);

  const refetch = () => setRefetchData((prevState) => !prevState);

  return [data, loading, refetch];
};

export default useFetch;
