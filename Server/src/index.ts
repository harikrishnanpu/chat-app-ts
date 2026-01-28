import type { Request, Response } from 'express';
import express from 'express';




const app = express();
const PORT = process.env.PORT || 3000;


app.get('/', (req: Request, res: Response) => {
  res.send('Hello, World!');
});


app.post('/users', (req: Request, res: Response) => { 

    const { name, email, age } = req.body;

    console.log(`Received user data: Name - ${name}, Email - ${email}, Age - ${age}`);

    res.status(201).send({ message: 'User created successfully' });

});



app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});