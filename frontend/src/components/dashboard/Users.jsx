import { Helmet } from "react-helmet"
const Users = () => {
    return (
        <>
            <Helmet>
                <title>Users</title>
            </Helmet>

            <div className="w-full px-4 py-4 h-screen rounded-md ring-1 ring-sky-300">
                <h1 className="text-xl font-semibold">Users</h1>
            </div>
        </>

    )
}
export default Users