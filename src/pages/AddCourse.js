import {useState, useEffect} from 'react';
import {useParams, useNavigate} from 'react-router-dom'
import axios from 'axios';
import { Link } from "react-router-dom";
import styles from "./styles.module.css";
/* edit applicant data with id */

function AddCourse(){

  // define states
  const [applicant, setApplicant] = useState([])
  const {id} = useParams();
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
  useEffect(() =>{
    // string formatting: template literals are enclosed in backticks
    axios.get(`http://localhost:8080/api/stud/add-course`)
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
   
    setFormValues(values => ({...values, [name]: value, ['Stud_id']: id}))
  }
  //define form submit handler

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post(
      `http://localhost:8080/api/stud/add-course`, formValues)
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
  

	return (
        <div className={styles.signup_container}>
        <div className={styles.signup_form_container}>
            <div className={styles.left}>
                <h1>Add course Page</h1>
                <Link to="/studTable">
                    <button type="button" className={styles.white_btn}>
                    View Student
                    </button>
                </Link>
            </div>
            <div className={styles.right}>
                <form className={styles.form_container} onSubmit={handleSubmit}>
                <input
                        type="text"
                        placeholder="Course Code"
                        name="course_code"
                        onChange={handleChange}
                    
                        required
                        className={styles.input}
                    />
                <select className={styles.input} name="course_name" onChange={handleChange}>
						 
						 <option  value =' '>Select course</option>
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
                     <label className={styles.ll_btn}>Course Schedule</label>
                <input
                        type="datetime-local"
                        placeholder="Course Schedule"
                        name="course_schedule"
                        onChange={handleChange}
                 
                        required
                        className={styles.input}
                    />
                      <label className={styles.ll_btn}>Starting Date</label>
                        <input
                        type="date"
                        placeholder="Course Begining"
                        name="course_begining"
                        onChange={handleChange}
                        
                        required
                        className={styles.input}
                    />
                      <label className={styles.ll_btn}>End Date</label>
                        <input
                        type="date"
                        placeholder="Course ending"
                        name="course_ending"
                        onChange={handleChange}
                      
                        required
                        className={styles.input}
                    />
                
                    
        
                    
                   
                     
                    
        
                
                    
                    
            
                        {error && <div className={styles.error_msg}>{error}</div>}
                    <button type="submit" className={styles.green_btn}>
                        Register
                    </button>
                </form>
            </div>
        </div>
    </div>
		)
}
export default AddCourse;