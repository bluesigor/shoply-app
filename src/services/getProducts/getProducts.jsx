import axios from 'axios'
import { useEffect, useState } from 'react'

import Localizator from '../../common/components/Localizator'
import { useAdminDataContext } from '../../context/AdminUsersDataContext'
import { useNotificationContext } from '../../context/NotificationContext'
import { productsURL } from '../../utils/consts/productsConsts'

export const useGetProducts = () => {
  const [productsData, setProductsData] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const { setNotificationOpen } = useNotificationContext()
  const { setAdminProductsData } = useAdminDataContext()

  useEffect(() => {
    const getProductsData = async () => {
      setIsLoading(true)

      try {
        const response = await axios.get(productsURL)

        setTimeout(() => {
          setIsLoading(false)
        }, 1000)
        setAdminProductsData(response.data)
        setProductsData(response.data)
      } catch (e) {
        setNotificationOpen(<Localizator str="Something went wrong" />)
      }
    }

    getProductsData()

    return () => clearTimeout()
  }, [])

  return { productsData, isLoading }
}
