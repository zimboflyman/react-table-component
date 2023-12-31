"use client"; // This is a client component - allows for react hooks
import { useState, useEffect } from "react";

const API_BASE_URL = "https://tech-test.tp24.io/";

/**
 * @param endpoint endpoint to add to the base Url
 * @returns { data, error, loading }
 */

export default function useFetchData(endpoint) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let fetchCancelled = false;
    // Resets
    setError(null);
    setLoading(true);
    const fetchApiData = async () => {
      try {
        if (!fetchCancelled) {
          const response = await fetch(`${API_BASE_URL}${endpoint}`);
          const responseJson = await response.json();
          setData(responseJson);
        }
      } catch (err) {
        setError(err.message || "Something went wrong with data fetching!");
      }
      setLoading(false);
    };

    fetchApiData();

    return () => {
      fetchCancelled = true;
    };
  }, [endpoint]);

  return { data, error, loading };
}
