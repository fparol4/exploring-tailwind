
'use client'
import { getUsers } from '@/providers/users-service.provider'
import { useState } from 'react'

export default async function Home() {
    const [currentPage, setCurrentPage] = useState(1)

    const users = await getUsers(currentPage)

    function changePage(page: number) {
        let nextPage = page === 0 ? 1 : page
        setCurrentPage(nextPage)
    }

    return (
        <div>
            <div>
                <ul className='flex flex-col divide-y-4'>
                    {users.map((u, k) => (
                        <li key={k} className='odd:bg-slate-300 even:bg-slate-400 max-w-[500px] flex flex-col'>
                            <span>Name: {u.name}</span>
                            <span>Email: {u.email}</span>
                            <span>Password: {u.password}</span>
                        </li>
                    ))}
                </ul>
                <div>
                    <button onClick={() => changePage(currentPage - 1)} className='bg-rose-400 text-white p-3 rounded-sm'>Anterior</button>
                    <button onClick={() => changePage(currentPage + 1)} className='bg-green-400 text-white p-3 rounded-sm'>Proxima</button>
                </div>
            </div>
        </div>
    )
}