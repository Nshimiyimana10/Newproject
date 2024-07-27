import React from 'react'

export default function Footer(props) {
  return (
    <footer>
        <h3>{props.word}&copy;{new Date().getFullYear()}</h3>
    </footer>
  )
}
