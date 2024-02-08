import { useState } from 'react'


import Header from './component/Header/Header'
import Body from './component/Body/Body'

function resumeApp() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <Header/> */}
      <Body/>
    </>
  )
}

export default resumeApp
