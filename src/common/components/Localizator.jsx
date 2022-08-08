import { useEffect, useState } from 'react'
import translate from 'translate'

translate.engine = 'google'
translate.key = process.env.GOOGLE_KEY

const Localizator = ({ str, lang }) => {
  const [text, setText] = useState(str)

  useEffect(() => {
    async function TranslateText() {
      const res = await translate(str, lang)
      return setText(res)
    }
    TranslateText()
  }, [lang, str])

  return <>{text}</>
}

export default Localizator
