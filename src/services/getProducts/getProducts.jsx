import axios from 'axios'
import { useEffect, useState } from 'react'

import Localizator from '../../common/components/Localizator'
import { useNotificationContext } from '../../context/NotificationContext'
import { productsURL } from '../../utils/consts/productsConsts'

export const useGetProducts = () => {
  const [productsData, setProductsData] = useState([])

  const { setNotificationOpen } = useNotificationContext()

  useEffect(() => {
    const getProductsData = async () => {
      try {
        const response = await axios.get(productsURL)
        setProductsData(response.data)
      } catch (e) {
        setNotificationOpen(<Localizator str="Something went wrong" />)
      }
    }

    getProductsData()
  }, [])
  return { productsData }
}
