import Link from 'next/link'

export default function ArrowButton() {
  return (
    <Link href='/shop'>
        <button className='text-sm text-gray-500'>ArrowButton</button>
    </Link>
  )
}