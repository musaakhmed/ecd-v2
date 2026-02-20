import PartnerCard from '@/components/ui/PartnerCard'

const Partners = () => {
  return (
    <section className="flex flex-col items-center justify-around min-h-[30vh] md:p-6 p-2 bg-primary-100 border-t border-primary-200">
      <div className="container mx-auto px-4 w-full">
        <h2 className="text-lg font-bold lg:text-2xl text-secondary-900 mb-4">Nos Soutiens</h2>
        <PartnerCard />
      </div>
    </section>
  )
}

export default Partners
