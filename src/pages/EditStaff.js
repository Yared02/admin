import {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom'
import styles from "./styles.module.css";
import axios from 'axios';
/* edit applicant data with id */
import { Link, useNavigate } from "react-router-dom"
function EditStaff(){

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
    axios.get(`http://localhost:8080/api/ss/update-staff/${id}`)
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
      `http://localhost:8080/api/ss/update-staff/${id}`, formValues)
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
          <h1>Edit Instructor Page</h1>
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
							type="text"
							placeholder="phono"
                           
							name="phonno"
							onChange={handleChange}
                            defaultValue={applicant.phonno}
							required
							className={styles.input}
						/>
							<input
							type="email"
							placeholder="email"
							name="email"
                            defaultValue={applicant.email}
							onChange={handleChange}
						
							required
							className={styles.input}
						/>
					<input
							type="text"
							placeholder="id no"
							name="idno"
							onChange={handleChange}
							defaultValue={applicant.idno}
							required
							className={styles.input}
						/>
						<input
							type="password"
							placeholder="password"
							name="password"
							onChange={handleChange}
							defaultValue={applicant.password}
							required
							className={styles.input}
						/>
			
						<input
							type="text"
							placeholder="Addres"
							name="raddres"
							onChange={handleChange}
							defaultValue={applicant.raddres}
							required
							className={styles.input}
						/>
						
								 
						
				
						<label className={styles.ll_btn}>Class Assigned</label>
						<input
						
						type="date"
						placeholder="Class class assigned"
						name="cassigned"
						onChange={handleChange}
					defaultValue={applicant.cassigned}
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
export default EditStaff