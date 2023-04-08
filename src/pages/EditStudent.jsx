import {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom'
import styles from "./styles.module.css";
import axios from 'axios';
/* edit applicant data with id */
import { Link, useNavigate } from "react-router-dom"
function EditStudent(){

  // define states
  const [error, setError] = useState("");
  const [applicant, setApplicant] = useState([])
  const {id} = useParams();
  /* useParams is one of the several react hooks in ract router
    it used to retreive route paramaters from the component
    rendered by the matching route
  */
   // add title 
   
  useEffect(() =>{
    document.title ='Aplicants List';
  })

  // API: get a single applicant data by ID
  useEffect(() =>{
    // string formatting: template literals are enclosed in backticks
    axios.get(`http://localhost:8080/api/stud/update-student/${id}`)
          .then((res) =>{
            setApplicant(res.data);
          })
          .catch((err) =>{
            console.log("Error:" + err.message)
          });
  }, [id]);

  //console.log(applicant)

  /* handle onChange and onSubmit to update the specified applicant data */
  // Define the state with useState hook
  const navigate = useNavigate();
  const [formValues, setFormValues] = useState({})

  // define onChange to get form values
  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
   
    setFormValues(values => ({...values, [name]: value}))
  }
  //define form submit handler

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.put(
      `http://localhost:8080/api/stud/update-student/${id}`, formValues)
      .then(res => {
        if(res.status ===200){
          alert('A record successfuly updated')
          // Push to /
          navigate('/list-applicants')
        }else{
          Promise.reject()
        }
      })
      .catch(err => alert('Something went wrong! ' +err.message))
      // Push to /
      navigate('/list-applicants')
  }
  return(

  <div className={styles.signup_container}>
  <div className={styles.signup_form_container}>
      <div className={styles.left}>
          <h1>Add student Page</h1>
          <Link to="/login">
              <button type="button" className={styles.white_btn}>
              View Student
              </button>
          </Link>
      </div>
      <div className={styles.right}>
          <form className={styles.form_container} onSubmit={handleSubmit}>
              
          <input
                  type="text"
                  placeholder="Full Name"
                  name="full_name"
                  onChange={handleChange}
              
                  defaultValue={applicant.full_name}
                  required
                  className={styles.input}
              />
                  <input
                  type="email"
                  placeholder="Email"
                  name="email"
                  onChange={handleChange}
                  defaultValue={applicant.email}
                  required
                  className={styles.input}
              />
                  <input
                  type="text"
                  placeholder="Id Number"
                  name="idno"
                  onChange={handleChange}
                  defaultValue={applicant.idno}
                  required
                  className={styles.input}
              />
          <input
                  type="password"
                  placeholder="Password"
                  name="password"
                  onChange={handleChange}
                  defaultValue={applicant.password}
                  required
                  className={styles.input}
              />
              <input
                  type="text"
                  placeholder="Phone number"
                  name="phoneno"
                  onChange={handleChange}
                  defaultValue={applicant.phonno}
                  required
                  className={styles.input}
              />
              <input
                  type="date"
                  placeholder="Birth Date"
                  name="bdate"
                  onChange={handleChange}
                  defaultValue={applicant.bdate}
                  required
                  className={styles.input}
              />
                  <input
                  type="text"
                  placeholder="Last Name"
                  name="lastName"
                  onChange={handleChange}
                  defaultValue={applicant.bdate}
                  required
                  className={styles.input}
              />	
                       <select className={styles.input}
                       
                       
                       defaultValue={applicant.department}
                       name="department" onChange={handleChange}>
               
               <option  value =' '>Select Department</option>
               <option value="admin">Computer</option>
               <option value="instructor">Graphics</option>
               <option value="staf">Accounting</option>
               <option value="student">Information Technology</option>
               <option value="student">Forign Languge</option>
               <option value="student">Web Development</option>
               <option value="student">Art</option>
               <option value="student">Jornalizm</option>
               <option value="student">others</option>
           </select>
              <input
              type="file"
              placeholder="Profile Picture"
              name="photo"
              onChange={handleChange}
              defaultValue={applicant.photo}
              required
              className={styles.input}
          />	<input
          type="text"
          placeholder="Residential Addres"
          name="raddres"
          onChange={handleChange}
          defaultValue={applicant.radrres}
          required
          className={styles.input}
      />
      <label className={styles.ll_btn}>Class Enroluennt</label>
              <input
              
                  type="date"
                  placeholder="Class Enrolument"
                  name="cenrolument"
                  onChange={handleChange}
                  defaultValue={applicant.cenrolument}
                  required
                  className={styles.input}
              
              />
              <label className={styles.ll_btn}>Class Schedule</label>
              <input
              
              type="date"
              placeholder="Class Enrolument"
              name="cschedule"
              onChange={handleChange}
              defaultValue={applicant.cschedule}
              required
              className={styles.input}
          
          />
              <label className={styles.ll_btn}>Starting Date</label>
              <input
              
                  type="date"
                  placeholder="Class Enrolument"
                  name="sdate"
                  onChange={handleChange}
                  defaultValue={applicant.sdate}
                  required
                  className={styles.input}
              
              />
              <label className={styles.ll_btn}>End Date</label>
              <input
              
              type="date"
              placeholder="Class Enrolument"
              name="edate"
              onChange={handleChange}
              defaultValue={applicant.edate}
              required
              className={styles.input}
          
          />
      
                  {error && <div className={styles.error_msg}>{error}</div>}
              <button type="submit" className={styles.green_btn}>
              Add
              </button>
          </form>
      </div>
  </div>
</div>
);
}
export default EditStudent