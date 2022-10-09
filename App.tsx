import { Home } from './src/screens/Home/index'
import { StatusBar } from 'react-native'

export default function App() {
  return (
    <>
      <StatusBar
        barStyle='default'
        backgroundColor='transparent'
        translucent
      />
      <Home />
    </>

  )
}