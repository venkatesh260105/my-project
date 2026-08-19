import { useEffect, useState } from 'react';
export default function Home() {
 const [products, setProducts] = useState([]);
 const [name, setName] = useState('');
 const fetchProducts = async () => {
 const res = await fetch('/api/products');
 const data = await res.json();
 setProducts(data); };
 const addProduct = async () => {
 await fetch('/api/products', {
 method: 'POST',
 headers: { 'Content-Type': 'application/json' },
 body: JSON.stringify({ name }),
 });
 setName('');
 fetchProducts();
 };
 const deleteProducts = async () => {
 await fetch('/api/products', { method: 'DELETE'
});
 fetchProducts(); };
 useEffect(() => {
 fetchProducts();
 }, []);
 return (
 <div style={{ padding: 20 }}>
 <h1>Product List</h1>
 <input
 type="text"
 value={name}
 onChange={(e) => setName(e.target.value)}
 placeholder="Product name"
 />
 <button onClick={addProduct}>Add</button>
 <button onClick={deleteProducts} style={{
marginLeft: 10 }}>Clear</button>
 <ul>
 {products.map((p) => (
 <li key={p.id}>{p.name}</li>
 ))}
 </ul>
 </div> );}