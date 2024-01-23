import { useEffect } from "react"
import styles from "./App.module.css"
import Counter from "./components/Counter/Counter"
import Layout from "./components/Layout/Layout"
import Logo from "./components/Logo/Logo"
import Message from "./components/Message/Message"
import Thermometer from "./components/Thermometer/Thermometer"
import { useAppDispatch } from "./store"
import { getStuffy } from "./store/asyncActions"

function App() {
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(getStuffy())
  }, [dispatch])

  useEffect(() => {
    const id = setInterval(() => {
      dispatch(getStuffy())
    }, 60_000)

    return () => clearInterval(id)
  }, [dispatch])

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>ДУШНИЛА</h1>
      <Layout>
        <Message />
        <Thermometer />
        <Counter />
        <Logo />
      </Layout>
    </div>
  )
}

export default App
