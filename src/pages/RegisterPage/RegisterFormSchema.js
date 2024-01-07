import { z } from 'zod';

const registerformSchema = z.object({
    name: z.string().min(1, 'Informe um nome válido'),
    email: z.string().min(1, 'Informe o e-mail').email('Informe o e-mail'),
    password: z.string().min(8, {message: 'Mínimo de 8 caracteres'})
    .regex(/(?=.*?[A-Z])/, 'É necessário ao menos uma letra maiúscula')
    .regex(/(?=.*?[a-z])/, 'É necessário ao menos uma letra minúscula')
    .regex(/(?=.*?[0-9])/, 'É necessário pelo menos um número'),    
    confirm: z.string().min(1, 'A confirmação de senha é obrigatória'),
    bio: z.string().min(1, 'Informação inválida'),
    contact: z.string().min(1, 'Informe um contato válio'),
    course_module: z.string().min(1, 'Informe o módulo'),
}).refine(({password, confirm}) => password === confirm, {
message: 'As senhas precisam corresponder',
path: ['confirm'],
})

export default registerformSchema