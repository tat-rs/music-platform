import NavBar from "../components/NavBar";
import Player from "../components/Player";

interface LayoutProps {
  children: React.ReactNode
}

export default function Layout({children}: LayoutProps) {
  return (
    <>
      <NavBar />
      <main>
        {children}
      </main>
      <Player />
    </>
  )
}