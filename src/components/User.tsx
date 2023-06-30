export async function User() {
  const response = await fetch('https://api.github.com/users/Kayke-Ti')

  const user = await response.json()

  return (
    <div className="bg-zinc-800 w-full h-screen">
      <h1 className="text-center font-medium text-2xl text-white pt-3">User</h1>

      <div className="bg-zinc-800  flex justify-center mt-7 items-center">
        <pre className="text-white font-sans text-xl">
          {JSON.stringify(user, null, 2)}
        </pre>
      </div>
    </div>
  )
}
