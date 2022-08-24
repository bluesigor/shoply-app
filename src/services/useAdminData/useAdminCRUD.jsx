import { useAdminDataContext } from '../../context/AdminUsersDataContext'

const useAdminCRUD = () => {
  const { adminProducts, setAdminProductsData } = useAdminDataContext()

  const removeProduct = (id) => {
    const tempItem = adminProducts.find((item) => item.id === id)

    if (tempItem) {
      const specificItem = adminProducts.filter((item) => item.id !== id)

      setAdminProductsData(specificItem)
    }
  }

  return { removeProduct }
}

export default useAdminCRUD
