"use client";

import { useData } from "./api/useData";
import style from "./page.module.css";
import { useState, useEffect } from "react";
import imagePath from "./images/photo-1590496793929-36417d3117de.jpeg";

export default function Home() {
  const [selectedSkipId, setSelectedSkipId] = useState(null);
  const { fetchedData, loading, error } = useData();
  const [visibility, setVisibility] = useState("none");

  const formatCurrency = (amount) =>
    new Intl.NumberFormat("en-GB", {
      style: "currency",
      currency: "GBP",
    }).format(amount);

  const selectedSkip = fetchedData.find((item) => item.id === selectedSkipId);

  useEffect(() => {
    console.log("Selected ID:", selectedSkipId);
    console.log("Selected skip:", selectedSkip);
  }, [selectedSkipId]);

  return (
    <div className={style.content_wrapper}>
      {loading && <p>Loading data...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}

      {!loading && !error && (
        <div className={style.item_container}>
          <div
            className={style.image}
            style={{
              backgroundImage: `url(${imagePath.src || imagePath})`,
            }}
          ></div>

          <select
            className={style.select}
            onChange={(e) => setSelectedSkipId(Number(e.target.value))}
            value={selectedSkipId || ""}
          >
            <option disabled value="">
              Select skip size
            </option>
            {fetchedData.map((item) => (
              <option key={item.id} value={item.id}>
                {item.size} yards
              </option>
            ))}
          </select>

          {selectedSkip && (
            <div>
              <p>Size: {selectedSkip.size} yards</p>
              <p>Hire period: {selectedSkip.hire_period_days} days</p>
              <p>
                Price before VAT:{" "}
                {formatCurrency(selectedSkip.price_before_vat)}
              </p>

              <button
                className={style.selectBtn}
                style={{ display: visibility === "block" ? "none" : "block" }}
                onClick={() => setVisibility("block")}
              >
                Select
              </button>

              <button
                className={style.confirm_button}
                style={{ display: visibility }}
              >
                Continue
              </button>
              <button
                style={{ display: visibility }}
                onClick={() => setVisibility("none")}
                className={style.selectBtn}
              >
                Back
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
