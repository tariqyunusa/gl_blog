import NavBar from '../adminComponents/NavBar'

export default function Layout({children}: any) {
    return (
        <>
        <NavBar  />
        {children}
        </>
    )
}