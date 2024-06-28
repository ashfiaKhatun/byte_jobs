
import Header from "./components/Header/Header";
import SearchBar from "./components/SearchBar/SearchBar";
import JobCard from "./components/JobCard/JobCard";
import jobData from "./JobDummyData";
import { useEffect, useState } from "react";
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "./firebase.config";
function App() {

  const [jobs, setJobs] = useState([]);

  const fetchJobs = async () => {
    const tempJobs = [];
    const q = query(collection(db, "jobs"));
    const querySnapshot = await getDocs(q);
    
    querySnapshot.forEach((job) => {
      // const j = job.data()
      // tempJobs.push(j)
      tempJobs.push({
        ...job.data(),
        id: job.id,
        postedOn:  jobData.postedOn ? jobData.postedOn.toDate() : null,
      });
    });
    setJobs(tempJobs);
  };
  


  useEffect(() => {
    fetchJobs();
  }, []);
  


  return (
    <div>
      <Header />
      <SearchBar />
      {jobData.map((job) => (
        <JobCard key={job.id} {...job} />
      ))}
    </div>
  );
}

export default App;
