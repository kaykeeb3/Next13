import { User } from '@/components/User'

export default function Home() {
  return (
    <div className="bg-zinc-800 w-full h-screen">
      <h1 className="text-center font-medium text-2xl text-white pt-3">Home</h1>
      <User />
    </div>
  )
}
