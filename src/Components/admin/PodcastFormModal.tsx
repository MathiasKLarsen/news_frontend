"use client";

import { createPortal } from "react-dom";
import React from "react";

type PodcastFormData = {
  headline: string;
  info: string;
  length: number;
  podcast: string; // Updated to handle MP3 file
  thumbnail: File | null;
  releaseDate: string;
};

type PodcastFormModalProps = {
  isOpen: boolean;
  onClose: () => void;
  isEditMode: boolean;
  formData: PodcastFormData;
  onChange: (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => void;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  onFileChange: (e: React.ChangeEvent<HTMLInputElement>) => void; // File handling for MP3 and thumbnail
};

const PodcastFormModal: React.FC<PodcastFormModalProps> = ({
  isOpen,
  onClose,
  isEditMode,
  formData,
  onChange,
  onSubmit,
  onFileChange, // Destructure the new prop
}) => {
  if (!isOpen) return null;

  const heading = isEditMode ? "Edit Podcast" : "Add New Podcast";

  return createPortal(
    <div className="fixed inset-0 flex items-center justify-center bg-black/80 z-50">
      <div className="bg-white p-8 rounded-md shadow-lg w-full md:w-1/2">
        <h3 className="text-xl font-semibold mb-4">{heading}</h3>

        <form onSubmit={onSubmit}>
          <div className="space-y-4">
            <h3>headline</h3>
            <input
              type="text"
              name="headline"
              placeholder="Podcast Headline"
              value={formData.headline}
              onChange={onChange}
              className="w-full p-2 border rounded"
              required
            />
            <h3>info</h3>
            <textarea
              name="info"
              placeholder="Podcast Info"
              value={formData.info}
              onChange={onChange}
              className="w-full p-2 border rounded"
              required
            />
            <h3>lenght of podcast</h3>
            <input
              type="number"
              name="length"
              placeholder="Length in minutes"
              value={formData.length}
              onChange={onChange}
              className="w-full p-2 border rounded"
              required
            />
            <h3>podcast</h3>
            {/* Podcast file input */}
            <input
              type="text"
              name="podcast"
              onChange={onChange} // Handle MP3 file upload
              className="w-full p-2 border rounded"
            />
            <h3>thumbnail</h3>
            {/* Thumbnail file input */}
            <input
              type="file"
              name="thumbnail"
              accept="image/*"
              onChange={onFileChange} // Handle image file upload
              className="w-full p-2 border rounded"
            />
            <h3>headline</h3>
            <input
              type="date"
              name="releaseDate"
              value={new Date(formData.releaseDate).toISOString().slice(0, 16)}
              onChange={onChange}
              className="w-full p-2 border rounded"
            />

            <div className="flex justify-between gap-4 mt-4">
              <button
                type="submit"
                className="bg-blue-500 text-white py-2 px-4 rounded"
              >
                Save
              </button>

              <button
                type="button"
                onClick={onClose}
                className="bg-gray-500 text-white py-2 px-4 rounded"
              >
                Cancel
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>,
    document.body
  );
};

export default PodcastFormModal;
