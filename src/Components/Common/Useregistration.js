import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// npm install react-hook-form
import { useForm } from "react-hook-form";

function Useregistration() {

  const {register,formState: { errors },handleSubmit,} = useForm();
  const [countryData,setCountryData]=useState([]);
 
  useEffect(()=>{
    const getCountry = async()=>{
        const reqData =await fetch("http://localhost:4000/api/country");
        const resData= await reqData.json();
        setCountryData(resData);
        
    }
  })
  const onSubmit = (data) => {
    console.log(data);
  };

  
  return (
    <React.Fragment>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h4 className="mt-2">User Registeration</h4>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="row">
                <div className="col-md-6">
                  <div className="mb-3">
                    <label className="form-lable">
                      Name<span className="text-danger">*</span>
                    </label>
                    <input
                      type="text"
                      {...register("name",{ required: true })} className="form-control"
                      placeholder="Name"
                    ></input>
                    <span className="text-danger">
                      {errors.name?.type === "required" && "Name is required"}
                    </span>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="mb-3">
                    <label className="form-lable">
                      Username<span className="text-danger">*</span>
                    </label>
                    <input
                      type="text"
                      {...register("username",{ required: true,pattern:/^[a-zA-Z0-9_]+$/i,})}
                      className="form-control"
                      placeholder="User Name"
                    ></input>
                    <span className="text-danger">
                      {errors.username?.type === "required" && "Username is required"}
                      {errors.username?.type === "pattern" && "Username is in wrong format"}
                    </span>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="mb-3">
                    <label className="form-lable">
                      Email<span className="text-danger">*</span>
                    </label>
                    <input
                      type="email"
                      {...register("email",{ required: true,pattern:'/^[a-zA-Z0-9._%+-:]{3,30}',})}
                      className="form-control"
                      placeholder="Email"
                    ></input>
                    <span className="text-danger">
                      {errors.email?.type === "required" && "Email is required"}
                      {errors.email?.type === "pattern" && "Enter Valid Email"}
                    </span>
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="mb-3">
                    <label className="form-lable">
                      Password<span className="text-danger">*</span>
                    </label>
                    <input
                      type="password"
                      {...register("password",{ required: true,minLength:6,maxLength:20 })}
                      className="form-control"
                      placeholder="Password"
                    ></input>
                    <span className="text-danger">
                      {errors.password?.type === "required" && "Password is required"}
                      {errors.password?.type === "minLength" && "Enter Password is Less then 6 Digits"}
                      {errors.password?.type === "maxLength" && "Enter Password is more then 20 Digits"}
                    </span>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="mb-3">
                    <label className="form-lable">
                      Mobile<span className="text-danger">*</span>
                    </label>
                    <input
                      type="number"
                      {...register("mobile",{ required: true,minLength:10,maxLength:15 })}
                      className="form-control"
                      placeholder="Mobile"
                    ></input>
                    <span className="text-danger">
                      {errors.mobile?.type === "required" && "Mobile is required"}
                      {errors.password?.type === "minLength" && "Enter Mobile is Less then 10 Digits"}
                      {errors.password?.type === "maxLength" && "Enter Mobile is more then 15 Digits"}
                    </span>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="mb-3">
                    <label className="form-lable">
                      Gender<span className="text-danger">*</span>
                    </label>
                    <select
                      {...register("gender",{ required: true })}
                      className="form-control"
                      placeholder="Mobile"
                    >
                      <option value={""}>--Please Select--</option>
                      <option value="male">Male</option>
                      <option value={"female"}>Female</option>
                      <option value={"other"}>Other</option>
                    </select>
                    <span className="text-danger">
                      {errors.gender?.type === "required" && "Gender is required"}
                    </span>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="mb-3">
                    <label className="form-lable">
                      Country<span className="text-danger">*</span>
                    </label>
                    <select
                    {...register("countryid",{ required: true })}
                     className="form-control"
                      placeholder="Country"
                    >
                      <option value={""}>--Please Select--</option>
                      {
                        countryData.map((countryitem,index)=>(
                            <option value={countryitem.id} key={index}>{countryitem.name}</option>
                        ))
                      }
                      {/* <option value="1">USA</option>
                      <option value={"2"}>INDIA</option>
                      <option value={"3"}>Other</option> */}
                    </select>
                    <span className="text-danger">
                      {errors.countryid?.type === "required" && "Country is required"}
                    </span>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="mb-3">
                    <label className="form-lable">
                      State<span className="text-danger">*</span>
                    </label>
                    <select
                     {...register("stateid",{ required: true })}
                      className="form-control"
                      placeholder="State"
                    >
                      <option value={""}>--Please Select--</option>
                      <option value="1">Delhi</option>
                      <option value={"2"}>Punjab</option>
                      <option value={"3"}>Haryana</option>
                    </select>
                    <span className="text-danger">
                      {errors.stateid?.type === "required" && "State is required"}
                    </span>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="mb-3">
                    <label className="form-lable">
                      Address 1<span className="text-danger">*</span>
                    </label>
                    <textarea
                      type="text"
                      {...register("address1",{ required: true })}
                      className="form-control"
                      placeholder="Address"
                    ></textarea>
                     <span className="text-danger">
                      {errors.stateid?.type === "required" && "State is required"}
                    </span>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="mb-3">
                    <label className="form-lable">Address 2</label>
                    <textarea
                      type="text"
                      {...register("address2")}
                      className="form-control"
                      placeholder="Address"
                    ></textarea>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="mb-3">
                    <div className="form-check form-check-inline">
                      <input
                        type="checkbox"
                        {...register("accept",{ required: true })}
                        className="form-check-input"
                        value={"1"}
                      />
                      
                      <label className="form-check-lable">
                        Accept All Conditions
                        <span className="text-danger">*</span>
                      </label>
                      <span className="text-danger">
                      {errors.accept?.type === "required" && "Checkbox is required"}
                    </span>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="mb-3">
                    <button type="submit" className="btn btn-success btn-lg">
                      Submit
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Useregistration;

