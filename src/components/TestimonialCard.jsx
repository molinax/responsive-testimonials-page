import RateStars from './ui/RateStars'
import googleImg from '../../public/img/google-testimonial.png'
import metaImg from '../../public/img/meta-testimonial.png'

const companies = {
  google: googleImg,
  meta: metaImg
}

const TestimonialCard = ({ company, rate, user, testimony, className }) => {
  return (
    <article className={`bg-white flex flex-col gap-y-4 py-8 px-6 rounded-2xl shadow-sm ${className}`}>
      <header className="flex items-center gap-x-4">
        <img src={companies[company]} alt={company} className='w-28 object-contain' />
        <RateStars rate={rate} />
      </header>
      <section>
        <h3 className="text-dark text-body font-semibold mb-2">{user}</h3>
        <p className="text-sm-body">{testimony}</p>
      </section>
    </article>
  )
}

export default TestimonialCard
