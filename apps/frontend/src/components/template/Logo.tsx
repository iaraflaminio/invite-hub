import { Righteous } from 'next/font/google'
import Link from 'next/link'

const font = Righteous({
    subsets: ['latin'],
    weight: "400",
})

export default function Logo() {
    return (
        <Link href="/" className={` flex items-center gap-2 ${font.className} `}>
            <span>Logo</span>
        </Link>
    )
}