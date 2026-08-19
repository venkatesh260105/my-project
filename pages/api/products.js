let products = [
 { id: 1, name: "Laptop" },
 { id: 2, name: "Phone" },
];
export default function handler(req, res) {
 if (req.method === 'GET') {
res.status(200).json(products);
} else if (req.method === 'POST') {
 const { name } = req.body;
 if (!name) {
 return res.status(400).json({ error:
"Product name is required" });
 }
 const newProduct = {
 id: products.length + 1,
 name,
 };
 products.push(newProduct);
 res.status(201).json(newProduct);
 } else if (req.method === 'DELETE') {
 products = [];
 res.status(200).json({ message: "Allproducts deleted" });
 } else {
 res.setHeader('Allow', ['GET', 'POST',
'DELETE']);
res.status(405).end(`Method ${req.method}
Not Allowed`);
 }
}