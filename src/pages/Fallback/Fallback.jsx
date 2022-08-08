import React from 'react'
import Localizator from '../../common/components/Localizator'

const Fallback = () => {
  return (
    <main style={{ padding: '1rem' }}>
      <Localizator str="There's nothing here!" />
    </main>
  )
}

export default Fallback
