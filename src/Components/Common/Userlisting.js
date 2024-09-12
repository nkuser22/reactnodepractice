import React from "react";
import { Link } from "react-router-dom";


function Userlisting(){

    return(
        <React.Fragment>
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                <h4 className="mt-2">User List</h4>
                <div className="d-grid d-md-flex justify-content-md-end mb-3">
                    <Link to="/useregistration" className="btn btn-success">Add New User</Link>
                    </div>
                    <table className="table table-bordered">
                        <thead className="bg-light">
                            <tr>
                                <th>Sr.No.</th>
                                <th>Name</th>
                                <th>Username</th>
                                <th>Email</th>
                                <th>Mobile</th>
                                <th>Gender</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>Nk Saini</td>
                                <td>NK4321</td>
                                <td>nk@gmail.com</td>
                                <td>1212121212</td>
                                <td>Male</td>
                                <td>
                                   <Link to={"/userEdit"} className="btn btn-success mx-2">Edit</Link>
                                   <Link to={"/userDelete"} className="btn btn-danger">Delete</Link>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                
                </div>
            </div>
        </div>
            
        </React.Fragment>

    );
}

export default Userlisting;