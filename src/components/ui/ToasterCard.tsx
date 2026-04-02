export default function ToasterCard() {
  return (
    <div className="relative w-[88vw] max-w-[1520px] aspect-[1.72/1]">
      <div className="absolute inset-0 translate-x-[2.5%] translate-y-[3.5%] rotate-[0.4deg] rounded-[58px] bg-azure-500" />

      <div className="absolute inset-0 -rotate-[3.2deg] rounded-[58px] bg-azure-100">
        <div className="h-full w-full rotate-[3.2deg] p-[6%]">
          <h1 className="text-4xl font-bold">Espace Public Numérique Mobile</h1>
          <p className="mt-6 text-xl tracking-[0.3em] uppercase text-violet-600">
            Inclusion numérique mobile
          </p>
        </div>
      </div>
    </div>
  )
}
