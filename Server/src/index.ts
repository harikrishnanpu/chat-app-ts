import type { Request, Response } from 'express';
import express from 'express';
import authRouter from './routes/authRoutes.js';




const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json())


app.get('/', (req: Request, res: Response) => {
  res.send('Hello, World!');
});

app.use("/api/v1/auth" , authRouter)

app.post('/users', (req: Request, res: Response) => { 

    const { name, email, age } = req.body;

    console.log(`Received user data: Name - ${name}, Email - ${email}, Age - ${age}`);

    res.status(201).send({ message: 'User created successfully' });

});



app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});