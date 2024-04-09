'use client'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel } from '@/shadcn/form'
import { Input } from '@/shadcn/input'

export const LoginForm = () => {
    const schema = z.object({
        email: z.string().min(8).max(30),
        password: z.string().min(8).max(30)
    })

    type formSchema = z.infer<typeof schema>

    const form = useForm<formSchema>({
        resolver: zodResolver(schema)
    })

    function onSubmit(values: formSchema) {
        console.log(values)
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
                <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                        <Input placeholder="username" {...field} />
                        // <FormItem>
                        //     <FormLabel>
                        //         Username
                        //     </FormLabel>
                        //     <FormControl>
                        //         <Input placeholder="username" {...field} />
                        //     </FormControl>
                        //     <FormDescription>
                        //         Insert your email
                        //     </FormDescription>
                        //     {/* <FormMessage /> */}
                        // </FormItem>
                    )}
                />
            </form>
        </Form>
    )
}

export const Page = () => {
    return (
        <section id='content' className='flex flex-col min-h-svh bg-gray-50 p-4'>
            <header className="flex justify-end items-center h-[32px] bg-red-200">
                <span className='text-slate-800 font-semibold'>Login</span>
            </header>

            <section id='page-content' className="bg-purple-200 grow">
                <div id='content-top' className="mt-4 bg-slate-400">
                    <h1 className="text-slate-800 text-lg font-bold">Sign up</h1>
                </div>
                <div id='content-center' className='p-4'>
                    <LoginForm />
                    <button type="submit" className="btn">Submete caceta!</button>
                </div>
            </section>
        </section>
    )
}