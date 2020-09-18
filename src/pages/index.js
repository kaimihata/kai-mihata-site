import React, { useRef, useState, useEffect} from "react"
import Card from "../components/Card"
import Header from "../components/Header"
import useWindowDimensions from "../hooks/useWindowDimensions"
import "../styles/global.css"
import { Helmet } from "react-helmet"

export default function Home() {
  const { height } = useWindowDimensions()
  const [isSticky, setSticky] = useState(false)
  const ref = useRef(null)
  const handleScroll = () => {
    if (ref.current) {
      setSticky(ref.current.getBoundingClientRect().top <= 0)
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", () => handleScroll)
    }
  }, [])
  return (
    <main>
      <Helmet>
        <title>Kai Mihata.</title>
      </Helmet>
      <div className="container">
        <div className="content">
          <div
            className={`sticky-wrapper${isSticky ? " sticky" : ""}`}
            ref={ref}
          >
            <Header selected="Home" />
          </div>
          <div className="titleContainer">
            <p className="titleText" style={{ paddingTop: height * 0.2 }}>
              Hi, My name is Kai Mihata
            </p>
            <p className="subtitleText">
              Computer Science and Statistics student with a passion for machine
              learning and design
            </p>
          </div>
          <div
            className="cardContentTitleContainer"
            style={
              {
                // width,
              }
            }
          >
            <h1 className="cardContentTitleText">Projects</h1>
          </div>
          <Card
            title="Portals.net"
            source="https://raw.githubusercontent.com/kaimihata/kai-mihata-site/master/src/assets/portals_mockup.png"
            subtitle="React Native, Redux, GraphQL, AWS"
            content="Hosted items and promotional content for virtual experiences"
            link="https://github.com/kaimihata/repeat-receipt"
            buttonName="App Store"
            orientation="left"
          />
          <Card
            title="Title"
            source="https://assets-global.website-files.com/5bfd6f4468ee7943c2d331dd/5c041c8e44cfacb5d42ed502_Black.jpg"
            subtitle="React Native, AWS"
            content="Content"
            link="https://github.com/kaimihata/repeat-receipt"
            buttonName="Link"
            orientation="right"
          />
        </div>
      </div>
    </main>
  )
}
