import Head from "next/head";
import NavBar from "../components/NavBar";
import Player from "../components/Player";

interface MainLayoutProps {
  title?: string;
  description?: string;
  keywords?: string;
  children: React.ReactNode
}

export default function MainLayout({title, description, keywords, children}: MainLayoutProps) {

  return (
    <>
      <Head>
        <title>{title || 'Музыкальная площадка'}</title>
        <meta name="description" content={`Музыкальная площадка. Здесь каждый может оставить свой трек и стать знаменитым.` + description}/>
        <meta name="robots" content="index, follow"/>
        <meta name="keywords" content={keywords || "Музыка, треки, артисты"}/>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
      </Head>
      <header>
        <NavBar />
      </header>
      <main>
        {children}
      </main>
      <Player />
    </>
  )
}
