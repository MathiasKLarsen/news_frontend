import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 text-center">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-sm w-full">
        <h2 className="text-3xl font-bold text-red-500 mb-4">Not Found</h2>
        <p className="text-lg text-gray-700 mb-6">Could not find the requested resource.</p>
        <Link href="/"
          className="text-blue-500 hover:text-blue-700 font-semibold text-lg"
        >
            Return Home
        </Link>
      </div>
    </div>
  )
}
