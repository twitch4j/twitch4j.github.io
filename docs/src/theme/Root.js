import React from "react";
import App from "../components/App";

// Default implementation, that you can customize
export default function Root({ children }) {
  
  return (
    <>
      <App children={children} />
    </>
  )
}
