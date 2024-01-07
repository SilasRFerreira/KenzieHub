import { z } from 'zod';

const formSchema = z.object({
    email: z.string().min(1, 'Informe o e-mail').email('Informe o e-mail'),
    password: z.string().min(1, 'Informe a senha') 
})

export default formSchema