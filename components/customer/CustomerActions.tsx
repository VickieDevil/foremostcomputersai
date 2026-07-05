"use client";

interface Props {
  onView?: () => void;
  onEdit?: () => void;
  onDelete?: () => void;
}

export default function CustomerActions({
  onView,
  onEdit,
  onDelete,
}: Props) {
  return (
    <div
      style={{
        display: "flex",
        gap: 10,
      }}
    >
      <button onClick={onView}>
        👁
      </button>

      <button onClick={onEdit}>
        ✏️
      </button>

      <button onClick={onDelete}>
        🗑
      </button>
    </div>
  );
}