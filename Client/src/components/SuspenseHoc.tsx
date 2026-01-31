import { Suspense } from "react"



function SuspenseHoc({ children}: {children: React.ReactNode}) {
  return (
    <Suspense fallback={<div className="min-w-screen text-center">Loading...</div>}>
      {children}
    </Suspense>
  )
}

export default SuspenseHoc