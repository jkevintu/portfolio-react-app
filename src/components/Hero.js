import React from "react";

const homePageHeroStyle = {
  minHeight: "100vh",
  background: "url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAGCAYAAADgzO9IAAAAOElEQVQIW2MUFBT8//79ewYQALLBNIjP6OLiApe4d+8eg5KSEsPZs2chEiAGSIB4CZgdKDpwWQ4A7Mc2AV5T93AAAAAASUVORK5CYII=) repeat",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  color: "white",
}

const codeStyle = {
  padding: "0 40px"
}

const homePageBlock = () => {
  return (
    <code style={codeStyle}>
      Be not afraid of greatness: 
      some are born great, 
      some achieve greatness, 
      and some have greatness thrust upon them.
    </code>
  )
}

export default function Hero(props) {
  return (
    <div>
      <div style={(props.isHomepage) ? homePageHeroStyle : ''}>
        {(props.isHomepage) ? homePageBlock() : ''}
      </div>
    </div>
  )
}
