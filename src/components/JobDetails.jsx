import React from 'react'
import { useLoaderData} from 'react-router-dom'

const JobDetails = () => {

const jobDetails  = useLoaderData()

  return (
    <div className='job-details'>
        <p><b>Job Title: </b>{jobDetails.title}</p>
        <p><b>Salary: </b>{jobDetails.salary}</p>
        <p><b>Job Location: </b>{jobDetails.location}</p>
        <p><b>Description: </b> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
        <button>Apply Now</button>
    </div>
  )
}

export default JobDetails

export const jobDetailsLoader = async ({params})=>{
    const {id} = params;
    const res = await fetch(`http://localhost:5000/jobs/${id}`);
    if (!res.ok){ 
        throw Error("Could not find job details")
    }
    return res.json();
}