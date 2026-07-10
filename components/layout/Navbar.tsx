import Image from "next/image"

const Navbar = () => {
  return (
    <header className="absolute inset-x-0 top-0 z-20 px-100">
      <div className="flex justify-between">
        {/* Left */}
        <button className="z-10">
          <Image src="/icon/menu.svg" alt="" width={32} height={32} />
        </button>

        {/* Center */}
        <h1 className="
        max-w-2xl
        text-center
        
        leading-none
        font-light
        lowercase
        tracking-tight
        bg-neuro-gradient
        bg-clip-text
        text-transparent text-section">
          neuro vanta
        </h1>

        {/* Right */}
        <div className=" flex items-center gap-4">
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
