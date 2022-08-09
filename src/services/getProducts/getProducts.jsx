import axios from 'axios'
import { useEffect, useState } from 'react'

import { productsURL } from '../../utils/consts/productsConsts'

export const useGetProducts = () => {
  const [prodsData, setProdsData] = useState([])
  const [prodsErr, setProdsErr] = useState(false)

  useEffect(() => {
    axios
      .get(productsURL)
      .then((res) => setProdsData(res.data))
      .catch((error) => setProdsErr(error))
  }, [])

  return { prodsData, prodsErr }
}
