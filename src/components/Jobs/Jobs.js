import JobCard from "../JobCard/JobCard";
import "./Jobs.css";

const Jobs = () => {
  const jobs = [
    {
      id: 1,
      title: "Job1",
      description: "Job1 description",
      salary: "$100",
      equity: "10%"
    },
    {
      id: 2,
      title: "Job2",
      description: "Job2 description",
      salary: "$200",
      equity: "20%"
    },
    {
      id: 3,
      title: "Job3",
      description: "Job3 description",
      salary: "$300",
      equity: "15%"
    },
  ]

  return (
    <div className='Jobs'>
      <h1>These jobs are available!</h1>
      <div className="jobs-container">
        {jobs.map(j => (
          <JobCard job={j} key={j.id} />
        ))}
      </div>
    </div>
  )
}

export default Jobs;