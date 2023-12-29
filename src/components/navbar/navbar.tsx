import { cookies } from 'next/headers'

export default function NavBar() {
    const cookieStore = cookies()
    const auth = cookieStore.get('auth')
    console.log(auth)
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