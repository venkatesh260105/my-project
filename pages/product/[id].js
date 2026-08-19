import { useRouter } from "next/router";
import Navbar from "../../components/Navbar";
export default function ProductPage() {
 const router = useRouter();
 const { id } = router.query;
 return (
 <div>
 <Navbar />
 <h1>Product ID: {id}</h1>
 </div>
 );
}
