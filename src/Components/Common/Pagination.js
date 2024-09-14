import React,{useState} from "react";
// npm install paginate (please install)
import ReactPaginate from 'react-paginate';

function Pagination(){
  
    
    const [postdata,setdata]=useState(Apidata.slice(0,100));
    const [pageNumber,setPagenumber]=useState(0);
    const perPage=10;
    const pageclick=pageNumber*perPage;
    const countPage=Math.ceil(postdata.length/perPage);

   
    return(
        <React.Fragment>
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                <h4 className="mt-2">User List</h4>
                
                  
                    <table className="table table-bordered">
                        <thead className="bg-light">
                            <tr>
                                <th>Sr.No.</th>
                                <th>Name</th>
                                <th>Username</th>
                                <th>Email</th>
                                
                            </tr>
                        </thead>
                        <tbody>
                        { postdata.slice(pageclick, pageclick+perPage).map( (postdata,index)=>{
                         
                        <tr key={index}>
                             <td>{index+1}</td>
                            <td>{postdata.userId}</td>
                            <td>{postdata.title}</td>
                            <td>{postdata.body}</td>
                            
                        </tr>
                       })
                        }
                        </tbody>
                    </table>
                    </div>
                    
                
                </div>
            </div>
            
        </React.Fragment>

    );
}

export default Pagination;