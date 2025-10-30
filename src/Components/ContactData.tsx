import { useState } from "react"; // Import af useState hook fra React
import { useYupForm } from "@/Schema/Schema"; // Import af custom hook til formularstyring og validering
import { createContact, ContactRequest } from "@/data/getConctact"; // Import af funktion til at sende kontaktdata

const PostContactData = () => {
  const [showFeedback, setShowFeedback] = useState(false); // State til at vise feedback efter formularen er sendt
  // useYupForm hook returnerer værktøjer til formularstyring og validering baseret på yup
  const { register, handleSubmit, reset, errors } = useYupForm();

  // Funktion der kører når formularen bliver sendt
  const onSubmit = async (data: ContactRequest) => {
    const formData = new FormData();

    // Tilføjer de forskellige inputfelter fra formularen til FormData objektet
    formData.append("name", data.name);
    formData.append("email", data.email);
    formData.append("subject", data.subject);
    formData.append("message", data.message);

    await createContact(data);// Sender kontaktdata til backend via createContact

    setShowFeedback(true);// Viser feedback til brugeren om at beskeden er sendt
    reset(); // Nulstiller formularen

    setTimeout(() => setShowFeedback(false), 2000);// Skjuler feedback efter 2 sekunder
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)} // Håndterer formularens submit event og kører onSubmit
      className="max-w-lg mx-auto bg-white p-8 space-y-6"
    >
      <h2 className="text-2xl font-bold text-gray-800 text-center">Kontakt os</h2>

      {/* Navn inputfelt */}
      <section>
        <label className="block text-sm font-semibold text-gray-700 mb-1">
          Navn
        </label>
        <input
          {...register("name")} // Registering af inputfeltet til formularen
          className="w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-[#F05523] focus:outline-none"
          placeholder="Dit navn"
        />
        {/* Fejlmeddelelse hvis der er en valideringsfejl */}
        <p className="text-[#F05523] text-sm mt-1">{errors.name?.message}</p>
      </section>

      {/* Email inputfelt */}
      <section>
        <label className="block text-sm font-semibold text-gray-700 mb-1">
          Email
        </label>
        <input
          {...register("email")} // Registering af email-inputfeltet
          className="w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-[#F05523] focus:outline-none"
          placeholder="Din email"
        />
        {/* Fejlmeddelelse for email */}
        <p className="text-[#F05523] text-sm mt-1">{errors.email?.message}</p>
      </section>

      {/* Subject inputfelt */}
      <section>
        <label className="block text-sm font-semibold text-gray-700 mb-1">
          Emne
        </label>
        <input
          {...register("subject")} // Registering af subject-inputfeltet
          className="w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-[#e89700] focus:outline-none"
          placeholder="Emne for beskeden"
        />
        {/* Fejlmeddelelse for subject */}
        <p className="text-[#e89700] text-sm mt-1">{errors.subject?.message}</p>
      </section>

      {/* Message textarea */}
      <section>
        <label className="block text-sm font-semibold text-gray-700 mb-1">
          Besked
        </label>
        <textarea
          {...register("message")} // Registering af message-tekstfeltet
          rows={5}
          className="w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-[#e89700] focus:outline-none resize-none"
          placeholder="Skriv din besked her..."
        ></textarea>
        {/* Fejlmeddelelse for message */}
        <p className="text-[#e89700] text-sm mt-1">{errors.message?.message}</p>
      </section>

      {/* Vis feedback når beskeden er sendt */}
      {showFeedback && (
        <section className="bg-green-100 text-green-700 text-center py-2 rounded-md font-semibold">
          Din besked er sendt!
        </section>
      )}

      {/* Submit knap */}
      <section className="text-center">
        <button
          type="submit" // Formularen bliver sendt når knappen trykkes
          className="bg-[#e89700] text-white font-semibold px-6 py-2 rounded-md hover:bg-[#e897009d] transition-colors"
        >
          Send besked
        </button>
      </section>
    </form>
  );
};

export default PostContactData;
