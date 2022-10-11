import '../styles/globals.css'
import Menu from "./Menu"
import Foot from "./Foot"

function MyApp({ Component, pageProps }) {
  return <div>
    <Menu/>
    <Component {...pageProps} />
    <Foot/>
    </div>
}

export default MyApp
