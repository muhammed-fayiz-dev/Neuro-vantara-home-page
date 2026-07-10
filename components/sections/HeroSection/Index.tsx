import Navbar from "@/components/layout/Navbar"

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Background video */}
      <video
        className="absolute inset-0 h-full w-full object-cover"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src="/Neuro_vanta_Header_1.mp4" type="video/mp4" />
      </video>

      <Navbar />
      <div className="absolute inset-0 bg-black/40" />


      <div className="relative z-10 flex min-h-screen flex-col items-center justify-center text-center text-white">
        <h1 className="text-hero uppercase">Advanced Longevity.</h1>

        <h1 className="text-hero uppercase">Designed for Life Performance.</h1>
      </div>
    </section>
  )
}
