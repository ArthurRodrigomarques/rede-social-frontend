import Login from "@/components/login"

export default function Home() {
  return (
    <main className="w-screen h-screen">
      {/* Conteúdo para telas pequenas (sm) */}
      <div className="sm:hidden">
        <Login />
      </div>

      {/* Conteúdo para telas maiores (md e acima) */}
      <div className="hidden md:grid md:grid-cols-2">
        <div className=" w-full border-r-4 h-screen bg-secondary">
          <h1>ola mundo</h1>
        </div>
        <div>
          <Login />
        </div>
      </div>
    </main>
  )
}
