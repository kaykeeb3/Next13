import { ReactNode } from 'react'

interface AuthLayountProps {
  children: ReactNode
}

export default function AuthLayount({ children }: AuthLayountProps) {
  return (
    <div>
      <h1>Auth</h1>
      {children}
    </div>
  )
}
