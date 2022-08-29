import { useAdminDataContext } from '../../context/AdminUsersDataContext'
import { useNotificationContext } from '../../context/NotificationContext'

const useAdminCRUD = () => {
  const { adminProducts, removeProductData } = useAdminDataContext()
  const { setNotificationOpen } = useNotificationContext()

  const removeProduct = (id) => {
    const tempItem = adminProducts.find((item) => item.id === id)

    removeProductData(tempItem.id)

    setNotificationOpen(`${tempItem.title} was removed from your list!`)
  }

  return { removeProduct }
}

export default useAdminCRUD
