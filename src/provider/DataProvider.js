import React, { createContext, useState } from "react";
import useSession from "../hook/useSession";
import Loading from "../components/Loading/Loading";
import useFetch from "../hook/useFetch";

export const DATA_CONTEXT = createContext(undefined);

const DataProvider = ({ children }) => {
  const [user, loading, userRefetch] = useSession();
  const [music, musicLoading] = useFetch({ api: "music" });
  const [search, setSearch] = useState([]);
  if (loading || musicLoading) {
    return <Loading />;
  }

  const handleSearch = (e) => {
    const query = e.target.value;
    const filtered = music.filter((item) =>
      item.title.toLowerCase().includes(query.toLowerCase())
    );
    setSearch(filtered);
  };

  const userDataMange = { user, loading, userRefetch };
  const musicData = { music, search, handleSearch };
  const value = {
    userDataMange,
    musicData,
  };

  return (
    <DATA_CONTEXT.Provider value={value}>{children}</DATA_CONTEXT.Provider>
  );
};

export default DataProvider;
