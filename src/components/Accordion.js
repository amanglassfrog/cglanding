"use client"
import { useState } from "react";

const Accordion = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center py-4 text-left text-gray-800 font-medium"
      >
        <strong>{title}</strong>
        <span className={`transform transition-transform ${isOpen ? "rotate-180" : "rotate-0"}`}>
          ▼
        </span>
      </button>
      {isOpen && (
        <div className="text-gray-600 pb-4">
          <p>{content}</p>
        </div>
      )}
    </div>
  );
};

export default Accordion;
