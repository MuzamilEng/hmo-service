import React, { useEffect, useState } from 'react';
import { useAddDuesMutation, useAddJambfeeMutation } from '../../pages/store/vtpassApi';
import 'react-toastify/dist/ReactToastify.css';
import { toast, ToastContainer } from 'react-toastify';
import { useGlobalContext } from '../../store/authStore';

const Jamb = ({ onSuccess }) => {
  // feeType, wacepkg, amount, phone
  const [feeType, setFeeType] = useState("");
  const [wacepkg, setWacepkg] = useState("");
  // const [amount, setAmount] = useState("");
  // const [phone, setPhone] = useState("");


  // const submitForm = async (e) => {
  //   e.preventDefault();
  
  //   // Check if any required field is missing
  //   if (!wacepkg || !amount || !phone) {
  //     toast.error('Please fill out all required fields before submitting.', {
  //       position: toast.POSITION.TOP_CENTER,
  //       autoClose: 5000,
  //     });
  //     return; // Return early if any required field is missing
  //   }
  
  //   try {
  //     const myHeaders = new Headers();
  //     myHeaders.append('Content-Type', 'application/json');
  
  //     const data = {
  //       feeType,
  //       wacepkg,
  //       amount,
  //       phone,
  //     };
  
  //     const requestOptions = {
  //       method: 'POST',
  //       headers: myHeaders,
  //       body: JSON.stringify(data),
  //       redirect: 'follow',
  //     };
  
  //     const response = await fetch('http://localhost:3000/api/v1/jambfee/', requestOptions);
  
  //     if (response.ok || response.status === 200) {
  //       toast.success('Action successful!', {
  //         position: toast.POSITION.TOP_RIGHT,
  //         autoClose: 3000,
  //       });
  //       window.location.reload("/education"); // Redirect to the specified URL
  //       onSuccess();
  //     } else {
  //       const result = await response.json();
  //       // Handle the response error here
  //       // toast.error('Something went wrong!', {
  //       //   position: toast.POSITION.TOP_CENTER,
  //       //   autoClose: 5000,
  //       // });
  //     }
  //   } catch (error) {
  //     // toast.error('Something went wrong!', {
  //     //   position: toast.POSITION.TOP_CENTER,
  //     //   autoClose: 5000,
  //     // });
  //     console.log('error', error);
  //   }
  
  //   setFeeType('');
  //   setWacepkg('');
  //   setPhone('');
  //   setAmount('');
  // };
  
  const [serviceId, setServiceId] = useState('');
  const [billersCode, setBillersCode] = useState('');
  const [variationCode, setVariationCode] = useState('');
  const [phone, setPhone] = useState(null);
  const [amount, setAmount] = useState(0);


  const [addJambfee] = useAddJambfeeMutation();
  
const {requestId} = useGlobalContext()
const submitForm = async (e) => {
  e.preventDefault();

  if (!billersCode || !phone) {
    toast.error('Please fill out all required fields before submitting.', {
      position: toast.POSITION.TOP_CENTER,
      autoClose: 5000,
    });
    return; // Return early if any required field is missing
  }

  try {
    if (variationCode === 'de') {
      setVariationCode('de');
    }
    if (variationCode === 'utme') {
      setVariationCode('utme');
    }
    let result = null;
    result = await addJambfee({
      serviceID: 'jamb',
      billersCode: billersCode,
      variation_code: variationCode,
      amount: amount,
      phone: phone,
      request_id: requestId,
    });
    // console.log('API Response:', result); // Check the response in the console

    if (result && result.status == 200 || '200' || result.status == 201 || '201') {
      // console.log('Action successful:', result); // Check if this log is displayed

      toast.success('Action successful!', {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 3000,
      });

      // Reload the page or navigate to the specified URL
      // window.location.reload();
      window.location.href = '/education';
    } else if (result && result.status == 400 || '400' || result.status == 500 || '500') {
      toast.error('Something went wrong!', {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 5000,
      });
      console.error('Error:', result.errors);
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

  // setSelect('');
  setAmount('');
  setPhone('');
  setVariationCode('');
};
  useEffect(() => {
    if (variationCode === 'select') {
      setAmount(0);
    } else if (variationCode === 'utme' || variationCode === 'de') {
      setAmount(4700);
    }
  }, [variationCode]);
  
  return (
    <>
      <div className="form-group row">
        <label className="col-lg-5 col-form-label">Jamb Package  </label>
        <div className="col-lg-7">
          <select className="form-control" value={variationCode} onChange={(e) => setVariationCode(e.target.value)}>
            <option value = 'select'>-- Select --</option>
            <option value={'utme'}>UTME</option>
            <option value={'de'}>Direct Entry (DE)</option>
          </select>
        </div>
      </div>
      <ToastContainer />
      <div className="form-group row">
        <label className="col-lg-5 col-form-label">Profile ID Number</label>
        <div className="col-lg-7">
          <input type="text" className="form-control" placeholder="Your Phone Number" value={billersCode} onChange={(e) => setBillersCode(e.target.value)} />
        </div>
      </div>
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