import DummyData from "../../JobDummyData"

const JobData = () => {

    const newData = DummyData.slice(3);

    return (
        <div className="grid grid-cols-1 space-y-4 md:space-y-0 md:grid-cols-3 gap-6 ">
            {
                newData.map(data => <div key={data.id} className="card bg-base-100 w-96 shadow-xl">
                    <div className="card-body">
                        <h2 className="card-title">{data.title}</h2>
                        <p><b>Company: </b>{data.company}</p>
                        <div className="divider"></div>
                        <div className="flex justify-between">
                            <p><b>Location: </b>{data.location}</p>
                            <p><b>Job -Type: </b>{data.type}</p>
                        </div>
                    </div>
                </div>)
            }
        </div>
    );
};

export default JobData;