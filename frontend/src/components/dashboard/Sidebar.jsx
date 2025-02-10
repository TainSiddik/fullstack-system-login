const Sidebar = () => {
    return (
        <div className="h-full w-56 bg-slate-800 bg-opacity-90 rounded-md ring-2 ring-sky-200">
            <div className="logo pt-4 flex-wrap">
                <img src="/img/pp.jpg" alt="pp" className="rounded-full ring-2 ring-sky-200 w-28 h-28 mx-auto" />
                <h3 className="text-white text-center pt-3 text-md font-semibold">Username</h3>
                <p className="text-white text-center text-sm font-light">Access : Admin</p>
            </div>

            <hr className="mt-3 border-sky-200" />

            <div className="menu mt-4 w-full">
                <div className="developer">
                    <h5 className="text-xs text-slate-400 pb-3 pl-6">---Developer---</h5>
                    <div className="list">
                        <div className="dashboard flex pl-10 py-2 w-full items-center hover:bg-sky-500">
                            <img src="/svg/dashboard.svg" alt="dashboard" className="w-5 h-5" />
                            <a href="#" className="text-white pl-3 text-sm">Fitur</a>
                        </div>
                        <div className="users mt-1 flex pl-10 py-2 w-full items-center hover:bg-sky-500">
                            <img src="/svg/users.svg" alt="users" className="w-5 h-5" />
                            <a href="#" className="text-white pl-3 text-sm">Role</a>
                        </div>
                    </div>
                </div>


                <div className="admin mt-4">
                    <h5 className="text-xs text-slate-400 pb-3 pl-6">---Admin---</h5>
                    <div className="list">
                        <div className="users mt-1 flex pl-10 py-2 w-full items-center hover:bg-sky-500">
                            <img src="/svg/users.svg" alt="users" className="w-5 h-5" />
                            <a href="#" className="text-white pl-3 text-sm">User Access</a>
                        </div>
                    </div>
                </div>

                <div className="general mt-4">
                    <h5 className="text-xs text-slate-400 pb-3 pl-6">---General---</h5>
                    <div className="list">
                        <div className="dashboard flex pl-10 py-2 w-full items-center hover:bg-sky-500">
                            <img src="/svg/dashboard.svg" alt="dashboard" className="w-5 h-5" />
                            <a href="#" className="text-white pl-3 text-sm">Dashboard</a>
                        </div>
                        <div className="dashboard flex pl-10 py-2 w-full items-center hover:bg-sky-500">
                            <img src="/svg/dashboard.svg" alt="dashboard" className="w-5 h-5" />
                            <a href="#" className="text-white pl-3 text-sm">Seles</a>
                        </div>
                    </div>
                </div>

                <div className="user mt-4">
                    <h5 className="text-xs text-slate-400 pb-3 pl-6">---User---</h5>
                    <div className="list">
                        <div className="profile mt-1 flex pl-10 py-2 w-full items-center hover:bg-sky-500">
                            <img src="/svg/users.svg" alt="users" className="w-5 h-5" />
                            <a href="#" className="text-white pl-3 text-sm">Profile</a>
                        </div>
                        <div className="password mt-1 flex pl-10 py-2 w-full items-center hover:bg-sky-500">
                            <img src="/svg/users.svg" alt="users" className="w-5 h-5" />
                            <a href="#" className="text-white pl-3 text-sm">Change Password</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Sidebar