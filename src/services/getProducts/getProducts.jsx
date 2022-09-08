import axios from 'axios'
import { useEffect, useState } from 'react'

import Localizator from '../../common/components/Localizator'
import { useNotificationContext } from '../../context/NotificationContext'
import { productsURL } from '../../utils/consts/productsConsts'

export const useGetProducts = () => {
  const [productsData, setProductsData] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  const { setNotificationOpen } = useNotificationContext()

  useEffect(() => {
    setIsLoading(true)
    const getProductsData = async () => {
      try {
        const response = await axios.get(productsURL)
        setProductsData(response.data)
        setIsLoading(false)
      } catch (e) {
        setNotificationOpen(<Localizator str="Something went wrong" />)
      }
    }

    getProductsData()
  }, [])
  return { productsData, isLoading }
}
