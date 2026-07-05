"use client";

interface Props {
  reply: string;
  loading: boolean;

  onGenerate: () => Promise<void>;
  onApply: () => void;
}

export default function AIReplyBox({
  reply,
  loading,
  onGenerate,
  onApply,
}: Props) {
  return (
    <div
      style={{
        background: "#fff",
        borderRadius: 12,
        border: "1px solid #e5e7eb",
        padding: 20,
        display: "flex",
        flexDirection: "column",
        gap: 15,
        height: "100%",
      }}
    >
      <div>
        <h2
          style={{
            margin: 0,
            fontSize: 22,
            fontWeight: 700,
          }}
        >
          🤖 AI Smart Reply
        </h2>

        <p
          style={{
            marginTop: 6,
            color: "#64748b",
            fontSize: 14,
          }}
        >
          Gemini AI Assistant
        </p>
      </div>

      <textarea
        readOnly
        value={reply}
        placeholder="AI generated reply will appear here..."
        rows={12}
        style={{
          width: "100%",
          resize: "none",
          padding: 15,
          borderRadius: 10,
          border: "1px solid #d1d5db",
          fontSize: 15,
          lineHeight: 1.6,
        }}
      />

      <div
        style={{
          display: "flex",
          gap: 10,
        }}
      >
        <button
          onClick={onGenerate}
          disabled={loading}
          style={{
            flex: 1,
            background: "#16a34a",
            color: "#fff",
            border: "none",
            padding: "12px",
            borderRadius: 8,
            cursor: "pointer",
            fontWeight: 700,
          }}
        >
          {loading
            ? "Generating..."
            : "✨ Generate Reply"}
        </button>

        <button
          onClick={onApply}
          style={{
            flex: 1,
            background: "#2563eb",
            color: "#fff",
            border: "none",
            padding: "12px",
            borderRadius: 8,
            cursor: "pointer",
            fontWeight: 700,
          }}
        >
          📋 Apply Reply
        </button>
      </div>
    </div>
  );
}