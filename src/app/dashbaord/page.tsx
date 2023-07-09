import Link from 'next/link'

export default function Dashbaord() {
  return (
    <div className="bg-zinc-800 w-full h-screen">
      <h1 className="text-center font-medium text-2xl text-white pt-3">
        Dashboard:
      </h1>

      <div className="bg-zinc-800  flex justify-center mt-7 items-center">
        <Link
          href="/"
          className="bg-green-500 font-sans text-center w-48 rounded-lg h-16 flex items-center justify-center"
        >
          Home:
        </Link>
      </div>
    </div>
  )
}
