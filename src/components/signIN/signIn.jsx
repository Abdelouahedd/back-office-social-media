import React from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import * as Yup from 'yup';
import { Formik } from 'formik';
import { authSuccess, authFail } from '../../redux/actions/authentificationActions';
import { API_URL } from '../../_helper/helper';
import { useToasts } from 'react-toast-notifications';

const signInSchema = Yup.object().shape({
    email: Yup.string()
        .email('Invalid email')
        .required('Required'),
    password: Yup.string()
        .required('Required'),
});


function SignIn(props) {

    const dispatch = useDispatch();
    const history = useHistory();
    const { addToast } = useToasts()

    const auth = async (user) => {
        await fetch(`${API_URL}/users/admin/signIn`, {
            method: 'POST',
            body: JSON.stringify(user),
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(res => res.json())
            .then((res) => {
                if (res.success === true) {
                    dispatch(authSuccess(res.token, res.msg));
                    localStorage.setItem('jwtInfo', res.token);
                    addToast(res.msg, { appearance: 'success' })
                    setTimeout(() => {
                        history.push('/');
                    }, 100);
                } else {
                    dispatch(authFail(res.msg));
                    addToast(res.msg, { appearance: 'error' })
                }
            })
            .catch((err) => {
                dispatch(authFail(err));
                addToast(err.message, { appearance: 'error' })
                console.error(err);
            })
    }


    const onSubmit = async (values, actions) => {
        try {
            const user = {
                email: values.email,
                mot_pass: values.password
            }
            await auth(user);
            actions.setStatus({ success: true })
        } catch (error) {
            console.error(error);
            actions.setStatus({ success: false })
            actions.setSubmitting(false)
            actions.setErrors({ submit: error.message })
        }
    }

    return (
        <div className="bg-dark">
            <div id="layoutAuthentication">
                <div id="layoutAuthentication_content">
                    <main>
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-lg-5">
                                    <div className="card shadow-lg border-0 rounded-lg mt-5">
                                        <div className="card-header justify-content-center"><h3 className="font-weight-light my-4">Login</h3></div>
                                        <div className="card-body">
                                            <Formik
                                                initialValues={{
                                                    email: "",
                                                    password: ""
                                                }}
                                                validationSchema={signInSchema}
                                                onSubmit={onSubmit}
                                            >
                                                {
                                                    ({ values,
                                                        errors,
                                                        touched,
                                                        handleChange,
                                                        handleSubmit, }) => (
                                                            <form onSubmit={handleSubmit}>
                                                                <div className="form-group">
                                                                    <label className="small mb-1" htmlFor="inputEmailAddress">Email</label>
                                                                    <input className="form-control py-4" id="inputEmailAddress" type="email"
                                                                        placeholder="Enter email address" name="email" value={values.email}
                                                                        onChange={handleChange}
                                                                        style={{ borderColor: (errors.email && touched.email) ? "red" : " #e5e5e5" }}
                                                                    />
                                                                </div>

                                                                <div className="form-group">
                                                                    <label className="small mb-1" htmlFor="inputPassword">Password</label>
                                                                    <input className="form-control py-4" id="inputPassword" type="password"
                                                                        placeholder="Enter password"
                                                                        name="password"
                                                                        onChange={handleChange}
                                                                        style={{ borderColor: (errors.password && touched.password) ? "red" : " #e5e5e5" }}
                                                                    />
                                                                </div>
                                                                <div className="form-group">
                                                                    <div className="custom-control custom-checkbox">
                                                                        <input className="custom-control-input" id="rememberPasswordCheck" type="checkbox" />
                                                                        <label className="custom-control-label" htmlFor="rememberPasswordCheck">Remember password</label>
                                                                    </div>
                                                                </div>
                                                                <div className="form-group d-flex align-items-center justify-content-center mt-4 mb-0">
                                                                    <button className="col-6 btn btn-primary rounded-pill btn-lg btn-block" type="submit">Login</button>
                                                                </div>
                                                            </form>
                                                        )
                                                }
                                            </Formik>
                                        </div>
                                        <div className="card-footer text-center">
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </main>
                </div>
                <div id="layoutAuthentication_footer">
                    <footer className="footer mt-auto footer-dark">
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-md-6 small">Copyright &#xA9; Your Website 2020</div>
                                <div className="col-md-6 text-md-right small">
                                    <a href="#!">Privacy Policy</a>
                            &#xB7;
                            <a href="#!">Terms &amp; Conditions</a>
                                </div>
                            </div>
                        </div>
                    </footer>
                </div>
            </div>
        </div>
    );
}

export default SignIn;