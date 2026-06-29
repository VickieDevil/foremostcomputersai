"use client";

import { DailyCollection as DailyCollectionType } from "../../../types/report";

interface Props {
  data: DailyCollectionType[];
}

export default function DailyCollection({
  data,
}: Props) {
  return (
    <div
      style={{
        background: "#ffffff",
        borderRadius: 16,
        padding: 20,
        boxShadow:
          "0 4px 12px rgba(0,0,0,.08)",
      }}
    >
      <h2
        style={{
          marginBottom: 20,
        }}
      >
        📅 Daily Collection
      </h2>

      {data.length === 0 ? (
        <p>No collection found.</p>
      ) : (
        data.map((item) => (
          <div
            key={item.date}
            style={{
              display: "flex",
              justifyContent: "space-between",
              padding: "12px 0",
              borderBottom:
                "1px solid #eee",
            }}
          >
            <div>
              <strong>{item.date}</strong>
            </div>

            <div>
              ₹ {item.totalRevenue}
            </div>

            <div>
              Bills : {item.totalBills}
            </div>
          </div>
        ))
      )}
    </div>
  );
}