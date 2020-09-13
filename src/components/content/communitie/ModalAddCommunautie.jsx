import React, { useState } from 'react'
import { Formik } from 'formik'
import * as Yup from "yup"


var schema = Yup.object({
    titre: Yup.string().required('Required'),
    visibilite: Yup.string()
        .oneOf(['PUBLIC', 'PRIVATE', 'SECRET'])
        .required('Required'),
    admin: Yup.string().required('Required'),
});


export default function ModalAddCommunautie(props) {


    const [selectedImg, setImgUrl] = useState("");
    const [error, setError] = useState("");



    const handleChange = e => {
        setError("");
        if (e.target.files[0]) {
            const file = e.target.files[0];
            const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png' || file.type === 'image/svg+xml';
            const isLt2M = file.size / 1024 / 1024 < 2;

            if (!isJpgOrPng) {
                setError('File is not type jpge,png or svg');
                return;
            }
            if (!isLt2M) {
                setError('File must be less than 2 M');
                return;
            }
            setImgUrl(file);
        }

    };

    const onSubmit = async (values, actions) => {
        try {
            if (selectedImg === "") {
                setError('must select a profil image for community')
                return;
            }
            console.log("clicked");

            const data = new FormData();
            data.append('titre', values.titre);
            data.append('visibilite', values.visibilite);
            data.append('admin', values.admin);
            data.append('communautieImg', selectedImg);

            props.addCommunautie(data);

            actions.setStatus({ success: true });
            actions.setSubmitting(true);
        } catch (error) {
            console.error(error);
            actions.setStatus({ success: false })
            actions.setSubmitting(false)
            actions.setErrors({ submit: error.message })
        }

    }

    return (
        <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel"
            aria-hidden="true">
            <div className="modal-dialog modal-lg" role="document" style={{ width: "1000px" }}>
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Add new user</h5>
                        <button className="close" type="button" data-dismiss="modal" aria-label="Close"><span
                            aria-hidden="true">×</span></button>
                    </div>
                    <div className="modal-body">
                        <div className="container mt-2">
                            <div className="row">
                                <div className="col-xl-4">
                                    <div className="card">
                                        <div className="card-header">Profile Picture</div>
                                        <div className="card-body text-center">
                                            <label className="file">
                                                <input type="file" required id="file" aria-label="File browser example" onChange={handleChange} />
                                                <span className="file-custom"></span>
                                            </label>

                                            {error !== "" ?
                                                < div className="alert alert-danger py-1" role="alert">
                                                    <p className="mb-0">{error}</p>
                                                </div> : null}
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
                                                    admin: ""
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
                                                                    <label className="small mb-1"
                                                                        htmlFor="inputTitre">Title</label>
                                                                    <input className="form-control" id="inputTitre"
                                                                        type="text" name="titre"
                                                                        value={values.titre} onChange={handleChange}
                                                                        placeholder="name of communitie" />

                                                                    {
                                                                        errors.titre && touched.titre ?
                                                                            (<div
                                                                                className=" alert alert-danger m-2 py-2">{errors.titre}</div>) :
                                                                            null
                                                                    }
                                                                </div>
                                                                <div className="form-group col-md-6">
                                                                    <label className="small mb-1"
                                                                        htmlFor="inputVisibilite">Visibilite</label>
                                                                    <select className="form-control"
                                                                        id="exampleFormControlSelect1"
                                                                        name="visibilite" value={values.visibilite}
                                                                        onChange={handleChange}>
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
                                                                    <select
                                                                        className="form-control"
                                                                        name="admin"
                                                                        value={values.admin}
                                                                        onChange={handleChange}
                                                                        defaultValue={props.users[0]}
                                                                    >
                                                                        <option></option>
                                                                        {props.users.map((us, i) =>
                                                                            <option key={us._id} value={us._id}>{us.nom}</option>
                                                                            // i === 0 ? <option key={us._id} defaultValue={us._id} selected>{us.nom}</option>
                                                                            //     : <option key={us._id} value={us._id}>{us.nom}</option>
                                                                        )}
                                                                    </select>
                                                                    {
                                                                        errors.admin && touched.admin ?
                                                                            (<div
                                                                                className=" alert alert-danger m-2 py-2">{errors.admin}</div>) :
                                                                            null
                                                                    }
                                                                </div>
                                                            </div>


                                                            {/* submit form */}
                                                            <button className="btn btn-primary" type="button"
                                                                onClick={handleSubmit}>
                                                                Save changes
                                                            </button>
                                                        </form>
                                                    )
                                                }
                                            </Formik>
                                        </div>
                                        <div className="card-footer text-muted">
                                            {props.msg ? <div className="alert alert-success"
                                                role="alert">{props.msg} </div> : null}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="modal-footer">
                        <button className="btn btn-secondary" type="button" data-dismiss="modal">Close</button>
                    </div>
                </div>
            </div>
        </div >
    )
}
