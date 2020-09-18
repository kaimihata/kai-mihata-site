import React from "react"
import useWindowDimensions from "../hooks/useWindowDimensions"

export default function Card({ title, subtitle, content, source, link }) {
  const { height, width } = useWindowDimensions()
  return (
    <div
      style={{
        height,
      }}
      className="cardContainer"
    >
      <div
        className="cardTextContainer"
        style={{
          width: width * 0.4,
        }}
      >
        <h3 className="cardTitleText">{title}</h3>
        <p className="cardSubtitleText">{subtitle}</p>
        <p className="cardSubtitleText">{content}</p>
        <div>

        <input type="button" class="cardButton" value="Input Button" onClick={() => {
          window.open(link);
        }} />
        </div>
      </div>
      <img
        style={{
          position: 'absolute',
          right: 200,
          width: 1080,
          height: 660,
          objectFit: "cover",
        }}
        src={source}
        alt="mockup"
      />
    </div>
  )
}
