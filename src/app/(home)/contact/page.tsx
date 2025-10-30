"use client";

import { useYupForm } from "../../../Schema/Schema";

const Page = () => {
  const { register, handleSubmit, reset, errors } = useYupForm()

  return (
    <section className="flex flex-col items-center gap-y-10 mt-16 px-6 max-w-7xl mx-auto">
      <hgroup className="flex flex-col items-center gap-y-4 mb-12">
        <h3 className="text-3xl font-bold tracking-wide">Contact Us</h3>
        <p className="text-lg text-gray-500 text-center max-w-[700px]">
          Feel free to reach out with any questions. We're here to help!
        </p>
      </hgroup>

      <div className="w-full">
        {/* Form Section */}
        <form
          onSubmit={handleSubmit(() => reset())}
          className="flex flex-col gap-6 w-full max-w-xl mx-auto"
        >
          {/* Name */}
          <div>
            <input
              type="text"
              placeholder="Your name..."
              {...register("name")}
              className="w-full border-b border-gray-400 focus:outline-none py-2 bg-transparent"
            />
            {errors.name && (
              <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
            )}
          </div>

          {/* Email */}
          <div>
            <input
              type="email"
              placeholder="Your email..."
              {...register("email")}
              className="w-full border-b border-gray-400 focus:outline-none py-2 bg-transparent"
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
            )}
          </div>

          {/* Message */}
          <div>
            <textarea
              rows={5}
              placeholder="Your message..."
              {...register("message")}
              className="w-full border-b border-gray-400 focus:outline-none py-2 bg-transparent resize-none"
            />
            {errors.message && (
              <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>
            )}
          </div>

          {/* Submit Button */}
          <div className="flex justify-end mt-6">
            <button
              type="submit"
              className="bg-slate-600 hover:bg-slate-700 text-white py-3 px-10 rounded-lg transition"
            >
              Send
            </button>
          </div>
        </form>
      </div>
    </section>
  )
}

export default Page