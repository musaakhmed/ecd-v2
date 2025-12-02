import PartnerCard from '@/components/ui/PartnerCard'

const Partners = () => {
  return (
    <section className="flex flex-col items-center justify-around min-h-[50vh] md:p-12 p-2 bg-primary-50">
      <h2 className="text-lg font-semibold lg:text-2xl text-secondary-800">Nos Soutiens</h2>
      <PartnerCard />
    </section>
  )
}

export default Partners
