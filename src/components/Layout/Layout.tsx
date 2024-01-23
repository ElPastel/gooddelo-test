import { PropsWithChildren } from "react"
import styles from "./Layout.module.css"

function Layout({ children }: PropsWithChildren) {
  return <main className={styles.grid}>{children}</main>
}

export default Layout
