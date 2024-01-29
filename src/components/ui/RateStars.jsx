import StarFillIcon from './icons/StarFill'
import StarFillGrayIcon from './icons/StarFillGray'

const RateStars = ({ rate }) => {
  const maxRate = 5

  const renderRateStars = () => {
    const starsCollection = []

    for (let i = 0; i < maxRate; i++) {
      if (i >= rate) {
        starsCollection.push(<StarFillGrayIcon />)
      } else {
        starsCollection.push(<StarFillIcon />)
      }
    }

    return starsCollection.map((star, i) => <li key={i}>{star}</li>)
  }

  return (
    <ul className="flex">
      {renderRateStars()}
    </ul>
  )
}

export default RateStars
