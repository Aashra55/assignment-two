import Link from "next/link";

export default function Header(){
    return(
        <div>
            <ul>
                <Link href={"/"}><li>Home</li></Link>
                <Link href={"/Portfolio"}><li>Portfolio</li></Link>
                <Link href={"/Contact"}><li>Contact Us</li></Link>
            </ul>
        </div>
    )
}