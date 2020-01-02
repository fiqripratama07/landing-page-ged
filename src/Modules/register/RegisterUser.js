import * as React from "react";
import {Link, Redirect} from "react-router-dom";
import {connect} from 'react-redux';
import * as UserServices from './service/LandingPageRegisterService';
import * as AlertConstant from '../../Constant/AlertConstant';

class Register extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            redirect: false
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
        const {addUser} = this.props;
        console.log("ADMIN", this.props);
        UserServices.save(addUser)
            .then(resp => {
                this.setState({redirect: true});
                AlertConstant.status_success_200("Save User Success");
            })
            .catch(err => AlertConstant.status_internal_server_error_500("Save User Failed!"))
    }

    handleChangeUsername = (event) => {
        const value = event.target.value;
        this.props.dispatch({type: 'SAVE_USER', addUser: {...this.props.addUser, userName: value}})
    };

    handleChangePassword = (event) => {
        const value = event.target.value;
        this.props.dispatch({type: 'SAVE_USER', addUser: {...this.props.addUser, password: value}})
    };

    handleChangeEmail = (event) => {
        const value = event.target.value;
        this.props.dispatch({type: 'SAVE_USER', addUser: {...this.props.addUser, email: value}})
    };

    render() {
        if (this.state.redirect === true) {
            return <Redirect to='/user'/>
        }
        return (
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-xl-10 col-lg-12 col-md-9">
                        <div className="card o-hidden border-0 shadow-lg my-5">
                            <div className="card-body p-0 marginTop">
                                <div className="row">
                                    <div className="col-lg-5 d-none d-lg-block bg-register-image">
                                    </div>
                                    <div className="col-lg-7">
                                        <div className="p-5">
                                            <div className="text-center">
                                                <h1 className="h4 text-gray-900 mb-4">Create an Account!</h1>
                                            </div>
                                            <form className="user">
                                                <div className="form-group">
                                                    <input type="text" className="form-control form-control-user"
                                                           id="exampleFirstName" placeholder="Username"
                                                           onChange={this.handleChangeUsername} required/>
                                                </div>
                                                <div className="form-group">
                                                    <input type="email" className="form-control form-control-user"
                                                           id="exampleInputEmail" placeholder="Email Address"
                                                           onChange={this.handleChangeEmail} required/>
                                                </div>
                                                <div className="form-group">
                                                    <input type="password"
                                                           className="form-control form-control-user"
                                                           id="exampleInputPassword" placeholder="Password"
                                                           onChange={this.handleChangePassword} required/>
                                                </div>
                                                <button onClick={this.handleSubmit}
                                                        className="btn btn-primary btn-user btn-block">Register
                                                    Account
                                                </button>
                                            </form>
                                            <hr/>
                                            <div className="text-center">
                                                <a href="/" className="small">Already have an account?
                                                    Login!</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {...state.register}
}

export default connect(mapStateToProps)(Register);
