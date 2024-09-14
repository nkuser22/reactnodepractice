import axios from "axios";
import React, { useState,useEffect,useRef } from "react";
import { Link } from "react-router-dom";
// npm install react-to-print
import { useReactToPrint } from "react-to-print";

function Userlisting(){
    const componentPDF=useRef();
    const [userData,setUserData]=useState([]);
      
    useEffect( ()=>{
        const registeruserdata=async()=>{
           axios.get("http://localhost:4000/api/registeruserdata")
           .then(res=>setUserData(res.data))
           .catch(error=>console.log(error));
        }
        registeruserdata();
    },[]);

    const generatpdf=useReactToPrint({
        content: ()=>componentPDF.current,
        documentTitle:"Userdata",
        onAfterPrint: ()=>alert('Data Save in PDF')
    });
    return(
        <React.Fragment>
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                <h4 className="mt-2">User List</h4>
                <div className="d-grid d-md-flex justify-content-md-end mb-3">
                    <Link to="/useregistration" className="btn btn-success">Add New User</Link>
                    </div>
                    <div ref={componentPDF} style={{width:'100%'}}>
                    <table className="table table-bordered">
                        <thead className="bg-light">
                            <tr>
                                <th>Sr.No.</th>
                                <th>Name</th>
                                <th>Username</th>
                                <th>Email</th>
                                <th>Mobile</th>
                                <th>Gender</th>
                                <th>Country</th>
                                <th>State</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                        {
                            userData.map( (uData, index)=>(
                            
                            <tr key={index}>
                                <td>{index+1}</td>
                                <td>{uData.name}</td>
                                <td>{uData.username}</td>
                                <td>{uData.email}</td>
                                <td>{uData.mobile}</td>
                                <td>{uData.gender}</td>
                                <td>{uData.countryname}</td>
                                <td>{uData.statename}</td>
                                <td>
                                   <Link to={"/userEdit"} className="btn btn-success mx-2">Edit</Link>
                                   <Link to={"/userDelete"} className="btn btn-danger">Delete</Link>
                                </td>
                            </tr>
                            ))
                        }
                        </tbody>
                    </table>
                    </div>
                    <div className="d-grid d-md-flex justify-content-md-end mb-3">
                    <button className="btn btn-success" onClick={generatpdf}>PDF</button>
                    </div>
                
                </div>
            </div>
        </div>
            
        </React.Fragment>

    );
}

export default Userlisting;