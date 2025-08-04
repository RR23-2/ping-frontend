import React, { useEffect, useRef } from "react";

type _PopUpAtCursor = {
  position: { x: number; y: number };
  onClose: () => void;
  children: React.ReactNode;
};

export default function PopUpAtCursor({
  position,
  onClose,
  children,
}: _PopUpAtCursor) {
  const popupRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        popupRef.current &&
        !popupRef.current.contains(event.target as Node)
      ) {
        onClose();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onClose]);

  return (
    <div
      ref={popupRef}
      style={{
        position: "fixed",
        top: position.y,
        left: position.x,
        zIndex: 1000,
      }}
      className="bg-background border border-dark-blue rounded-lg shadow-lg overflow-hidden"
    >
      <div className="relative">{children}</div>
    </div>
  );
}
