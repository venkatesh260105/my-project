import { useEffect, useState } from "react";
export default function Users() {
 const [users, setUsers] = useState([]);
 const [loading, setLoading] = useState(true);
// Fetch data after component mounts
useEffect(() => {
fetch("https://jsonplaceholder.typicode.com/users")
.then((res) => res.json())
 .then((data) => {
 setUsers(data);
 setLoading(false);
 })
 .catch((err) => console.error("Failed to fetch users",
err));
 }, []);
if (loading) return <p>Loading users...</p>;
return (
 <div>
 <h1>Client-side Fetched Users</h1>
 <ul>
 {users.map((user) => (
 <li key={user.id}>
 {user.name} ({user.email})
 </li>
 ))}
 </ul>
 </div>
 );}