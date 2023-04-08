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


function ListInstructor() {
  const [applicants, setApplicants] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:8080/api/inst/list-instructor")
      .then((res) => {
        setApplicants(res.data);
      })
      .catch((err) => {
        console.log("Data not found" + err.message);
      }, []);
    //console.log(applicants);
  });
  const deletePost = (id) => {
    console.log(id);
  
    axios.delete(`http://localhost:8080/api/inst/delete-instructor/${id}`)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  
    window.location.reload();
  };
// const [property,setProperty]=useState([]);

  // useEffect(() =>{
  //   axios.post(`http://localhost:4000/applicants/delete-applicants`)
  //     .then(res => {
  //       if (res.data.success){
  //         setProperty(res.data.products)
  //       }else {
  //         alert('Failed to get product information')
  //       }
  //     })
  // })

//   const handleDeleteProperty = async (id) => {
//     try{
//         const res = await axios.delete('url', id);
//         if(res.data.success){
//             alert(res.data.msg);
//         }
//     }
//     catch(err){
//         console.error(err);
//     }
// }
  const navigate = useNavigate()
const onClickDelete=(id)=>{
     axios.delete(`http://localhost:8080/api/delete-instructor/${id}`)
     .then((res=>{
      navigate('/list-applicant')
     }))
    .catch((err)=>{
      console.log('error to delete data:'+err.message);
    });

};
const onClickDeletes=()=>{
  axios.db.drop(`http://localhost:4000/applicants/list-applicant`)
  .then((res=>{
   navigate('/list-applicant')
  }))
 .catch((err)=>{
   console.log('error to delete data:'+err.message);
 });
  
};

// function OnClickDeleteAllData(id){

//   const [ischecked,setIsChecked]=useState([]);
//   const handle=(e)=>{
//     const {value,checked}=e.target;
//    // console.log(value);
//    if(checked){
//     setIsChecked([...ischecked],value);
  
//    }else{
//     setIsChecked(ischecked.filter((e)=>e!==value))
//    } 
//   }
//   axios.delete(`http://localhost:4000/applicants/delete-applicant/${id}`)
//   .then((res=>{
//    navigate('/list-applicant')
//   }))
//  .catch((err)=>{
//    console.log('error to delete data:'+err.message);
//  });
// };

// function Userdelete(){
//   const [getUserData,setUserData]=useState([]);
//    const [ischecked,setIsChecked]=useState([]);

//    useEffect(()=>{
//  const getuser=async()=>{
//  const reqData=await fetch('http://localhost:4000/applicants/update-applicant/${id}')
//  const resData=await reqData.json();
//  setUserData(resData);
//  }
//  getuser();
//    },[])

// const handle=(e)=>{
//   const {value,checked}=e.target;
//  // console.log(value);
//  if(checked){
//   setIsChecked([...ischecked],value);

//  }else{
//   setIsChecked(ischecked.filter((e)=>e!==value))
//  } 
// }}

// const allDelete=async()=>{
//   //console.log(ischecked);
//   const res=await axios.post('')
// }

// onChange handler about selecting multiple items from the table
  // apply deleting the items
  const [checked, setChecked] = useState([]); // save the selected items to checked
  // Add/Remove checked item from list
  const handleCheck = (event) => {
    var updatedList = [...checked];
    if (event.target.checked) {
      // three dots - rest parameters or spread operators and expands
      // an array into list
      updatedList = [...checked, event.target.value];
    } else {
      updatedList.splice(checked.indexOf(event.target.value), 1);
    }
    setChecked(updatedList); // checked items are saved as an array of object
  };
  console.log(checked)

 const onCheckedDelete =() =>{

  for(let id of checked){
    axios.delete(`http://localhost:8080/api/inst/delete-instructor/${id}`)
    .then((res=>{
     navigate('/list-applicant')
    }))
   .catch((err)=>{
     console.log('error to delete data:'+err.message);
   });
  }
}

let n=1;
  return (
    <><div>
         <Link to="/AddInstructor">
    <button type="button" className={styles.white_btn}>
    Add instructor
    </button>
  </Link>
    </div><div className="table-wraper">
        <h2>List of Applicants</h2>
        <button onClick={() => {
          window.confirm('Are you sure to delete this  data')
            && onCheckedDelete();
        } }>DeleteAll</button>
        
        <table className="fl-table">
          <thead>
            <tr>
             
              {/* <th>Num</th> */}
              <th>full Name</th>
              <th>phone no</th>
              <th>email</th>
              <th>password</th>
              <th>Id no</th>
              <th>Addres</th>
              <th>class Assigned</th>
              <th>Starting Date </th>
              <th>end date  </th>
             
              <th>Action</th>
            

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
                <td>{data.full_name}</td>
                <td>{data.phoneno}</td>
                <td>{data.email}</td>
                <td>{data.password}</td>
                <td>{data.idno}</td>
                
               
                <td>{data.raddres}</td>
                <td>{data.cassigned}</td>
                <td>{data.sdate}</td>
                <td>{data.edate}</td>
                

                
               
              

                

                

                <td>

                  <Link className="edit-link" to={`/Edit/${data._id}`}>
                    <i className="fa-solid fa-pen-to-square"></i></Link>
                  &nbsp;&nbsp;&nbsp;&nbsp;
                  {<Link className="edit-link" to={"/delete/" + data._id}>
                    <i className="fa-sharp fa-solid fa-trash"

                      onClick={() => deletePost(data._id)} style={{ color: '#f41032', padding: "10px", height: "45px" }}></i>
                  </Link>}


                  <Link className="edit-link" to={`/CourseInstructor/${data._id}`}>
                    <i className="fa-sharp fa-solid fa-add"></i></Link>
                    &nbsp;&nbsp;&nbsp;&nbsp;
              <input type="checkbox" value={data._id} onChange={handleCheck}/>

                </td>
               

              </tr>

            ))}

          </tbody>
        </table>
       
      </div></>
  );
  
}
export default ListInstructor;
