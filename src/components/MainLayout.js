import React from 'react'

export default function MainLayout({ children }) {
  return (
    <div
      style={{
        marginLeft: 100,
        marginRight: 100,
      }}
    >
      {children}
    </div>
  )
}
