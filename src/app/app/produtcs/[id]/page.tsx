interface ProductProps {
  parms: {
    id: string
  }
}

export default function Product({ parms }: ProductProps) {
  return <h1>Product: {parms.id}</h1>
}
