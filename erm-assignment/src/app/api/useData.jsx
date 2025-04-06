import { useEffect, useState } from "react";

export const useData = () => {
  const [fetchedData, setFetchedData] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch(
          "https://app.wewantwaste.co.uk/api/skips/by-location?postcode=NR32&area=Lowestoft"
        );

        if (!response.ok) {
          throw new Error("Error fetching data");
        }

        const data = await response.json();
        setFetchedData(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    getData();
  }, []);
  return { fetchedData, loading, error };
};
