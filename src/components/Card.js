import React from "react"
import useWindowDimensions from "../hooks/useWindowDimensions"

export default function Card({
  title,
  subtitle,
  content,
  source,
  link,
  buttonName,
  orientation,
}) {
  const { height, width } = useWindowDimensions()
  return (
    <div
      style={{
        height,
      }}
      className="cardContainer"
    >
      <div
        className={
          orientation && orientation === "right"
            ? "rightCardTextContainer"
            : "cardTextContainer"
        }
        style={{
          width: width * 0.4,
        }}
      >
        <h3 className="cardTitleText">{title}</h3>
        <p className="cardSubtitleText">{subtitle}</p>
        <p className="cardSubtitleText">{content}</p>
        <div>
          <input
            type="button"
            class="cardButton"
            value={buttonName}
            onClick={() => {
              window.open(link)
            }}
          />
        </div>
      </div>
      {orientation && orientation === "right" ? (
        <img
          style={{
            position: "absolute",
            left: 200,
            width: 1080,
            height: 660,
            objectFit: "cover",
          }}
          src={source}
          alt="mockup"
        />
      ) : (
        <img
          style={{
            position: "absolute",
            right: 200,
            width: 1080,
            height: 660,
            objectFit: "cover",
          }}
          src={source}
          alt="mockup"
        />
      )}
    </div>
  )
}
