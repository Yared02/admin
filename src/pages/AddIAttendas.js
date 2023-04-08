import {useState, useEffect} from 'react';
import {useParams, useNavigate} from 'react-router-dom'
import axios from 'axios';
import { Link } from "react-router-dom";
import styles from "./styles.module.css";
/* edit applicant data with id */

function InstAttendas(){

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
    axios.get(`http://localhost:8080/api/inst/add-attendas`)
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
   
    setFormValues(values => ({...values, [name]: value, ['Inst_id']: id}))
  }
  //define form submit handler

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post(
      `http://localhost:8080/api/inst/add-attendas`, formValues)
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
                <h1>Add Attendas</h1>
                <Link to="/studTable">
                    <button type="button" className={styles.white_btn}>
                    View Student
                    </button>
                </Link>
            </div>
            <div className={styles.right}>
                <form className={styles.form_container} onSubmit={handleSubmit}>
                <label className={styles.ll_btn}>Present</label>
                        <input
                        type="checkbox"
                    
                        name="name"
                        onChange={handleChange}
                      
                        
                        className={styles.input}
                    /><label className={styles.ll_btn}>Absent</label>
                    <input
                    type="checkbox"
            
                    name="name"
                    value="absent"
                    onChange={handleChange}
                  
                
                        className={styles.input}
                />
                      <label className={styles.ll_btn}>Late</label>
                        <input style={{background: "teal",color:"white",padding:"7px",borderRadius:"7px",}}
                        type="checkbox"
                      
                        name="name"
                        value="late"
                        onChange={handleChange}
                      
                
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
export default InstAttendas;