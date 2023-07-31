import React from "react"
import ContentLoader from "react-content-loader"

const Skeleton = (props) => (
  <ContentLoader
    className="pizza-block"
    speed={2}
    width={280}
    height={500}
    viewBox="0 0 280 500"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <circle cx="139" cy="125" r="125" />
    <rect x="0" y="266" rx="8" ry="8" width="280" height="26" />
    <rect x="0" y="308" rx="8" ry="8" width="280" height="85" />
    <rect x="3" y="416" rx="8" ry="8" width="95" height="30" />
    <rect x="127" y="408" rx="25" ry="25" width="150" height="45" />
  </ContentLoader>
)

export default Skeleton;