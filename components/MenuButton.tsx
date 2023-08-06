import Image from "next/image"

const MenuButton = () => {
  return (
    <button>
      <Image width={20} height={20} src='/icons/hambuger_menu-icon.svg' alt='search-icon' />
    </button>
  )
}

export default MenuButton
