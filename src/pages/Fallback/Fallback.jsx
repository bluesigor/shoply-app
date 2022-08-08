import React from 'react'
import Localizator from '../../common/components/Localizator'
import { useUserSettingsContext } from '../../context/UserSettingsContext'

const Fallback = () => {
  const { language } = useUserSettingsContext()

  return (
    <main style={{ padding: '1rem' }}>
      <p>
        <Localizator lang={language} />
        There's nothing here!
      </p>
    </main>
  )
}

export default Fallback
