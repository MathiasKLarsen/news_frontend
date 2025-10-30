"use client";

import { useState, useEffect } from "react";
import {
  getPodcast,
  createPodcast,
  updatePodcast,
  deletePodcast,
  Podcast,
} from "@/data/getPodcast";
import PodcastFormModal from "@/Components/admin/PodcastFormModal";
import ModalConfirmDeleteBox from "@/Components/admin/ModalConfirmDeletebox";
import { useRouter } from "next/navigation";
import PodcastAudio from "@/Components/podcast/PodcastAudio";

const PodcastAdminPage = () => {
  const router = useRouter();

  const [podcasts, setPodcasts] = useState<Podcast[]>([]);
  const [showModal, setShowModal] = useState(false);
  const [editPodcast, setEditPodcast] = useState<Podcast | null>(null);
  const [deleteTarget, setDeleteTarget] = useState<Podcast | null>(null);
  const [feedbackMessage, setFeedbackMessage] = useState(false);

  const [formData, setFormData] = useState<Podcast>({
    _id: "",
    headline: "",
    info: "",
    length: 0,
    podcast: "",  // To store MP3 file
    thumbnail: null,  // To store image file
    releaseDate: new Date().toISOString(),
  });

  // Fetch podcasts when component mounts
  useEffect(() => {
    getPodcast().then(setPodcasts);
  }, []);

  // Handle edit mode when selecting a podcast for editing
  useEffect(() => {
    if (editPodcast) {
      setFormData({
        _id: editPodcast._id,
        headline: editPodcast.headline,
        info: editPodcast.info,
        length: editPodcast.length,
        podcast: editPodcast.podcast, // We won't pre-load the file here, but display current data
        thumbnail: editPodcast.thumbnail,
        releaseDate: editPodcast.releaseDate
      });
    } else {
      setFormData({
        _id: "",
        headline: "",
        info: "",
        length: 0,
        podcast: "",
        thumbnail: null,
        releaseDate: new Date().toISOString(),
      });
    }
  }, [editPodcast]);

  // Handle input changes
  const handleUpdate = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle file changes (for podcast MP3 and thumbnail)
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, files } = e.target;
    if (files && files[0]) {
      const file = files[0];
      if (name === "thumbnail" && file.type.startsWith("image/")) {
        setFormData((prev) => ({ ...prev, thumbnail: file }));
      } else {
        alert("Invalid file type. Please select an MP3 for podcast and an image for thumbnail.");
      }
    }
  };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const dataToSend = new FormData();
    dataToSend.append("headline", formData.headline);
    dataToSend.append("info", formData.info);
    dataToSend.append("length", String(formData.length));  // Convert length to string
    if (formData.podcast) {
      dataToSend.append("podcast", formData.podcast);  // Append the MP3 file
    }
    if (formData.thumbnail) {
      dataToSend.append("thumbnail", formData.thumbnail);  // Append the thumbnail image
    }
    dataToSend.append("releaseDate", String(formData.releaseDate));

    try {
      if (formData._id) {
        // send the same FormData used for creation when updating
        await updatePodcast(formData._id, dataToSend);
      } else {
        await createPodcast(dataToSend);
      }

      const updatedPodcasts = await getPodcast();
      setPodcasts(updatedPodcasts);
      setFeedbackMessage(true);

      setFormData({
        _id: "",
        headline: "",
        info: "",
        length: 0,
        podcast: "",
        thumbnail: null,
        releaseDate: new Date().toISOString(),
      });

      setEditPodcast(null);

      setTimeout(() => {
        setFeedbackMessage(false);
        setShowModal(false);
        router.refresh();
      }, 2000);
    } catch (error) {
      console.error("Error submitting podcast:", error);
    }
  };

  const handleDelete = async (id: string) => {
    try {
      await deletePodcast(id);
      setPodcasts((prev) => prev.filter((item) => item._id !== id));
    } catch (error) {
      console.error("Error deleting podcast:", error);
    }
  };

  return (
    <>
      <h2 className="admin-title">Podcasts</h2>

      <button
        className="mb-4 bg-green-500 px-4 py-2 rounded text-white"
        onClick={() => {
          setEditPodcast(null);
          setShowModal(true);
        }}
      >
        Add New Podcast
      </button>

      <div className="grid grid-cols-1 gap-6">
        {podcasts.map((item) => (
          <div
            key={item._id}
            className="border p-4 space-y-4 rounded shadow-sm"
          >
            <figure className="grid grid-cols-[40%_60%] gap-x-5 p-4 min-w-[500px]">
              <img
                src={`${process.env.NEXT_PUBLIC_API_URL}/assets/podcast/${item.thumbnail}`}
                alt={item.headline}
                className="object-cover rounded-lg md:w-80 w-full h-auto"
              />

              <section className="flex flex-col justify-between">
                <figcaption className="max-w-[300px]">
                  <h3 className="text-xl font-bold">{item.headline}</h3>
                  <p className="text-gray-500 text-sm">{item.info}</p>
                </figcaption>

                <div className="md:w-[400px] w-[200px]">
                  <PodcastAudio podcast={item} />
                </div>
              </section>
            </figure>

            <div className="flex gap-4">
              <button
                type="button"
                className="cursor-pointer bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
                onClick={() => {
                  setEditPodcast(item);
                  setShowModal(true);
                }}
              >
                Edit
              </button>
              <button
                type="button"
                className="cursor-pointer bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600"
                onClick={() => setDeleteTarget(item)}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>

      <PodcastFormModal
        isOpen={showModal}
        onClose={() => {
          setShowModal(false);
          setEditPodcast(null);
        }}
        isEditMode={!!editPodcast}
        formData={formData}
        onChange={handleUpdate}
        onSubmit={onSubmit}
        onFileChange={handleFileChange}  // Pass the new file handler
      />

      <ModalConfirmDeleteBox
        open={!!deleteTarget}
        data={
          deleteTarget
            ? { _id: deleteTarget._id, displayName: deleteTarget.headline }
            : null
        }
        onClose={() => setDeleteTarget(null)}
        onConfirm={() => {
          if (deleteTarget?._id) handleDelete(deleteTarget._id);
          setDeleteTarget(null);
        }}
      />

      {feedbackMessage && (
        <div className="fixed bottom-4 right-4 bg-green-500 text-white p-2 rounded shadow-md">
          Podcast saved successfully!
        </div>
      )}
    </>
  );
};

export default PodcastAdminPage;
