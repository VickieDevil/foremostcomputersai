"use client";

export default function ExportButtons() {
  function exportPDF() {
    alert(
      "PDF Export feature will be implemented in the next sprint."
    );
  }

  function exportExcel() {
    alert(
      "Excel Export feature will be implemented in the next sprint."
    );
  }

  function printReport() {
    window.print();
  }

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
        📤 Export Reports
      </h2>

      <div
        style={{
          display: "flex",
          gap: 15,
          flexWrap: "wrap",
        }}
      >
        <button
          onClick={exportPDF}
          style={{
            padding: "12px 18px",
            borderRadius: 8,
            border: "none",
            background: "#dc2626",
            color: "#fff",
            cursor: "pointer",
            fontWeight: 600,
          }}
        >
          📄 Export PDF
        </button>

        <button
          onClick={exportExcel}
          style={{
            padding: "12px 18px",
            borderRadius: 8,
            border: "none",
            background: "#16a34a",
            color: "#fff",
            cursor: "pointer",
            fontWeight: 600,
          }}
        >
          📊 Export Excel
        </button>

        <button
          onClick={printReport}
          style={{
            padding: "12px 18px",
            borderRadius: 8,
            border: "none",
            background: "#2563eb",
            color: "#fff",
            cursor: "pointer",
            fontWeight: 600,
          }}
        >
          🖨️ Print Report
        </button>
      </div>
    </div>
  );
}