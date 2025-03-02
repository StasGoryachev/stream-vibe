import { Head } from "minista"
import Header from "@/layouts/Header"
import Content from "@/layouts/Content"
import Footer from "@/layouts/Footer/Footer"

export default function () {
  return (
    <>
      <Head htmlAttributes={{ lang: "en" }}>
        <title>Stream Vibe|Home</title>
      </Head>
      <Header />
      <Content />
      <Footer />
    </>
  )
}
