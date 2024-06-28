
const Categories = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            
            <div className="card bg-base-100 shadow-xl hover:bg-blue-100">
                <figure>
                    <img
                        src="https://i.ibb.co/b6DS26M/images.png" className="h-24 mt-12 rounded-lg"/>
                </figure>
                <div className="card-body text-center">
                    <h2 className="card-title">Business Development</h2>
                    <p className="text-slate-400">74 Jobs</p>
                </div>
            </div>

            <div className="card bg-base-100 shadow-xl hover:bg-blue-100">
                <figure>
                    <img
                        src="https://i.ibb.co/NrCTkv4/images.jpg" className="h-24 mt-12 rounded-lg"/>
                </figure>
                <div className="card-body text-center">
                    <h2 className="card-title">Marketing & Communication</h2>
                    <p className="text-slate-400">20 Jobs</p>
                </div>
            </div>

            <div className="card bg-base-100 shadow-xl hover:bg-blue-100">
                <figure>
                    <img
                        src="https://i.ibb.co/J2XfXYd/images.png" className="h-24 mt-12 rounded-lg"/>
                </figure>
                <div className="card-body text-center">
                    <h2 className="card-title">Project Management</h2>
                    <p className="text-slate-400">35 Jobs</p>
                </div>
            </div>

            <div className="card bg-base-100 shadow-xl hover:bg-blue-100">
                <figure>
                    <img
                        src="https://i.ibb.co/x1hWwq5/images.png" className="h-24 mt-12 rounded-lg"/>
                </figure>
                <div className="card-body text-center">
                    <h2 className="card-title">Customer Service</h2>
                    <p className="text-slate-400">46 Jobs</p>
                </div>
            </div>

            <div className="card bg-base-100 shadow-xl hover:bg-blue-100">
                <figure>
                    <img
                        src="https://i.ibb.co/3SWhbyn/images.png" className="h-24 mt-12 rounded-lg"/>
                </figure>
                <div className="card-body text-center">
                    <h2 className="card-title">Software Engineering</h2>
                    <p className="text-slate-400">60 Jobs</p>
                </div>
            </div>
        </div>
    );
};

export default Categories;