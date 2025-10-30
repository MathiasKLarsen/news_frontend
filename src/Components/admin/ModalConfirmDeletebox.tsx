"use client";

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";

type DeleteData = {
  _id: string;
  displayName: string; // flexible, works for Hero, Treatment, etc.
};

type ModalConfirmDeleteBoxProps = {
  open: boolean;
  data?: DeleteData | null;
  onClose: () => void;
  onConfirm: (id?: string) => void;
};

const ModalConfirmDeleteBox: React.FC<ModalConfirmDeleteBoxProps> = ({
  open,
  data,
  onClose,
  onConfirm,
}) => {
  const [showFeedback, setShowFeedback] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!open || !data || !isMounted) return null;

  const handleDelete = async () => {
    setShowFeedback(true);

    // Show feedback and delay before actually confirming the delete
    setTimeout(() => {
      onConfirm(data._id); // pass ID to onConfirm
      setShowFeedback(false);
      onClose();
    }, 2000);
  };

  return createPortal(
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/80 z-40"
        onClick={onClose}
      />

      {/* Modal Box */}
      <div className="fixed inset-0 z-50 flex items-center justify-center">
        <div className="bg-white p-6 rounded shadow-lg w-full max-w-md relative z-50">
          <h2 className="text-xl text-black font-bold mb-4 text-center">
            Er du sikker på du vil slette:{" "}
            <span className="text-red-600">{data.displayName}</span>?
          </h2>

          {showFeedback && (
            <div className="bg-green-500 text-white p-2 rounded mb-4 text-center">
              Product deleted!
            </div>
          )}

          <div className="flex justify-center gap-4">
            <button
              onClick={handleDelete}
              className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded"
            >
              Slet
            </button>
            <button
              onClick={onClose}
              className="bg-gray-300 hover:bg-gray-400 text-black px-4 py-2 rounded"
            >
              Annuller
            </button>
          </div>
        </div>
      </div>
    </>,
    document.body
  );
};

export default ModalConfirmDeleteBox;
