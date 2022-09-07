import { useState, useMemo } from 'react'

import { useGetProducts } from '../../services/getProducts/getProducts'
import useCategories from './useCategories'
import sortProducts from '../helpers/sortProducts'

const useProductPagination = () => {
  const [sortValue, setSortValue] = useState('')
  const { selectedCategory, setSelectedCategory } = useCategories()
  const { productsData } = useGetProducts()

  const getFilteredProducts = () => {
    sortProducts(sortValue, productsData)

    if (!selectedCategory || selectedCategory === 'all') {
      return productsData
    }

    if (selectedCategory) {
      return productsData.filter(
        (product) => product.category === selectedCategory,
      )
    }
  }

  const handleSortValue = (event) => {
    setSortValue(event.target.value)
  }

  const handleCategory = (category) => {
    setSelectedCategory(category)
  }

  const filteredProducts = useMemo(getFilteredProducts, [
    selectedCategory,
    sortValue,
    productsData,
  ])

  return {
    handleCategory,
    filteredProducts,
    sortValue,
    handleSortValue,
  }
}

export default useProductPagination
