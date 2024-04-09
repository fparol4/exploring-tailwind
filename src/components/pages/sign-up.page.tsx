'use client'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from '@/lib/pt-zod'
import Link from 'next/link'
import { Github, Computer } from 'lucide-react'

import { Form, FormControl, FormField, FormItem, FormMessage } from '@/sdcn/form'
import { Input } from '@/sdcn/input'
import { Button } from '@/sdcn/button'
import { addUser } from '@/providers/users-service.provider'

// @TODO: Adicionar mask formatter para CPF 
export const LoginForm = () => {
    const schema = z.object({
        email: z.string().email(),
        password: z.string().min(8).max(30),
        confirmPassword: z.string().min(8).max(30),
        document: z.string().min(11).max(15)
    }).refine((data) => data.password === data.confirmPassword, {
        message: "Senha de confirmação não corresponde",
        path: ['confirmPassword']
    })

    type formSchema = z.infer<typeof schema>

    const form = useForm<formSchema>({
        resolver: zodResolver(schema),
        defaultValues: {
            email: '', password: '', document: '', confirmPassword: ''
        }
    })

    async function onSubmit(values: formSchema) {
        const payload = {
            name: values.email.split('@')[0],
            email: values.email, 
            password: values.password,
            document: values.document
        }
        const added = await addUser(payload)
        console.log('User added->', added)
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className='flex flex-col gap-4'>
                <FormField
                    control={form.control}
                    name="email"
                    render={({ field, formState }) => {
                        const hasError = !!formState.errors.email;
                        return (
                            <FormItem>
                                <FormControl>
                                    <Input error={hasError} placeholder="E-mail" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )
                    }}
                />
                <FormField
                    control={form.control}
                    name="password"
                    render={({ field, formState }) => {
                        const hasError = !!formState.errors.password;
                        return (
                            <FormItem>
                                <FormControl>
                                    <Input type="password" error={hasError} placeholder="Password" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )
                    }}
                />
                <FormField
                    control={form.control}
                    name="confirmPassword"
                    render={({ field, formState }) => {
                        const hasError = !!formState.errors.confirmPassword;
                        return (
                            <FormItem>
                                <FormControl>
                                    <Input type="password" error={hasError} placeholder="Confirm password" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )
                    }}
                />
                <FormField
                    control={form.control}
                    name="document"
                    render={({ field, formState }) => {
                        const hasError = !!formState.errors.document;
                        return (
                            <FormItem>
                                <FormControl>
                                    <Input error={hasError} placeholder="Document" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )
                    }}
                />
                <Button type="submit" variant='default'>Sign up</Button>
            </form>
        </Form>
    )
}

export const Page = () => {
    return (
        <section id='main' className='flex flex-col min-h-svh items-center p-4 '>
            <section id='page-content' className="grow flex flex-col gap-4 w-full max-w-md">
                <div className="flex justify-end items-center h-[32px]">
                    <Link href="/login">
                        <span className='text-slate-800 font-semibold'>Login</span>
                    </Link>
                </div>
                <div id='top' className="mt-4">
                    <h1 className="text-slate-800 text-lg font-bold">Sign up</h1>
                </div>
                <div id='form' className=''>
                    <LoginForm />
                    <p className='text-slate-900 text-sm text-center mt-6'>Or sign up with social account</p>
                    <div id='social-auth' className='flex justify-center gap-6 mt-6'>
                        <Link href="/login">
                            <Button variant='outline' className='px-8 rounded-full'>
                                <span className='text-slate-800'>
                                    <Github />
                                </span>
                                <span className='ml-2'>Github</span>
                            </Button>
                        </Link>
                        <Link href="/">
                            <Button variant='outline' className='px-8 rounded-full'>
                                <span className='text-slate-800'>
                                    <Computer />
                                </span>
                                <span className='ml-2'>Google</span>
                            </Button>
                        </Link>
                    </div>
                </div>
                <div id='footer' className='mt-auto m-auto mb-12 w-[260px]'>
                    <p className='text-center text-sm'>
                        By signin up you agree to our stroke <span className='underline'>To our terms of Use</span> and <span className='underline'>Privacy Policy</span>
                    </p>
                </div>
            </section>
        </section>
    )
}