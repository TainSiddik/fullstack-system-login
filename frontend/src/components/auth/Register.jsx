import { Link } from "react-router-dom"
const Register = () => {
    return (
        <div className="w-64 pb-3 bg-slate-100 bg-opacity-5 backdrop-blur-xl  ring-4 ring-sky-200 rounded-md">
            <div className="logo text-center">
                <h1 className="text-2xl font-bold mt-4 text-white">Who Are You ?</h1>
            </div>
            <div className="login mx-4 mt-6">
                <form>
                    <div className="username text-white">
                        <label htmlFor="username" className="block mb-2">Username</label>
                        <input type="text" id="username" className="rounded-full py-1 w-full px-3 ring-2 ring-sky-200 outline-sky-300 bg-black bg-opacity-0" placeholder="example@gmail.com" />
                    </div>
                    <div className="email text-white">
                        <label htmlFor="email" className="block mb-2">Email</label>
                        <input type="text" id="email" className="rounded-full py-1 w-full px-3 ring-2 ring-sky-200 outline-sky-300 bg-black bg-opacity-0" placeholder="example@gmail.com" />
                    </div>
                    <div className="password text-white mt-4">
                        <label htmlFor="password" className="block mb-2">Password</label>
                        <input type="password" id="password" className="rounded-full w-full py-1 px-3 ring-2 ring-sky-200 outline-sky-300 bg-black bg-opacity-0" placeholder="************" />
                    </div>
                    <div className="confPassword text-white mt-4">
                        <label htmlFor="confPassword" className="block mb-2">Confirm Password</label>
                        <input type="password" id="confPassword" className="rounded-full w-full py-1 px-3 ring-2 ring-sky-200 outline-sky-300 bg-black bg-opacity-0" placeholder="************" />
                    </div>
                    <div className="register mt-8">
                        <button className="rounded-full w-full py-1 text-white text-md font-semibold ring-2 ring-sky-200 outline-none bg-black bg-opacity-0 hover:bg-sky-500">Register</button>
                    </div>
                </form>
            </div>
            <hr className="mx-4 mt-6 mb-2" />
            <div className="register text-sm text-white text-center">
                <h1>You have account ? <Link to={'/login'} className="font-semibold hover:underline">Login</Link></h1>
            </div>
        </div>
    )
}
export default Register