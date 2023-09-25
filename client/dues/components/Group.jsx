import React, { useEffect, useState } from 'react';
import { useAddDuesMutation } from '../../pages/store/vtpassApi';
import 'react-toastify/dist/ReactToastify.css';
import { toast, ToastContainer } from 'react-toastify';
// import Select2 from 'react-select2-wrapper';


const Group = () => {

    const [serviceType, setServiceType] = useState("");
    const [subscription, setSubscription] = useState("");
    const [groupService, setGroupService] = useState();
    const [amount, setAmount] = useState(null);
    const [phone, setPhone] = useState(null);
      const submitForm = async (e) => {
        e.preventDefault();
      
        try {
          if (!serviceType || !subscription || !groupService || !phone || !amount) {
            toast.error('Please fill out all required fields before submitting.', {
              position: toast.POSITION.TOP_CENTER,
              autoClose: 5000,
            });
            return; // Return early if any required field is missing
          }
          const myHeaders = new Headers();
          myHeaders.append('Content-Type', 'application/json');
          const data = {
            serviceType,
            subscription,
            groupService,
            phone,
            amount,
            dateTime: 'african/lagos',
            product_id: '0811117533331111jjgjwhuwdhwdi',
            transaction_id: '786387r877429jhhi848',
            transaction_status: 'success',
            transaction_message: null,
            transaction_reference: null,
            costumer_id: '0oo9998622611',
            customer_name: null,
            content:{
              transactions: null,
              errors: null,
              unique_id: true,
              message: null
            },
            details: {
              email: 'sandbox@gmail.com',
              phone_no: '0801111111111',
            }
          };
      
          const requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: JSON.stringify(data),
            redirect: 'follow',
          };
      
          const response = await fetch('http://localhost:3000/api/v1/dues/', requestOptions);
          const result = await response.json();

          window.location.reload("/dues"); // Redirect to the specified URL

          if (response.ok || response.status === 200 || '200') {
            toast.success('Action successful!', {
              position: toast.POSITION.TOP_RIGHT,
              autoClose: 3000,
            });
            window.location.reload("/dues"); // Redirect to the specified URL
            onSuccess();
          } else {
            const result = await response.json();
          }
        } catch (error) {
          console.log('error', error);
        }
      
        setAmount('');
        setPhone('');
         setServiceType('');
         setSubscription('');
         setGroupService('');
      };


    return (
        <>
        <div className="form-group row">
                    <label className="col-lg-5 col-form-label"> Type</label>
                    <div className="col-lg-7">
                      <select className="form-control" value={serviceType} onChange={(e)=> setServiceType(e.target.value)}>
                        <option value="">-- Select --</option>
                        <option value="Groups/Association">Groups/Association</option>
                        <option value="Service/Subscription">Service Subscription</option>
                      </select>
                    </div>
                  </div>
                  <ToastContainer />
            <div className="form-group row">
                <label className="col-lg-5 col-form-label">Group or Service Type </label>
                <div className="col-lg-7">
                <select className="form-control" value={groupService} onChange={(e)=> setGroupService(e.target.value)}>
                        <option value="">-- Select --</option>
                        <option value="Sons of the Propheton">Sons of the Prophet</option>
                        <option value="Peoples Club of Nigeria">Peoples Club of Nigeria</option>
                        <option value="Born Again Association">Born Again Association</option>
                      </select>
                </div>
            </div>
            <div className="form-group row">
                <label className="col-lg-5 col-form-label">Subscription Name </label>
                <div className="col-lg-7">
                <select className="form-control" value={subscription} onChange={(e)=> setSubscription(e.target.value)}>
                        <option value="">-- Select --</option>
                        <option value="Monthly Prophetic">Monthly Prophetic</option>
                        <option value="Case 2">Case 2</option>
                        <option value="Case 3">Case 3</option>
                      </select>
                </div>
            </div>
         
            <div className="form-group row">
                <label className="col-lg-5 col-form-label">Mobile Number</label>
                <div className="col-lg-7">
                    <input type="text" className="form-control" name='mobileNumber' value={phone} placeholder="Mobile Phone Number" onChange={(e)=> setPhone(e.target.value)}  />
                </div>
            </div>



            <div className="form-group row">
                <label className="col-lg-5 col-form-label">Amount</label>
                <div className="col-lg-7">
                    <div className="input-group">
                        <div className="input-group-prepend">
                            <span className="mySpanClass input-group-text" id="basic-addon1">₦</span>
                        </div>
                        <input type="text" className="form-control" onChange={(e)=> setAmount(e.target.value)} value={amount} placeholder="Amount" aria-label="amount" />
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
export default Group;