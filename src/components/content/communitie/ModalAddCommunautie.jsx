import React from 'react'

import { Formik } from 'formik'
import * as Yup from "yup";

export default function ModalAddCommunautie(props) {

    const schema = Yup.object({
        titre: Yup.string().required('Required'),
        visibilite: Yup.string()
            .oneOf(['PUBLIC', 'PRIVATE', 'SECRET'])
            .required('Required'),
        admin: Yup.string().required('Required'),
    });

    const onSubmit = async (values, action) => {
        console.log(values);
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
                                            <img className="img-account-profile rounded-circle mb-2" src="http://localhost:4000/public/images/default/male.png" alt="male " />
                                            <img className="img-account-profile rounded-circle mb-2" src="http://localhost:4000/public/images/default/female.png" alt="female " />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-8">
                                    <div className="card mb-1">
                                        <div className="card-header">Account Details</div>
                                        <div className="card-body">
                                            <Formik
                                                initialValues={{
                                                    titre: "",
                                                    visibilite: "",
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
                                                                    <label className="small mb-1" htmlFor="inputTitre">Title</label>
                                                                    <input className="form-control" id="inputTitre" type="text" name="titre"
                                                                        value={values.titre} onChange={handleChange} placeholder="name of communitie" />

                                                                    {
                                                                        errors.titre && touched.titre ?
                                                                            (<div className=" alert alert-danger m-2 py-2">{errors.titre}</div>) :
                                                                            null
                                                                    }
                                                                </div>
                                                                <div className="form-group col-md-6">
                                                                    <label className="small mb-1" htmlFor="inputVisibilite">Visibilite</label>
                                                                    <select className="form-control" id="exampleFormControlSelect1"
                                                                        name="visibilite" value={values.visibilite} onChange={handleChange}>
                                                                        <option>PUBLIC</option>
                                                                        <option>PRIVATE</option>
                                                                        <option>SECRET</option>
                                                                    </select>
                                                                    {errors.visibilite && touched.visibilite ? (
                                                                        <div
                                                                            className=" alert alert-danger m-2 py-2">{errors.visibilite}</div>
                                                                    ) : null}
                                                                </div>
                                                            </div>
                                                            <div className="form-row">
                                                                <div className="form-group col-md-12">
                                                                    <label className="small mb-1" htmlFor="inputTitre">Select a admin</label>
                                                                    <select className="form-control" name="admin" value={values.admin} onChange={handleChange}>
                                                                        {
                                                                            props.users.map(us => <option key={us._id} value={us._id}>{us.nom}</option>)
                                                                        }
                                                                    </select>
                                                                    {
                                                                        errors.admin && touched.admin ?
                                                                            (<div className=" alert alert-danger m-2 py-2">{errors.admin}</div>) :
                                                                            null
                                                                    }
                                                                </div>
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
    )
}
