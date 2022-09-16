import { useState, useEffect } from 'react'
import { useGetProducts } from '../../services/getProducts/getProducts'

const useCategories = () => {
  const [allCategories, setAllCategories] = useState([])
  const [selectedCategory, setSelectedCategory] = useState()
  const { productsData } = useGetProducts()

  useEffect(() => {
    const categories = [
      'all',
      ...new Set(productsData.map((product) => product.category)),
    ]

    setAllCategories(categories)
  }, [selectedCategory, productsData])

  return {
    allCategories,
    setSelectedCategory,
    selectedCategory,
  }
}

export default useCategories
