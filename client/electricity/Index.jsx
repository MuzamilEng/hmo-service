import React, { useEffect, useState } from "react";
import Link from "next/link";
import Prepaid from "./components/Prepaid";
import PostPaid from "./components/Postpaid";
import 'react-toastify/dist/ReactToastify.css';
import { toast, ToastContainer } from 'react-toastify';
import { useAddElectricityMutation, useGetElectricityQuery } from "../pages/store/vtpassApi";
import { useGlobalContext } from "../store/authStore";

const Electricity = () => {
  const { data, refetch } = useGetElectricityQuery();
  const [name1, setName1] = useState("")
  // post methods
  const [pendingStatus, setPendingStatus] = useState(false);

  const [serviceId, setServiceId] = useState('');
  const [billerCode, setBillerCode] = useState('');
  const [variationCode, setVariationCode] = useState('');
  const [phone, setPhone] = useState('');
  const [amount, setAmount] = useState('');
  const [updateData, setUpdateData] = useState(data)
  const [addElectricity] = useAddElectricityMutation()
  const { requestId } = useGlobalContext()
  // post methods
  const [state, setState] = useState([]);
  const [showData, setShowData] = useState(true);

  const initialToggleStates = state?.map(() => false);
  const [toggleStates, setToggleStates] = useState(initialToggleStates);

  const handleToggle = (index) => {
    // Create a new array by copying the existing toggleStates array
    const newToggleStates = [...toggleStates];
    // Toggle the value for the selected index
    newToggleStates[index] = !newToggleStates[index];
    // Update the state with the new array
    setToggleStates(newToggleStates);
  };

  const submitForm = async (e) => {
    e.preventDefault();
    console.log("submitted");

    if (!serviceId || !billerCode || !phone) {
      toast.error('Please fill out all fields before submitting.', {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 5000,
      });
      return;
    }

    try {
      const result = await addElectricity({
        serviceID: serviceId,
        request_id: requestId,
        billersCode: billerCode,
        variation_code: variationCode,
        amount: amount,
        phone: phone,
      });
      setUpdateData(result);
      setPendingStatus(true);
      if (result && (result.status == '200' || 200 || result.status == '201' || 201)) {
        toast.success('Action successful!', {
          position: toast.POSITION.TOP_RIGHT,
          autoClose: 3000,
        });
        // setPendingStatus(false);
        setInterval(() => {
          refetch();
          setPendingStatus(false);
        }, 20000);
      }
      else if (result && (result.status == '400' || result.status == '500')) {
        toast.error('Something went wrong', {
          position: toast.POSITION.TOP_CENTER,
          autoClose: 5000,
        });
        setPendingStatus(false);
      }
    } catch (error) {
      console.error('Error occurred:', error);
    }
    setPhone('');
    setAmount('');
    setBillerCode('');
    setServiceId('');
    setVariationCode('');

  };
  
  useEffect(() => {
    if (document) {
      const ApexCharts = require("apexcharts");
      console.log(ApexCharts);
    }
  }, []);
  useEffect(() => {
    if (data) {
      setState(prevState => [...prevState, ...data]);
    }
  }, [data]);
  useEffect(() => {
    // Start the query when the component mounts
    refetch();
  }, []);
  useEffect(() => {
  }, [updateData, state, data])
  return (
    <div className="page-wrapper">
      <div className="content container-fluid">
        <div id="filter_inputs" className="card filter-card">
          <div className="card-body pb-0">
            <div className="row">
              <div className="col-sm-6 col-md-3">
                <div className="form-group">
                  <label>Name</label>
                  <input type="text" className="form-control" />
                </div>
              </div>
              <div className="col-sm-6 col-md-3">
                <div className="form-group">
                  <label>Email</label>
                  <input type="text" className="form-control" />
                </div>
              </div>
              <div className="col-sm-6 col-md-3">
                <div className="form-group">
                  <label>Phone</label>
                  <input type="text" className="form-control" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* container */}
        <div className="row">
          <div className="col-xl-4 col-sm-6 col-12">
            <div className="card">
              <div className="card-body">
                <div className="dash-widget-header">
                  <div className="avatar mr-2 mt-4">
                    <img
                      className="avatar-img rounded"
                      alt=""
                      src={
                        "https://res.cloudinary.com/dev-staunty007/image/upload/v1645338943/paymax/icons/ei8wg9ooutt7c5ndr7of.png"
                      }
                    />
                  </div>
                  <div className="dash-count">
                    <div className="dash-title"> Successful Payments </div>
                  </div>
                </div>

                <div className="d-flex justify-content-between align-items-center mt-3">
                  <div
                    className="dropdown text-muted mt-3 mb-0"
                    data-toggle="dropdown"
                  >
                    <span className="text-success me-1">
                      <i className="fas fa-arrow-up me-1"></i>2.37%
                    </span>
                    <a
                      href="#"
                      className="btn btn-white btn-sm dropdown-toggle"
                      role="button"
                      data-toggle="dropdown"
                    >
                      Select
                    </a>
                    <div className="dropdown-menu dropdown-menu-left">
                      <a href="#" className="dropdown-item">
                        Today
                      </a>
                      <a href="#" className="dropdown-item">
                        This Week
                      </a>
                      <a href="#" className="dropdown-item">
                        This Month
                      </a>
                      <a href="#" className="dropdown-item">
                        This Year
                      </a>
                    </div>
                  </div>

                  <div className="input-group-prepend">
                    <span className="nairaSlim input-group-text">₦</span>
                    <div className="dash-counts mt-2">
                      <p>3,642</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-sm-6 col-12">
            <div className="card">
              <div className="card-body">
                <div className="dash-widget-header">
                  <div className="avatar mr-2 mt-4">
                    <img
                      className="avatar-img rounded"
                      alt=""
                      src={
                        "https://res.cloudinary.com/dev-staunty007/image/upload/v1645338942/paymax/icons/lh2uk3vhnov4w7eidees.png"
                      }
                    />
                  </div>
                  <div className="dash-count">
                    <div className="dash-title"> Failed Payments </div>
                  </div>
                </div>
                <div className="d-flex justify-content-between align-items-center mt-3">
                  <div
                    className="dropdown text-muted mt-3 mb-0"
                    data-toggle="dropdown"
                  >
                    <span className="text-success me-1">
                      <i className="fas fa-arrow-up me-1"></i>2.37%
                    </span>
                    <a
                      href="#"
                      className="btn btn-white btn-sm dropdown-toggle"
                      role="button"
                      data-toggle="dropdown"
                    >
                      Select
                    </a>
                    <div className="dropdown-menu dropdown-menu-left">
                      <a href="#" className="dropdown-item">
                        This Week
                      </a>
                      <a href="#" className="dropdown-item">
                        This Month
                      </a>
                      <a href="#" className="dropdown-item">
                        This Year
                      </a>
                    </div>
                  </div>
                  <div className="input-group-prepend">
                    <span className="nairaSlim input-group-text">₦</span>
                    <div className="dash-counts mt-2">
                      <p>3,642</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-sm-6 col-12">
            <div className="card">
              <div className="card-body">
                <div className="dash-widget-header">
                  <div className="avatar mr-2 mt-4">
                    <img
                      className="avatar-img rounded"
                      alt=""
                      src={
                        "https://res.cloudinary.com/dev-staunty007/image/upload/v1645340671/paymax/icons/yidm8jdbyxeljsfluuwm.png"
                      }
                    />
                  </div>
                  <div className="dash-count">
                    <div className="dash-title"> Referral</div>
                  </div>
                </div>
                <div className="d-flex justify-content-between align-items-center mt-3">
                  <div
                    className="dropdown text-muted mt-3 mb-0"
                    data-toggle="dropdown"
                  >
                    <span className="text-success me-1">
                      <i className="fas fa-arrow-up me-1"></i>2.37%
                    </span>
                    <a
                      href="#"
                      className="btn btn-white btn-sm dropdown-toggle"
                      role="button"
                      data-toggle="dropdown"
                    >
                      Select
                    </a>
                    <div className="dropdown-menu dropdown-menu-left">
                      <a href="#" className="dropdown-item">
                        All
                      </a>

                      <a href="#" className="dropdown-item">
                        This Month
                      </a>
                      <a href="#" className="dropdown-item">
                        This Year
                      </a>
                    </div>
                  </div>
                  <div className="input-group-prepend">
                    <span className="nairaSlim input-group-text">₦</span>
                    <div className="dash-counts mt-2">
                      <p>3,642</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div style={{width: '42.666667%'}} className="col-xl-6 d-flex">
            <div className="card flex-fill">
              <div className="card-header">
                <h5 className="card-title">Electricity Related Payments</h5>
              </div>
              <div className="card-body">
                <div className="row">
                  <div className="col-md-6">
                    <div className="ribbon ribbon-primary">
                      Featured Service Providers
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="col-md-12 mb-4">
                      <div className="avatar mr-2">
                        <img
                          className="avatar-img rounded"
                          alt="MTN"
                          src={
                            "https://res.cloudinary.com/dev-staunty007/image/upload/v1595664211/paymax/internet/fhdivxrpvizdvcbzxdfz.png"
                          }
                        />
                      </div>

                      <div className="avatar mr-2">
                        <img
                          className="avatar-img rounded"
                          alt=""
                          src={
                            "https://res.cloudinary.com/dev-staunty007/image/upload/v1595664214/paymax/internet/uo5xg3fbmea1aqm9urr4.png"
                          }
                        />
                      </div>

                      <div className="avatar mr-2">
                        <img
                          className="avatar-img rounded"
                          alt="Airtel"
                          src={
                            "https://res.cloudinary.com/dev-staunty007/image/upload/v1595664206/paymax/internet/vfsuv5y5rg72lympqvqg.png"
                          }
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <form action="#">
                <>
      <div className="form-group row">
        <label className="col-lg-5 col-form-label">Bill Type</label>
        <div className="col-lg-7">
          <select className="form-control" value={variationCode} onChange={(e) => setVariationCode(e.target.value)}>
            <option value="">-- Select --</option>
            <option value="prepaid">Prepaid</option>
            <option value="postpaid">PostPaid</option>
          </select>
        </div>
      </div>
      <ToastContainer />
      <div className="form-group row">
        <label className="col-lg-5 col-form-label">Disco </label>
        <div className="col-lg-7">
          <select className="form-control" value={serviceId} onChange={(e) => setServiceId(e.target.value)}>
            <option value="">-- Select --</option>
            <option value="jos-electric">Jos Electric</option>
            <option value="eko-electric">Eko Electric</option>
            <option value="ikeja-electric">Ikeja Electric</option>
            <option value="portharcourt-electric">Port Harcourt Electric</option>
            <option value="kaduna-electric">Kaduna Electric</option>
            <option value="ibadan-electric">Ibadan Electricity</option>
            <option value="kano-electric">Kano Electric</option>
            <option value="abuja-electric">Abuja Electricity</option>
            <option value="enugu-electric">Enugu Electric</option>
            <option value="benin-electric">Benin Electricity</option>
          </select>
        </div>
      </div>
      <div className="form-group row">
        <label className="col-lg-5 col-form-label">Meter Number</label>
        <div className="col-lg-7">
          <input
            type="text"
            className="form-control"
            placeholder="Enter Meter Number"
            value={billerCode}
            onChange={(e) => setBillerCode(e.target.value)}
          />
        </div>
      </div>
      <div className="form-group row">
        <label className="col-lg-5 col-form-label">Phone Number</label>
        <div className="col-lg-7">
          <input
            type="text"
            className="form-control"
            placeholder="Enter Phone Number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>
      </div>
      <div className="form-group row">
        <label className="col-lg-5 col-form-label">Amount</label>
        <div className="col-lg-7">
          <div className="input-group">
            <div className="input-group-prepend">
              <span className="mySpanClass input-group-text" id="basic-addon1">
                ₦
              </span>
            </div>
            <input
              type="text"
              className="form-control"
              onChange={(e) => setAmount(e.target.value)}
              value={amount}
              placeholder="Amount"
              aria-label="amount"
              aria-describedby="basic-addon1"
            />
          </div>
        </div>
      </div>
      <br />
      <div className="text-right">
        <button type="submit" className="btn btn-primary" onClick={submitForm}>
          Submit
        </button>
      </div>
    </>
                </form>
              </div>
            </div>
          </div>
          <div style={{width: '48rem'}} className="col-md-7 col-sm-7">
            <div className="card">
              <div className="card-header">
                <div className="row">
                  <div className="col">
                    <h5 className="card-title">Recent Invoices</h5>
                  </div>
                  <div className="col-auto">
                    <Link href="/invoices">
                      <a className="btn-right btn btn-sm btn-outline-primary">
                        View All
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="card-body">
                <div className="mb-3">
                  <div className="progress progress-md rounded-pill mb-3">
                    <div
                      className="progress-bar bg-success"
                      role="progressbar"
                      style={{ width: "47%" }}
                      aria-valuenow="47"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                    <div
                      className="progress-bar bg-warning"
                      role="progressbar"
                      style={{ width: "28%" }}
                      aria-valuenow="28"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                    <div
                      className="progress-bar bg-danger"
                      role="progressbar"
                      style={{ width: "15%" }}
                      aria-valuenow="15"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                    <div
                      className="progress-bar bg-info"
                      role="progressbar"
                      style={{ width: "10%" }}
                      aria-valuenow="10"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                  {pendingStatus ? <p className=" text-md text-red-500">Please wait bill status is ...Pending</p>: ''}
                </div>

                  {/* table  data */}
                  <div className="table-responsive" style={{ marginLeft: "-1rem" }}>
                  <div className="flex grid-cols-5 justify-evenly p-1 border-b-2 border-gray-500" style={{ marginLeft: "-5rem" }}>
                    {/* <p className="text-gray-800 text-base ml-2">Customer</p> */}
                    <p className="text-gray-800 text-base">Disco</p>
                    <p className="text-gray-800 text-base">Amount</p>
                    <p className="text-gray-800 text-base">Meter Number</p>
                    {/* <p className="text-gray-800 text-base">Commission</p> */}
                    <p className="text-gray-800 text-base">Action</p>
                  </div>
                  <div className="" style={{ marginLeft: "-5rem" }}>
                  {showData && state?.slice(-6)?.reverse()?.map((item, index)=> {
                        return (
                          <div key={index} className="flex p-1 mt-2 w-8 items-center justify-evenly border-b-2 border-gray-900">
                            {/* <p>{name1?.username}</p> */}
                           <p>{item?.responseData?.amount}</p>
                           <p style={{fontSize: ".9rem", width: "8rem"}} className="max-w-xs text-sm whitespace-normal">{item?.responseData?.content?.transactions?.product_name}</p>
                           <p style={{marginLeft: "-3rem"}} className="-ml-2">{item?.responseData?.content?.transactions?.unique_element}</p>
                          <div className="relative">
                            <p
                              className="text-2xl cursor-pointer -ml-4 mr-4"
                              onClick={() => handleToggle(index)}
                              value={index}
                              >
                              ...
                              </p>
                              {toggleStates[index] && ( // Show toggle only if toggleStates[index] is true
                              <div className="text-sm absolute ml-4 pl-4 -right-0 top-0">
                              <ul className="h-fit border-2 border-gray-600 ul_lists text-justify">
                              <li style={{fontSize: ".8rem", padding: ".3rem"}}>Download Receipt</li>
                              <li style={{fontSize: ".8rem", padding: ".3rem"}}>Forward Receipt</li>
                                  <li style={{fontSize: ".8rem", padding: ".3rem"}}>Pay another</li>
                                  </ul>
                                  </div>
                                )}
                          </div>
                          </div>
                        )
                      })}

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Electricity;

// used for toggle ...
// useEffect(() => {
//   const getUsernameFromLocalStorage = () => {
//     const username = localStorage.getItem('username');
//     return username;
//   };

//   const initialUsername = getUsernameFromLocalStorage();
//   setName1((prevName) => ({ ...prevName, username: initialUsername }));
// }, []);
//   const initialToggleStates = state?.map(() => false);
//   const [toggleStates, setToggleStates] = useState(initialToggleStates);

//   const handleToggle = (index) => {
//     const newToggleStates = [...toggleStates];
//     newToggleStates[index] = !newToggleStates[index];
//     setToggleStates(newToggleStates);
//   };


//  useEffect(() => {
//  }, [data, state]);