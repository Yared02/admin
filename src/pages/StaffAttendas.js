// Show applicants list
// import modules
import React from "react";
import "./table.css";
import styles from "./styles.module.css";
import axios from "axios";
import { useState, useEffect } from "react";
import {Link}  from "react-router-dom";
import {useParams, useNavigate} from 'react-router-dom'
import { func } from "prop-types";
import { any } from "prop-types";

function StaffAttendas() {

    const {id} = useParams();

    const vv =  Date().toLocaleString();
    const [formValues, setFormValues] = useState({})
  const [applicants, setApplicants] = useState([]);
  const navigate = useNavigate();
  /* useParams is one of the several react hooks in ract router
    it used to retreive route paramaters from the component
    rendered by the matching route
  */
   // add title 
   const [error, setError] = useState("");
  useEffect(() =>{
    document.title ='Add course';
  })

  // API: get a single applicant data by ID
  
    // string formatting: template literals are enclosed in backticks
   

  //console.log(applicant)

  /* handle onChange and onSubmit to update the specified applicant data */
  // Define the state with useState hook


  // define onChange to get form values
  {applicants.map((data, i) => (

    data.full_name
  ))}
  useEffect(() => {
    axios
      .get("http://localhost:8080/api/ss/list-staff")
      .then((res) => {
        setApplicants(res.data);
      })
      .catch((err) => {
        console.log("Data not found" + err.message);
      }, []);
    //console.log(applicants);
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post(
      `http://localhost:4000/instructor/add-attendas`, formValues,id)
      .then(res => {
        if(res.status ===200){
          alert('The data is add successfully')
          // Push to /
          navigate('/studTable')
        }else{
          Promise.reject()
        }
      })
      .catch(err => alert('Something went wrong! ' +err.message))
      // Push to /
      navigate('/add-courses')
  }
  
  
  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
   
    setFormValues(values => ({...values, [name]: value, ['Inst_id']: id}))
  }
 


  // define onChange to get form values


  return (
    <><div>
              <Link to="/Addstudent">
    <button type="button" className={styles.white_btn}>
    Add Student
    </button>
  </Link>
 
        
        <table className="fl-table">
          <thead>
            <tr>
              <th>Date</th>
              {/* <th>Num</th> */}
              <th>First Name</th>
              <th>Last Name</th>
              <th>Gender</th>
              <th>Phone No</th>
              <th>Add Result </th>              
              <th>Add Attendas</th>
            

            </tr>
          </thead>

          {/* <tbody> */}
          {/*display list of applicant data in a table
      first map each array data in key-value pair and
      iterate over each row and display in a table row

      add a unique key to the returned component of each tr as prop
      */}
          <tbody>
            {/* here will display data in a table row */}
            {applicants.map((data, i) => (
              <tr key={data._id}>
                {/* <td>{data._id}</td> */}
                <td>{vv}</td>
                <td>{data.full_name}</td>
                <td>{data.email}</td>
                <td>{data.idno}</td>
             
                <td>{data.phono}</td>
               
                
              
                

                

            

         


                
             
       
          
  
       

             
        
           
            <td> 
            <Link className="edit-link" to={`/AddSattendas/${data._id}`}>
                   <button  style={{background: "teal",color:"white",padding:"7px",borderRadius:"7px",}}>Add Attendas</button></Link> </td>
                   <td> 
            <Link className="edit-link" to={`/AddSattendas/${data._id}`}>
                   <button  style={{background: "teal",color:"white",padding:"7px",borderRadius:"7px",}}>Add Result</button></Link> </td>
              </tr>

            ))}

          </tbody>
        </table>
       
      </div></>
  );
  
}
export default StaffAttendas
