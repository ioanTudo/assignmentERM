"use client";

import { useEffect, useState } from "react";

export default function Home() {
  const [fetchedData, setFetchedData] = useState([]);

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
        console.log(error.message);
      }
    };

    getData();
  }, []);

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat("en-GB", {
      style: "currency",
      currency: "GBP",
    }).format(amount);
  };

  return (
    <div>
      {fetchedData.map((item, index) => (
        <div key={index}>
          <p>Size: {item.size}</p>
          <p>Hire period: {item.hire_period_days} days</p>
          <p>Price before VAT: {formatCurrency(item.price_before_vat)}</p>
          <button>Select</button>
        </div>
      ))}
    </div>
  );
}
