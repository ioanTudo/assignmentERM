"use client";

import { useData } from "./api/useData";
import style from "./page.module.css";
import { useState, useEffect } from "react";
import imagePath from "./images/photo-1590496793929-36417d3117de.jpeg";

export default function Home() {
  const [selectedSkipId, setSelectedSkipId] = useState(null);
  const { fetchedData, loading, error } = useData();
  const [visibility, setVisibility] = useState("none");

  const handleOptions = (e) => {
    setSelectedSkipId(Number(e.target.value));

    setVisibility("none");
  };

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
      <h1 className={style.pageHeader}>select skip size</h1>
      {loading && <span className={style.loader}></span>}
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
            onChange={handleOptions}
            value={selectedSkipId || ""}
          >
            <option disabled value="">
              Select skip size in yards
            </option>
            {fetchedData.map((item) => (
              <option key={item.id} value={item.id}>
                {item.size}
              </option>
            ))}
          </select>

          {selectedSkip && (
            <div>
              <p className={style.yardsAmount}>
                {selectedSkip.size} yards skip
              </p>
              <p>
                <strong>Hiring period</strong>: {selectedSkip.hire_period_days}{" "}
                days
              </p>
              <p>
                <strong>Price:</strong>{" "}
                {selectedSkip.price_before_vat === 0.0 ? (
                  <span style={{ color: "red", fontWeight: 500 }}>
                    No price yet,{" "}
                    <a href="/contact" style={{ textDecoration: "underline" }}>
                      contact us
                    </a>
                  </span>
                ) : (
                  `${formatCurrency(selectedSkip.price_before_vat)} per week`
                )}
              </p>
              <div className={style.buttons_container}>
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
                  onClick={() =>
                    alert(
                      `Continue to the next page for ${selectedSkip.size} yards skip`
                    )
                  }
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
            </div>
          )}
        </div>
      )}
    </div>
  );
}
