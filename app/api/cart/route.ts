let cart: {}[] = []

export async function GET() {
  try {
    return Response.json(
      cart
      , { status: 200 })
  } catch (err) {
    console.log(err)
  }
}

export async function POST(request: Request) {
  try {
    const res = await request.json()
    cart.push(res)
    console.log(cart)
    return Response.json({ res }, { status: 200 })
  } catch (err) {
    console.log(err)
  }
}
