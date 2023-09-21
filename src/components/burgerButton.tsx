interface Props {
  open: boolean
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const BurgerButton: React.FC<Props> = ({ open, setOpen }: Props) => {
  return (
    <button
      onClick={() => setOpen(!open)}
      className="md:hidden ml-4 flex flex-col justify-around w-6 h-6 bg-transparent cursor-pointer p-0 z-10 border-none top-8 right-8"
    >
      <span
        className="w-6 h-0.5 relative rounded-lg bg-text"
        style={{
          transform: open ? 'translateY(8px) rotate(45deg)' : 'rotate(0)',
          transition: 'all 0.3s linear',
        }}
      />
      <span
        className="w-6 h-0.5 relative rounded-lg bg-text"
        style={{
          opacity: open ? '0' : '1',
          transform: open ? 'translateX(24px)' : 'translateX(0)',
          transition: 'all 0.3s linear',
        }}
      />
      <span
        className="w-6 h-0.5 relative rounded-lg bg-text"
        style={{
          transform: open ? 'translateY(-8px) rotate(-45deg)' : 'rotate(0)',
          transition: 'all 0.3s linear',
        }}
      />
    </button>
  )
}

export default BurgerButton
