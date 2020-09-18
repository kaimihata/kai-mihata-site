import React from 'react'
import Header from '../components/Header'
import MainLayout from '../components/MainLayout'
import { Helmet } from "react-helmet"

export default function About() {
  return (
    <div>
      <Helmet>
        <title>Kai Mihata.</title>
      </Helmet>
      <Header selected="About" />
      <MainLayout>
        <div className="aboutContainer">
          <div className="aboutContent">
            <h1>hi</h1>
          </div>
          <div className="aboutImage">
            <h1>h2</h1>
          </div>
        </div>
      </MainLayout>
    </div>
  )
}
