// DealPage.jsx
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./Dealpage.css";
import DealCard from "../Deal-Card/DealCard";

const fetchDealById = async (id) => {
  try {
    const response = await fetch(
      `${process.env.REACT_APP_BASE_URL}v1/apis/deals/${id}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching deal data:", error);
    return null;
  }
};

const DealPage = () => {
  const { id } = useParams();
  const [deal, setDeal] = useState(null);
  const [loading, setLoading] = useState(true);
const [isBlurred, setIsBlurred] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      const fetchedDeal = await fetchDealById(id);
      setDeal(fetchedDeal?.data || null);
      setLoading(false);
    };

    fetchData();
  }, [id]);

  if (loading) {
    return <div className="loading"></div>;
  }

  if (!deal) {
    return <div className="error" style={{
                    color: "white",
                    fontSize: "24px",
                    textAlign: "center",
                  }}>Deal not found or an error occurred.</div>;
  }

  return (
    <div className={`promotions-container ${isBlurred ? "blur-background" : ""}`}>
      <DealCard prop={deal} setIsBlurred={setIsBlurred} />;
    </div>
  );
};

export default DealPage;
