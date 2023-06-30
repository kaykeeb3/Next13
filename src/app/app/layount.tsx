import { ReactNode } from 'react'

interface AppLayountProps {
  children: ReactNode
}

export default function AppLayount({ children }: AppLayountProps) {
  return (
    <div>
      <h1>App</h1>
      {children}
    </div>
  )
}
