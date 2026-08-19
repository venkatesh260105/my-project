export default function handler(req, res) {
 switch (req.method) {
 case 'GET':
 res.status(200).json({ message: 'Fetching user' });
 break;
 case 'POST':
 res.status(201).json({ message: 'User created' }); 
 
break;
case 'PUT':
 res.status(200).json({ message: 'Userupdated' });
 break;
 case 'DELETE':
 res.status(200).json({ message: 'Userdeleted' });
 break;
 default:
 res.setHeader('Allow', ['GET', 'POST',
'PUT', 'DELETE']);
 res.status(405).end(`Method
${req.method} Not Allowed`);
 }
}