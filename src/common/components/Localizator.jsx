import { useEffect, useState } from 'react'
import translate from 'translate'
import { useUserSettingsContext } from '../../context/UserSettingsContext'

translate.engine = 'google'
translate.key = process.env.GOOGLE_KEY

const Localizator = ({ str }) => {
  const [text, setText] = useState(str)
  const { language } = useUserSettingsContext()

  useEffect(() => {
    const TranslateText = async () => {
      const res = await translate(str, language)
      setText(res)
    }
    TranslateText()
  }, [language, str])

  return <>{text}</>
}

export default Localizator
