    import Link from "next/link";
import { useRouter } from "next/router";
export default function Navbar() {
 const router = useRouter();
 return (
 <nav style={{ display: "flex", gap: "1rem", marginBottom: "20px" }}>
 <Link href="/">Home</Link>
 <Link href="/about">About</Link>
 <Link href="/contact">Contact</Link>
 <Link href="/users/profile">User Profile</Link>
 <button onClick={() => router.push("/products/101")}>
 Go to Product 101
 </button>
 </nav>
 );
}