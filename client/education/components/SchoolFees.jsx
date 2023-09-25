import React, { useEffect, useState } from 'react';
import { useAddDuesMutation, useAddEducationMutation } from '../../pages/store/vtpassApi';
import 'react-toastify/dist/ReactToastify.css';
import { toast, ToastContainer } from 'react-toastify';
import { useGlobalContext } from '../../store/authStore';

const Jamb = ({ onSuccess }) => {
  const [adSeccion, setAdSession] = useState("");
  const [semester, setSemester] = useState("");
  const [matric, setMatric] = useState("");
  const [name, setName] = useState("");
  const [serviceId, setServiceId] = useState('');
  const [variationCode, setVariationCode] = useState('');
  const [phone, setPhone] = useState(null);
  const [amount, setAmount] = useState(0);
  const [addEducation] = useAddEducationMutation();

  const { requestId } = useGlobalContext()
  console.log(requestId, "Request");
  const submitForm = async (e) => {
    e.preventDefault();

    try {
      if (!phone || !variationCode) {
        toast.error('Please fill out all required fields before submitting.', {
          position: toast.POSITION.TOP_CENTER,
          autoClose: 5000,
        });
        return; // Return early if any required field is missing
      }

      const myHeaders = new Headers();
      myHeaders.append("api-key", "14509672042f290d6a49fd1aa664b6f5");
      myHeaders.append("secret-key", "SK_106be5b1491d929c5bffef06b2aa244fb00305d83b0");
      myHeaders.append("Content-Type", "application/json");

      const raw = JSON.stringify({
        "request_id": requestId,
        "variation_code": "waec-registration",
        "serviceID": "waec-registration",
        "amount": 14450.00,
        "phone": 8011111111
      });

      const requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
      };

      const response = await fetch("http://localhost:3000/api/v1/education", requestOptions);
      const result = await response.text();

      if (response.status === 200 || '200' || response.status === 201 || '201') {
        toast.success('Action successful!', {
          position: toast.POSITION.TOP_RIGHT,
          autoClose: 3000,
        });

        window.location.href = '/education';
      } else if (response.status === 400 || '400' || response.status === 500 || '500') {
        toast.error('Something went wrong!', {
          position: toast.POSITION.TOP_CENTER,
          autoClose: 5000,
        });
        console.error('Error:', result);
      } else {
        toast.error('Something went wrong!', {
          position: toast.POSITION.TOP_CENTER,
          autoClose: 5000,
        });
        console.error('Error:', result);
      }
    } catch (error) {
      toast.error('Something went wrong!', {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 5000,
      });
      console.error('Error:', error);
    }
  };
  
  useEffect(() => {
    setAmount(14450.00);
  }, [])
  return (
    <>
      {/* <div className="form-group row">
        <label className="col-lg-5 col-form-label">School Type </label>
        <div className="col-lg-7">
          <select className="form-control" value={serviceId} onChange={(e) => setServiceId(e.target.value)}>
            <option>-- Select --</option>
            <option value='waec1'>KG</option>
            <option value='waec2'>Tertiary</option>
            <option value='waec3'>College</option>
          </select>
        </div>
      </div> */}
      <ToastContainer />
      <div className="form-group row">
        <label className="col-lg-5 col-form-label">School Name </label>
        <div className="col-lg-7">
          <select className="form-control" value={variationCode} onChange={(e) => setVariationCode(e.target.value)}>
            <option>-- Select --</option>
            <option style={{width: '2rem'}} value='waec-registraion'>Private Candidates - Second Series</option>
          </select>
        </div>
      </div>
      {/* <div className="form-group row">
        <label className="col-lg-5 col-form-label">Academic Session</label>
        <div className="col-lg-7">
          <select className="form-control" value={adSeccion} onChange={(e) => setAdSession(e.target.value)}>
            <option>-- Select --</option>
            <option value={'2020/2021'}>2021/2022</option>
            <option value={'2021/2022'}>2022/2023</option>
            <option value={'2022/2023'}>2023/2024</option>
          </select>
        </div>
      </div>
      <div className="form-group row">
        <label className="col-lg-5 col-form-label">Semester/Term</label>
        <div className="col-lg-7">
          <select className="form-control" value={semester} onChange={(e) => setSemester(e.target.value)}>
            <option>-- Select --</option>
            <option value={'1st'}>1st</option>
            <option value={'2nd'}>2nd</option>
            <option value={'3rd'}>3rd</option>
          </select>
        </div>
      </div>
      <div className="form-group row">
        <label className="col-lg-5 col-form-label">Reg Or Matric Number</label>
        <div className="col-lg-7">
          <input type="text" className="form-control" placeholder="Your Reg or Matric Number" value={matric} onChange={(e) => setMatric(e.target.value)} />
        </div>
      </div>
      <div className="form-group row">
        <label className="col-lg-5 col-form-label">Student Name</label>
        <div className="col-lg-7">
          <div className="input-group">
            <div className="input-group-prepend">

            </div>
            <input type="text" className="form-control" aria-describedby="basic-addon1" value={name} onChange={(e) => setName(e.target.value)} />
          </div>
        </div>
      </div> */}
      <div className="form-group row">
        <label className="col-lg-5 col-form-label">Phone Number</label>
        <div className="col-lg-7">
          <input type="text" className="form-control" placeholder="Your Phone Number" value={phone} onChange={(e) => setPhone(e.target.value)} />
        </div>
      </div>

      <div className="form-group row">
        <label className="col-lg-5 col-form-label">Amount</label>
        <div className="col-lg-7">
          <div className="input-group">
            <div className="input-group-prepend">
              <span className="input-group-text" id="basic-addon1">₦</span>
            </div>
            <input type="text" className="form-control" placeholder="Amount" aria-label="amount" aria-describedby="basic-addon1" value={amount} onChange={(e) => setAmount(e.target.value)} />
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
  )
}
export default Jamb;