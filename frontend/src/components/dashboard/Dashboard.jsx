import { Helmet } from "react-helmet"

const Dashboard = () => {
    return (
        <>
            <Helmet>
                <title>Dashboard</title>
            </Helmet>

            <div className="w-full px-4 py-4 h-full lg:h-screen rounded-md ring-1 ring-sky-300">
                <div className="card w-64 mx-auto lg:flex lg:justify-between lg:w-full lg:gap-4 ">
                    <div className="products w-64 h-28 lg:w-64 lg:h-44 rounded-md bg-cyan-500 shadow-md">
                        <h1 className="text-white text-center pt-3 text-xl font-semibold">Total Product</h1>
                    </div>

                    <div className="Sold w-64 h-28 lg:w-64 lg:h-44 rounded-md bg-indigo-500 shadow-md mt-4 lg:mt-0">
                        <h1 className="text-white text-center pt-3 text-xl font-semibold">Total Products</h1>
                    </div>

                    <div className="Sold w-64 h-28 lg:w-64 lg:h-44 rounded-md bg-blue-500 shadow-md mt-4 lg:mt-0">
                        <h1 className="text-white text-center pt-3 text-xl font-semibold">Products Sold</h1>
                    </div>

                    <div className="Income w-64 h-28 lg:w-64 lg:h-44 rounded-md bg-teal-500 shadow-md mt-4 lg:mt-0">
                        <h1 className="text-white text-center pt-3 text-xl font-semibold">Income</h1>
                    </div>
                </div>
            </div>
        </>

    )
}
export default Dashboard