"use client";

interface Props {
  reply: string;

  loading: boolean;

  onApply: () => void;

  onGenerate: () => void;
}

export default function AIReplyBox({
  reply,
  loading,
  onApply,
  onGenerate,
}: Props) {

  return (
    <div
      style={{
        background: "#fff",
        border: "1px solid #ddd",
        borderRadius: 10,
        padding: 20,
      }}
    >
      <h3>AI Smart Reply</h3>

      <textarea
        value={reply}
        readOnly
        rows={8}
        style={{
          width: "100%",
          marginTop: 15,
          padding: 12,
        }}
      />

      <div
        style={{
          display: "flex",
          gap: 10,
          marginTop: 15,
        }}
      >
        <button
          onClick={onGenerate}
        >
          {loading
            ? "Generating..."
            : "Generate Reply"}
        </button>

        <button
          onClick={onApply}
        >
          Apply Reply
        </button>
      </div>
    </div>
  );
}