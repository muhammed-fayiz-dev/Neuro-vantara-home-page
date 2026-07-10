import Image from "next/image"

const Navbar = () => {
  return (
    <header className="flex absolute inset-x-0 top-0 z-20">
      <div className="relative mx-auto flex h-24 max-w-container items-center px-container">
        {/* Left */}
        <button className="z-10">
          <Image src="/icon/menu.svg" alt="" width={32} height={32} />
        </button>

        {/* Center */}
        <h1 className="absolute left-1/2 -translate-x-1/2 bg-neuro-gradient bg-clip-text text-section font-light lowercase text-transparent">
          neuro vanta
        </h1>

        {/* Right */}
        <div className="ml-auto flex items-center gap-4">
          <button className="text-white uppercase">Contact</button>

          <button>
            <Image src="/icon/search.svg" alt="" width={22} height={22} />
          </button>
        </div>
      </div>
    </header>
  )
}

export default Navbar
