"use client"
import { useEffect, useState, useRef } from "react";
import http from "../services/httpServices";
import config from "../services/config.json";
const useFetch = (url) => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const isComponentMounted = useRef(true);

  useEffect(() => {
    if (isComponentMounted.current) {
      getData();
    }
    return () => {
      isComponentMounted.current = false;
      setData(null);
      setLoading(true);
      setError("");
    };
  }, []);

  const getData = async () => {
    try {
      const { data } = await http.get(`${config.apiEndPoint}${url}`, {
        // headers: {
        //   Authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczovL3JhYWxjLnF1aWNrZGlnaXRhbHMuYWUvYXBpL2FkbWluL2xvZ2luIiwiaWF0IjoxNzIyMzM3MzM3LCJleHAiOjE3NTM4NzMzMzcsIm5iZiI6MTcyMjMzNzMzNywianRpIjoiQjJ0MTBheGhISmttQzRSUCIsInN1YiI6IjEiLCJwcnYiOiIyM2JkNWM4OTQ5ZjYwMGFkYjM5ZTcwMWM0MDA4NzJkYjdhNTk3NmY3Iiwicm9sZSI6InN1cGVyX2FkbWluIn0.DSsvEHL7a5FqCvd8bueT_Tpjq-A0dAM8MkuUk1eAUXg`,
        // },
      });
        setData(data);
        setLoading(false);
      } catch (e) {
        if(e.response) {
        }
      setLoading(true);
      setError(e)
    }
  };

  return {
    loading,
    data,
    error,
  };
};
export default useFetch;