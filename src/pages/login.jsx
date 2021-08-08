import React from 'react'
import {
    Form,
    Button,
    FormControl,
    InputGroup
} from 'react-bootstrap'
import { connect } from 'react-redux'
import { login } from '../redux/actions'
import { Redirect } from 'react-router-dom'

class LoginPage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            emailErr: [false, ""],
            passErr: [false, ""],
            registerErr: [false, ""],
            error: false
        }
    }

    emailValid = (e) => {
        let regex = /^(([^<>()\]\\.,;:\s@"]+(\.[^<>()\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        if (!regex.test(e.target.value || e.target.value.length < 6)) return this.setState({ emailErr: [true, "Email not valid"] })

        this.setState({ emailErr: [false, ""] })
    }

    passValid = (e) => {
        let number = /[0-9]/
        let symb = /[!@#$%^&*]/

        if (!symb.test(e.target.value) || !number.test(e.target.value) || e.target.value.length < 6) return this.setState({ passErr: [true, "Password must have 6 character, include number and symbol"] })

        this.setState({ passErr: [false, ""] })
    }

    onLogin = () => {
        let email = this.refs.email.value
        let password = this.refs.password.value


        if (!email || !password) return this.setState({ registerErr: [true, "Please input all of data"] })

        if (this.state.emailErr[0] || this.state.passErr[0]) return this.setState({ registerErr: [true, "Make sure all of your data is valid"] })



        // siapkan object data user
        let obj = {
            email,
            password,
            transactions: []
        }

        // action untuk register
        this.props.login(obj)
    }

    render() {
        if (this.props.email) {
            return <Redirect to='/' />
        }

        return (
            <div style={styles.cont}>
                <div style={styles.contForm}>
                    <label>Email</label>
                    <InputGroup>
                        <InputGroup.Text id="basic-addon1" >
                            <i className="fas fa-envelope"></i>
                        </InputGroup.Text>
                        <FormControl
                            placeholder="Input Here"
                            onChange={(e) => this.emailValid(e)}
                            ref="email"
                        />
                    </InputGroup>
                    <Form.Text style={styles.textErr}>
                        {this.state.emailErr[0] ? this.state.emailErr[1] : ""}
                    </Form.Text>
                    <label>Password</label>
                    <InputGroup>
                        <InputGroup.Text id="basic-addon1" >
                            <i className="fas fa-eye-slash"></i>
                        </InputGroup.Text>
                        <FormControl
                            placeholder="Input Here"
                            type="password"
                            onChange={(e) => this.passValid(e)}
                            ref="password"
                        />
                    </InputGroup>
                    <Button variant="primary" style={styles.button} onClick={this.onLogin}>
                        <i className="fas fa-user-plus" style={{ marginRight: '10px' }}></i>
                        Login
                    </Button>
                </div>
            </div>
        )
    }
}

const styles = {
    cont: {
        background: "url(https://images.unsplash.com/photo-1462927114214-6956d2fddd4e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=749&q=80) no-repeat center",
        backgroundSize: "cover",
        height: "100vh",
        paddingTop: '12vh',
    },
    contForm: {
        width: '30vw',
        marginLeft: 'auto',
        marginRight: 'auto',
        borderRadius: '10px',
        backgroundColor: 'rgba(255, 255, 255, .7)',
        padding: '1% 2%'
    },
}

const mapStateToProps = (state)=>{
    return {
        email: state.userReducer.email
    }
}

export default connect(mapStateToProps, { login })(LoginPage)