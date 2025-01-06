import NavBar from '../adminComponents/NavBar'
import {Inter} from 'next/font/google'

const inter = Inter({subsets: ["latin"], weight: ["100", "200", "300", "400", "500", "600", "700", "800"]})


export default function Layout({children}: any) {
    return (
        <div className={inter.className}>
        <NavBar  />
        {children}
        </div>
    )
}