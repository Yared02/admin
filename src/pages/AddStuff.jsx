import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import styles from "./styles.module.css";

const AddStaff = () => {
	const [data, setData] = useState({
		full_name:"",
		phonno: "",
		email: "",
		idno: "",
		password: "",
    raddres:"",
    sposion: "",
  
    cdate: "",

  
	});
	const [error, setError] = useState("");
	const navigate = useNavigate();

	const handleChange = ({ currentTarget: input }) => {
		setData({ ...data, [input.name]: input.value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const url = "http://localhost:8080/api/ss/add";
			const { data: res } = await axios.post(url, data);
			navigate("/");
			console.log(res.message);
		} catch (error) {
			if (
				error.response &&
				error.response.status >= 400 &&
				error.response.status <= 500
			) {
				setError(error.response.data.message);
			}
		}
	};

	return (
		<div className={styles.signup_container}>
			<div className={styles.signup_form_container}>
				<div className={styles.left}>
					<h1>Add Instructor Page</h1>
					<Link to="/login">
						<button type="button" className={styles.white_btn}>
						View instructor
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
							value={data.full_name}
							required
							className={styles.input}
						/>
							<input
							type="text"
							placeholder="phono"
							name="phonno"
							onChange={handleChange}
							
							required
							className={styles.input}
						/>
							<input
							type="email"
							placeholder="email"
							name="email"
							onChange={handleChange}
							value={data.email}
							required
							className={styles.input}
						/>
					<input
							type="text"
							placeholder="id no"
							name="idno"
							onChange={handleChange}
							
							required
							className={styles.input}
						/>
						<input
							type="password"
							placeholder="password"
							name="password"
							onChange={handleChange}
							
							required
							className={styles.input}
						/>
			
						<input
							type="date"
							placeholder="Addres"
							name="raddres"
							onChange={handleChange}
							
							required
							className={styles.input}
						/>
						<label className={styles.ll_btn}>Class Assigned</label>
							<input
							type="text"
							placeholder="Position"
							name="sposion"
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
	);
};

export default AddStaff;
