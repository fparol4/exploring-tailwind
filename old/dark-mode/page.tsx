'use client'
import { ThemeSwitcher } from '@/components/primitives/ThemeSwitcher/component'

export const Icon = () => (
    <span className="inline-flex items-center justify-center p-2 bg-indigo-500 rounded-md shadow-lg">
        <svg className="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path>
        </svg>
    </span>
)

export default function DarkPage() {

    const sample_1 = () => (
        <div className='p-12 flex gap-8 w-[700px] m-auto bg-gray-100'>
            <div id="light" className="w-1/2 ">
                <span className="font-medium text-sm text-slate-600">Light mode</span>
                <div className="px-8 py-10 bg-white rounded-sm mt-2 shadow-sm shadow-slate-300">
                    <div id='content'>
                        <Icon />
                        <div className="mt-3">
                            <h3 className='font-medium text-slate-900 tracking-tight'>Writes upside-down</h3>
                            <span className='text-slate-500 tracking-tight text-sm'>The Zero Gravity Pen can be used to write in any orientation, including upside-down. It even works in outer space.</span>
                        </div>
                    </div>
                </div>
            </div>
            <div id="dark" className="w-1/2">
                <span className="font-medium text-sm text-slate-600">Dark mode</span>
                <div className="px-8 py-10 bg-slate-800 rounded-sm mt-2 shadow-sm">
                    <div id='content'>
                        <Icon />
                        <div className="mt-3">
                            <h3 className='font-medium text-white tracking-tight'>Writes upside-down</h3>
                            <span className='text-slate-400 tracking-tight text-sm'>The Zero Gravity Pen can be used to write in any orientation, including upside-down. It even works in outer space.</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

    const sample_2 = () => (
        <div className='p-12 flex gap-8 mt-12 w-[700px] m-auto bg-gray-100'>
            <div id="light" className="w-1/2 m-auto">
                <span className="font-medium text-sm text-slate-600">Light mode</span>
                <div className="px-8 py-10 bg-white dark:bg-slate-800 rounded-sm mt-2 shadow-sm shadow-slate-300">
                    <div id='content'>
                        <Icon />
                        <div className="mt-3">
                            <h3 className='font-medium text-slate-900 dark:text-white tracking-tight'>Writes upside-down</h3>
                            <span className='text-slate-500 dark:text-slate-300 tracking-tight text-sm'>The Zero Gravity Pen can be used to write in any orientation, including upside-down. It even works in outer space.</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )


    return (
        <div>
            <ThemeSwitcher/>
            {/* <button className='bg-slate-400 p-2 text-white rounded-lg mx-10' onClick={toggleTheme}>Change theme!</button> */}
            {sample_1()}
            {sample_2()}
        </div>
    )
}