import { useMemo, useEffect, useState } from 'react'

import { useGetProducts } from '../../services/getProducts/getProducts'
import useCategories from './useCategories'
import sortProducts from '../helpers/sortProducts'

const useProductPagination = () => {
  const [searchItem, setSearchItem] = useState('')
  const [isFallbackProduct, setIsFallbackProduct] = useState(false)
  const [sortValue, setSortValue] = useState('')
  const [filteredProducts, setFilteredProducts] = useState([])

  const { productsData } = useGetProducts()
  const { selectedCategory, setSelectedCategory } = useCategories()

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

  const memoizedFilter = useMemo(getFilteredProducts, [
    selectedCategory,
    productsData,
    sortValue,
  ])

  useEffect(() => {
    setFilteredProducts(memoizedFilter)
  }, [memoizedFilter])

  const handleCategory = (category) => {
    setSelectedCategory(category)
  }

  const searchProduct = () => {
    const tempItem = filteredProducts.filter((product) =>
      product.title.toLowerCase().includes(searchItem.toLowerCase()),
    )

    if (tempItem) {
      setFilteredProducts(tempItem)
    }

    if (tempItem.length === 0 || !searchItem) {
      setIsFallbackProduct(true)
    }
  }

  const resetSearch = () => {
    setSearchItem('')
    setFilteredProducts(productsData)
    setIsFallbackProduct(false)
  }

  return {
    handleCategory,
    filteredProducts,
    sortValue,
    setSortValue,
    setSearchItem,
    searchItem,
    searchProduct,
    resetSearch,
    isFallbackProduct,
  }
}

export default useProductPagination
