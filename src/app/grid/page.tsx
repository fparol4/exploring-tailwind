import './style.scss'

/**
 *
 * [] - Implementar um grid simples 3x2  
 * 
 * grid-cols
 * col-start-3 col-end-6 -> Definir inicio e final de uma coluna
 * 
 * 
 * grid-rows
 * 
 */

export default function Grid() {
    const makeGrid = () => (
        <div>
            <h1>This is a grid-template for learning</h1>
            <div className="container m-auto grid grid-cols-3 grid-rows-5 md:grid-cols-5 lg:grid-cols-8 gap-4">
                <div className="tile bg-teal-500 col-span-full">
                    <h1 className="tile-marker">ONE</h1>
                </div>
                <div className="tile bg-amber-500 row-start-2 row-end-5 col-span-1 md:col-span-2">
                    <h1 className="tile-marker">TWO</h1>
                </div>
                <div className="tile bg-yellow-500">
                    <h1 className="tile-marker">THREE</h1>
                </div>
                <div className="tile bg-lime-600 col-start-3 col-end-6">
                    <h1 className="tile-marker">FOUR</h1>
                </div>
                <div className="tile bg-green-600">
                    <h1 className="tile-marker">FIVE</h1>
                </div>
                <div className="tile bg-emerald-500">
                    <h1 className="tile-marker">SIX</h1>
                </div>
                <div className="tile bg-teal-500">
                    <h1 className="tile-marker">SEVEN</h1>
                </div>
                <div className="tile bg-purple-500">
                    <h1 className="tile-marker">EIGHT</h1>
                </div>
                <div className="tile bg-pink-500 row-start-5 md:col-span-full">
                    <h1 className="tile-marker">NINE</h1>
                </div>
            </div>
        </div>
    )

    const persons = [
        { picture: '/icons/profile.jfif', name: 'Person1', email: 'person_1@email.com', role: 'Admin' },
        { picture: '/icons/profile.jfif', name: 'Person2', email: 'person_2@email.com', role: 'CTO' },
        { picture: '/icons/profile.jfif', name: 'Person3', email: 'person_3@email.com', role: 'Health Manager / CEO' },
        { picture: '/icons/profile.jfif', name: 'Person4', email: 'person_4@email.commmmmmmmmmmmmm', role: 'Staff' },
        { picture: '/icons/profile.jfif', name: 'Person4', email: 'person_4@email.commmmmmmmmmmmmm', role: '' }
    ]

    const makePersons = () => {
        return (
            <div className='m-auto bg-gray-100 p-4 md:p-16'>
                <ul className='sm:bg-white max-w-sm divide-y' >
                    {persons.map((p, k) => (
                        <li className='flex p-3 items-center gap-4 text-slate-600 hover:text-slate-100 hover:bg-blue-900 hover:cursor-pointer' key={k}>
                            <img src={p.picture} className='rounded-full h-14 w-14 shadow-gray-800' />
                            <div className='overflow-hidden hover:text-gray-50'>
                                <p className='text-sm font-bold '>{p.name}</p>
                                <p className='text-sm overflow-hidden truncate'>{p.role ?? 'Role not defined'}</p>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        )
    }

    const makePersons_2 = () => (
        <div className='m-auto bg-gray-100 p-4'>
            <ul className='max-w-sm divide-y'>
                {persons.map((p, k) => (
                    <li key={k} className='group/item p-3 flex items-center gap-4 rounded-md hover:bg-slate-200'>
                        <img src={p.picture} className='rounded-full h-14 w-14' />
                        <div className='overflow-hidden'>
                            <p className='text-sm font-bold'>{p.name}</p>
                            <p className='text-sm'>{p.role || 'Role not defined'}</p>
                        </div>
                        <a className='invisible ml-auto mr-8 group-hover/item:visible px-3 py-1
                        rounded-full text-sm hover:bg-slate-300 
                        text-slate-800 font-medium transtion-all delay-80' href="/grid">
                            <span>Call</span>
                            <span className='hover:translate-x-0.5'>&gt;</span>
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    )


    return (
        <div>
            {/* {makeGrid()} */}
            {/* {makePersons()} */}
            {makePersons_2()}
        </div>
    )
}