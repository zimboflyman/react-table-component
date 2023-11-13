"use client"; // This is a client component
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
    // Resets and errors on subsequent calls
    setError(null);
    setLoading(true);
    const fetchApiData = async () => {
      try {
        if (!fetchCancelled) {
          const res = await fetch(`${API_BASE_URL}${endpoint}`);
          const responseJson = await res.json();
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
