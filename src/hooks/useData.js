import React, { useEffect, useState } from "react";
import apiClients from "../utils/api-clients";

const useData = (url) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    apiClients
      .get(url)
      .then((res) => setData(res.data))
      .catch((err) => setError(err.message));
  }, []);

  return { data, error };
};

export default useData;
