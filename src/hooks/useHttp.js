import { useState, useEffect } from "react";

const useHttp = (url, requestConfig, initialData = null) => {
  const [data, setData] = useState(initialData);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const response = await fetch(url, requestConfig);
        if (!response.ok) {
          throw new Error("Failed to fetch");
        }
        const data = await response.json();
        setData(data);
      } catch (err) {
        setError(err.message);
      }
      setIsLoading(false);
    };

    fetchData();
  }, [url, requestConfig]);

  return { data, isLoading, error };
};

export default useHttp;
