import "./JobCard.css";

const JobCard = job => {
  console.log(job);
  const { title, description, salary, equity } = job.job;

  return (
    <div className="JobCard">
      <div>{title}</div>
      <div>{description}</div>
      <div>{salary}</div>
      <div>{equity}</div>
    </div>
  )
}

export default JobCard;