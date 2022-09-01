import { useState } from 'react'

const useOrderModal = () => {
  const [isOpen, setIsOpen] = useState(false)

  const setOpen = () => {
    setIsOpen(true)
  }

  const setClose = () => {
    setIsOpen(false)
  }

  return { isOpen, setOpen, setClose }
}

export default useOrderModal
