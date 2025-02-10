const Footer = () => {
    return (
        <div className="max-w-full bg-slate-300 lg:flex justify-between items-center mb-1 px-12 rounded-md ring-1 ring-sky-300">
            <div className="copy">
                <h3>copy-right @ta'in siddik</h3>
            </div>
            <div className="info">
                <ul className=" flex gap-4">
                    <li><a href="">About</a></li>
                    <li><a href="">Contact</a></li>
                </ul>
            </div>
        </div>
    )
}
export default Footer