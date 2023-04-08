import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import styles from "./styles.module.css";

const AddStudent = () => {
	const [data, setData] = useState({
		full_name:"",
		idno: "",
		email: "",
		password: "",
		bdate: "",
    department: "",
    photo:"",
    raddres: "",
    cenrollement: "",
    cschedule: "",
    sdate: "",
    edate: "",
	});
	const [error, setError] = useState("");
	const navigate = useNavigate();

	const handleChange = ({ currentTarget: input }) => {
		setData({ ...data, [input.name]: input.value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const url = "http://localhost:4000/student/add";
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
					<h1>Add Studen Page</h1>
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
							value={data.lastName}
							required
							className={styles.input}
						/>
							<input
							type="email"
							placeholder="Email"
							name="email"
							onChange={handleChange}
							value={data.email}
							required
							className={styles.input}
						/>
							<input
							type="text"
							placeholder="Id Number"
							name="idno"
							onChange={handleChange}
							value={data.idno}
							required
							className={styles.input}
						/>
					<input
							type="password"
							placeholder="Password"
							name="password"
							onChange={handleChange}
							value={data.password}
							required
							className={styles.input}
						/>
						<input
							type="text"
							placeholder="Phone number"
							name="phoneno"
							onChange={handleChange}
							value={data.phoneno}
							required
							className={styles.input}
						/>
						<input
							type="date"
							placeholder="Birth Date"
							name="bdate"
							onChange={handleChange}
							value={data.bdate}
							required
							className={styles.input}
						/>
							<input
							type="text"
							placeholder="Last Name"
							name="lastName"
							onChange={handleChange}
							value={data.lastName}
							required
							className={styles.input}
						/>	
								 <select className={styles.input} name="department" onChange={handleChange}>
						 
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
						value={data.photo}
						required
						className={styles.input}
					/>	<input
					type="text"
					placeholder="Residential Addres"
					name="raddres"
					onChange={handleChange}
					value={data.raddres}
					required
					className={styles.input}
				/>
				<label className={styles.ll_btn}>Class Enroluennt</label>
						<input
						
							type="date"
							placeholder="Class Enrolument"
							name="cenrolument"
							onChange={handleChange}
							
							required
							className={styles.input}
						
						/>
						<label className={styles.ll_btn}>Class Schedule</label>
						<input
						
						type="date"
						placeholder="Class Enrolument"
						name="cschedule"
						onChange={handleChange}
						
						required
						className={styles.input}
					
					/>
						<label className={styles.ll_btn}>Starting Date</label>
						<input
						
							type="date"
							placeholder="Class Enrolument"
							name="sdate"
							onChange={handleChange}
							
							required
							className={styles.input}
						
						/>
						<label className={styles.ll_btn}>End Date</label>
						<input
						
						type="date"
						placeholder="Class Enrolument"
						name="edate"
						onChange={handleChange}
					
						required
						className={styles.input}
					
					/>
				
							{error && <div className={styles.error_msg}>{error}</div>}
						<button type="submit" className={styles.green_btn}>
						Add h
						</button>
					</form>
				</div>
			</div>
		</div>
	);
};

export default AddStudent;
