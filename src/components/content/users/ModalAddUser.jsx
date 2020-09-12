import React, { useState } from 'react';

import { Formik } from 'formik'
import * as Yup from "yup";




const ModalAddUser = (props) => {

    const schema = Yup.object({
        email: Yup.string()
            .email('Invalid email')
            .required('Required'),
        nom: Yup.string()
            .min(2, 'Too Short!')
            .max(50, 'Too Long!')
            .required('Required'),
        telephone: Yup.string()
            .required('Required'),
        prenom: Yup.string()
            .min(2, 'Too Short!')
            .max(50, 'Too Long!')
            .required('Required'),
        fonction: Yup.string()
            .required('Required'),
        gender: Yup.string()
            .required('Required'),
        mot_pass: Yup.string()
            .required('Required'),
        repeatPass: Yup.string().when('mot_pass', {
            is: (val) => (!!(val && val.length > 0)),
            then: Yup.string().oneOf(
                [Yup.ref('mot_pass')],
                'Passwords do not match'
            ).required('Required'),
        }),
    });

    const [gender, setGender] = useState("Homme");
   




    const onSubmit = async (values, actions) => {
        try {
            const user = {
                ...values,
                photo_profil: gender === 'Homme' ?
                    "http://localhost:4000/public/images/default/male.png" :
                    "http://localhost:4000/public/images/default/female.png"
            }
            props.addUser(user);
            actions.setStatus({ success: true });
            actions.setSubmitting(true);
            console.log(user);
            actions.resetForm({})
        } catch (error) {
            console.error(error);
            actions.setStatus({ success: false })
            actions.setSubmitting(false)
            actions.setErrors({ submit: error.message })
        }
    }


    return (
        <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-lg" role="document" style={{ width: "1000px" }}>
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Add new user</h5>
                        <button className="close" type="button" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button>
                    </div>
                    <div className="modal-body">
                        <div className="container mt-2">
                            <div className="row">
                                <div className="col-xl-4">
                                    <div className="card">
                                        <div className="card-header">Profile Picture</div>
                                        <div className="card-body text-center">
                                            {
                                                gender === 'Homme' ?
                                                    <img className="img-account-profile rounded-circle mb-2" src="http://localhost:4000/public/images/default/male.png" alt="male " /> :
                                                    <img className="img-account-profile rounded-circle mb-2" src="http://localhost:4000/public/images/default/female.png" alt="female " />
                                            }
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-8">
                                    <div className="card mb-1">
                                        <div className="card-header">Account Details</div>
                                        <div className="card-body">
                                            <Formik
                                                initialValues={{
                                                    email: "",
                                                    nom: "",
                                                    prenom: "",
                                                    fonction: "",
                                                    gender: "",
                                                    telephone: "",
                                                    mot_pass: "",
                                                    repeatPass: ""
                                                }}
                                                validationSchema={schema}
                                                onSubmit={onSubmit}
                                            >
                                                {({
                                                    values,
                                                    errors,
                                                    touched,
                                                    handleChange,
                                                    handleSubmit,
                                                }) =>
                                                    (
                                                        <form onSubmit={handleSubmit}>
                                                            {/* nom et prenom */}
                                                            <div className="form-row">

                                                                <div className="form-group col-md-6">
                                                                    <label className="small mb-1" htmlFor="inputFirstName">First name</label>
                                                                    <input className="form-control" id="inputFirstName" type="text" name="nom"
                                                                        placeholder="Enter your first name" value={values.nom} onChange={handleChange} />

                                                                    {
                                                                        errors.nom && touched.nom ?
                                                                            (<div className=" alert alert-danger m-2 py-2">{errors.nom}</div>) :
                                                                            null
                                                                    }
                                                                </div>

                                                                <div className="form-group col-md-6">
                                                                    <label className="small mb-1" htmlFor="inputLastName">Last name</label>
                                                                    <input className="form-control" id="inputLastName" type="text" name="prenom"
                                                                        placeholder="Enter your last name" value={values.prenom} onChange={handleChange} />
                                                                    {errors.prenom && touched.prenom ? (
                                                                        <div
                                                                            className=" alert alert-danger m-2 py-2">{errors.prenom}</div>
                                                                    ) : null}
                                                                </div>

                                                            </div>
                                                            {/* fontion */}
                                                            <div className="form-group ">
                                                                <label className="small mb-1" htmlFor="inputOrgName">Fonction</label>
                                                                <input className="form-control" id="inputOrgName" type="text"
                                                                    placeholder="Enter your Fonction" name="fonction"
                                                                    value={values.fonction} onChange={handleChange}
                                                                />
                                                                {errors.fonction && touched.fonction ? (
                                                                    <div
                                                                        className=" alert alert-danger m-2 py-2">{errors.fonction}</div>
                                                                ) : null}
                                                            </div>
                                                            {/* password and repeat password */}
                                                            <div className="form-row">
                                                                <div className="form-group col-md-6">
                                                                    <label htmlFor="inputPassword">Password</label>
                                                                    <input type="password" name="mot_pass" id="inputPassword"
                                                                        className="form-control" placeholder="password for user" aria-describedby="helpId"
                                                                        value={values.mot_pass} onChange={handleChange}
                                                                    />
                                                                    {errors.mot_pass && touched.mot_pass ? (
                                                                        <div
                                                                            className=" alert alert-danger m-2 py-2">{errors.mot_pass}</div>
                                                                    ) : null}
                                                                </div>
                                                                <div className="form-group col-md-6">
                                                                    <label htmlFor="repeatPassword">Repeat password</label>
                                                                    <input type="password" name="repeatPass" id="repeatPassword"
                                                                        className="form-control" placeholder="repeat password" aria-describedby="helpId"
                                                                        value={values.repeatPass} onChange={handleChange}
                                                                    />
                                                                    {errors.repeatPass && touched.repeatPass ? (
                                                                        <div
                                                                            className=" alert alert-danger m-2 py-2">{errors.repeatPass}</div>
                                                                    ) : null}
                                                                </div>
                                                            </div>
                                                            {/* EMAIL */}
                                                            <div className="form-group"> <label className="small mb-1" htmlFor="inputEmailAddress">Email address</label>
                                                                <input className="form-control" id="inputEmailAddress" type="email" name="email"
                                                                    placeholder="Enter your email address" onChange={handleChange}
                                                                    value={values.email} />
                                                                {errors.email && touched.email ? (
                                                                    <div
                                                                        className=" alert alert-danger m-2 py-2">{errors.email}</div>
                                                                ) : null}
                                                            </div>
                                                            {/* telephone */}
                                                            <div className="form-group ">
                                                                <label className="small mb-1" htmlFor="inputPhone">Phone number</label>
                                                                <input className="form-control" id="inputPhone" type="tel" name="telephone"
                                                                    placeholder="Enter your phone number" onChange={handleChange}
                                                                    value={values.telephone} />
                                                                {errors.telephone && touched.telephone ? (
                                                                    <div
                                                                        className=" alert alert-danger m-2 py-2">{errors.telephone}</div>
                                                                ) : null}
                                                            </div>
                                                            {/* Gender */}
                                                            <div className="form-group  ">
                                                                <label className="d-block small mb-1" htmlFor="inputLastGender">Gender</label>

                                                                <div className="custom-control custom-radio custom-control-inline">
                                                                    <input className="custom-control-input" id="customRadio1" type="radio" name="gender"
                                                                        value="Homme" onChange={handleChange}
                                                                        checked={values.gender === "Homme"}
                                                                        onClick={() => setGender('Homme')}
                                                                    />
                                                                    <label className="custom-control-label" htmlFor="customRadio1">
                                                                        <i className="fas fa-male"></i>  Male
                                                                        </label>
                                                                </div>
                                                                <div className="custom-control custom-radio custom-control-inline">
                                                                    <input className="custom-control-input" id="customRadio" type="radio" name="gender"
                                                                        checked={values.gender === "Femme"}
                                                                        value="Femme" onChange={handleChange}
                                                                        onClick={() => setGender('Femme')}
                                                                    />
                                                                    <label className="custom-control-label" htmlFor="customRadio">

                                                                        <i className="fa fa-female" aria-hidden="true"></i> Female
                                                                    </label>
                                                                </div>
                                                                {errors.gender && touched.gender ? (
                                                                    <div
                                                                        className=" alert alert-danger m-2 py-2">{errors.gender}</div>
                                                                ) : null}
                                                            </div>
                                                            {/* submit form */}
                                                            <button className="btn btn-primary" type="button" onClick={handleSubmit}>
                                                                Save changes
                                                                    </button>
                                                        </form>
                                                    )
                                                }
                                            </Formik>
                                        </div>
                                        <div className="card-footer text-muted">
                                            {props.msg ? <div className="alert alert-success" role="alert">{props.msg} </div> : null}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="modal-footer"><button className="btn btn-secondary" type="button" data-dismiss="modal">Close</button></div>
                </div>
            </div>
        </div>
    );
}

export default ModalAddUser;