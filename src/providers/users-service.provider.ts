import resource from '@/resources/users.json'

const users_db = resource

interface AuthDTO {
    email: string; 
    password: string; 
}

export const waitTime = (milisec: number) => new Promise(resolve => setTimeout(resolve, milisec))

export const authUser = async (auth: AuthDTO) => {
    await waitTime(200)    

    const user = await getUser(auth.email)

    if (!(user?.password === auth.password)) {
        throw new Error('Unauthorized')
    }

    return user
}

export const addUser = async (user: typeof users_db[0]) => {
    await waitTime(200); 
    users_db.push(user)
    return user
}

export const getUser = async (email: string) => {
    await waitTime(200); 
    return users_db.find((user) => user.email === email)
}

const pageLimit = 5
export const getUsers = async (page: number = 1) => {
    console.log(users_db)
    return users_db
    await waitTime(100); 
    const offset = (page - 1) * pageLimit
    const end = page * pageLimit
    return users_db.slice(offset, end)
}



