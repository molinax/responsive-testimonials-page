import { listItems, testimonials } from './data'
import ListItemCheckout from './components/ListItemCheckout'
import StarFillIcon from './components/ui/icons/StarFill'
import TestimonialCard from './components/TestimonialCard'

const App = () => {
  return (
    <main className="w-[90%] max-w-5xl mx-auto my-24 flex flex-col gap-y-16 xl:max-w-7xl xl:flex-row xl:gap-x-28 xl:my-32">
      <section className="flex flex-col xl:flex-1">
        <header className="flex flex-col gap-y-2">
          <span className="bg-yellow/30 rounded-full p-2 self-start">
            <StarFillIcon />
          </span>
          <h1 className="text-dark text-heading font-semibold">Reviewers</h1>
        </header>
        <p className="text-body my-4">
          Reviewers is where people can access guidelines, checklists, and other
          tools to assist them in reviewing papers or manuscripts. It provides a
          structured approach to ensure that the review process is thorough,
          efficient, and consistent.
        </p>
        <ul className="flex flex-col gap-y-3">
          {listItems.map((item, i) => (
            <ListItemCheckout key={i} {...item} />
          ))}
        </ul>
      </section>
      <section className="grid grid-cols-4 gap-y-8 xl:flex-1">
        {testimonials.map((testimony, i) => (
          <TestimonialCard
            key={i}
            {...testimony}
            className={`col-span-full ${i === 0 ? 'sm:col-start-2' : 'sm:col-end-4'}`}
          />
        ))}
      </section>
    </main>
  )
}

export default App
