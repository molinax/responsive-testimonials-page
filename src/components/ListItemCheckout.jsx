import DoneRingIcon from './ui/icons/DoneRing'

const ListItemCheckout = ({ isChecked, content }) => {
  return (
    <li className="inline-flex gap-x-1 text-list-items">
      {isChecked && <DoneRingIcon className="flex-initial" />}
      <p className="flex-1">{content}</p>
    </li>
  )
}

export default ListItemCheckout
