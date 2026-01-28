import { Suspense } from "react"



function SuspenseHoc({ children}: {children: React.ReactNode}) {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      {children}
    </Suspense>
  )
}

export default SuspenseHoc