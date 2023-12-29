import { cookies } from 'next/headers'

export default function NavBar() {
    const cookieStore = cookies()
    const token = cookieStore.get('token')
    console.log(token)
    return (
        <nav>
            <a href="/">Home</a>
            <a href="/cart">Cart</a>
            <a href="/about">About</a>
            <a href="/shop">Shop</a>
            <a href="/auth">Auth</a>
      </nav>
    )
}