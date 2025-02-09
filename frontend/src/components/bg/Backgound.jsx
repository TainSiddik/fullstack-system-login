import React from "react"

const Backgorund = ({ children }) => {
    return (
        <div className="w-screen h-screen bg-[url('/img/stop.webp')] bg-cover flex justify-center items-center">
            {children}
        </div>
    )
}
export default Backgorund