import React, { useState } from 'react';
import Link from 'next/link';
import Header from '../../layouts/Header';
import Sidebar from '../../layouts/Sidebar';
import ContinueButton from './components/ContinueButton';
import BackButton from './components/BackButton';
import Idea from './components/Idea';
import Progress from './components/Progress';
import { FileUploader } from "react-drag-drop-files";
import { Form } from "react-bootstrap";


const fileTypes = ["JPG", "PNG", "GIF"];


const EstablishmentProof = (props) => {
    const [file, setFile] = useState(null);
    const handleChange = (file) => {
        setFile(file);
    };

    const [menu, setMenu] = useState(false)

    const toggleMobileMenu = () => {
        setMenu(!menu)
    }

    return (

        <>
            <div className={`main-wrapper ${menu ? 'slide-nav' : ''}`}>

                <Header onMenuClick={(value) => toggleMobileMenu()} />
                <Sidebar />
                {/* Page Wrapper */}
                <div className="page-wrapper">
                    <div className="content container-fluid">

                        {/* Page Header */}
                        <div className="page-header">
                            <div className="row align-items-center">
                                <div className="col">
                                    <h3 className="page-title">Profile</h3>
                                </div>

                            </div>
                        </div>
                        {/*  /Page Header */}
                        <div className="row mb-5" style={{ marginLeft: "-50px", marginTop: "-10px", height: "1px", color: "#28328C", width: "1200px" }}>
                            <Progress progress={100} />
                        </div>
                        <div className="row">
                            <div className="col-6">
                                <div className="row mb-5">
                                    <div className="col-8">
                                        <h5><b>Establsihment Proof</b></h5>
                                        <small>Jamhur Ghifari</small>
                                    </div>
                                    <div className="col-4">
                                        <small>Step 1/3</small>
                                    </div>
                                </div>
                                <form action="">
                                    <fieldset>
                                        <Form.Group>
                                            <Form.Label>
                                                I am:
                                            </Form.Label>

                                            <Form.Check
                                                type="radio"
                                                label="the owner of establishment"
                                                name="practice"
                                                id="practice1"
                                            />
                                            <Form.Check
                                                type="radio"
                                                label="have rented at other establishment"
                                                name="practice"
                                                id="practice2"
                                            />
                                            <Form.Check
                                                type="radio"
                                                label="a consultant doctor"
                                                name="practice"
                                                id="practice2"
                                            />
                                            <Form.Check
                                                type="radio"
                                                label="practicing at home"
                                                name="practice"
                                                id="practice2"
                                            />

                                        </Form.Group>
                                    </fieldset>
                                    <p>Accepted proofs {"(Any one)"}</p>
                                    <p>Clinic Registration Proof/ Waste Disposal Proof/ Tax reciept</p>
                                    <FileUploader handleChange={handleChange} name="file" types={fileTypes} />
                                    <br />
                                    <hr />
                                    <div className="row ps-1 mt-3">
                                        <div className="col-6">
                                            <Link href="/profile/medicalregistrationproof">
                                                <a>
                                                    <div className="row p-2">
                                                        <BackButton />

                                                    </div>
                                                </a>
                                            </Link>

                                        </div>
                                        <div className="col-6">
                                            <Link href="/profile/finalprofileverification">
                                                <a>
                                                    <div className="row p-2">
                                                        <ContinueButton />

                                                    </div>
                                                </a>
                                            </Link>

                                        </div>
                                    </div>
                                </form>
                            </div>
                            <div className="col-6 p-4">
                                <div className="row align-items-center justify-content-center">
                                    <Idea message="2.5M patients are looking for a doctor on Practo. Verify your credentials and reach out to them" />
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>


    );

}
export default EstablishmentProof;

