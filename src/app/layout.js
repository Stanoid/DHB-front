'use client'



import Context from "./context/context"






export default function Rootayout({ children }) {





 return (
    <html lang="en">
      <body>
      <Context>
        {children}
        </Context>
        </body>
    </html>
  )
}
