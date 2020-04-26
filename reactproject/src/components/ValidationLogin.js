import React from "react";

const initialState = {
    email: "",
    password: "",
    emailError: "",
    passwordError: ""
};

export default class ValidationLogin extends React.Component {  

    state = initialState;

    handleChange = event => {
        const isCheckbox = event.target.type === "checkbox";
        this.setState({
        [event.target.name]: isCheckbox
            ? event.target.checked
            : event.target.value
        });
    };

    validate = () => {
    let emailError = "";
    let passwordError = "";

    if (!this.state.password) {
        passwordError = "password cannot be blank";
    }

    if (!this.state.email.includes("@")) {
        emailError = "invalid email";
    }

    if (emailError || passwordError ) {
        this.setState({ emailError, passwordError });
        return false;
    }

    return true;
    };

    handleSubmit = event => {
    event.preventDefault();
    const isValid = this.validate();
    if (isValid) {
        console.log(this.state);
        // clear form
        this.setState(initialState);
    }
    };

    render() {

        return (

            <div>
                <h1>Login</h1>
                <form onSubmit={this.handleSubmit}>

                <div>
                    <input
                    name="email"
                    placeholder="Email"
                    value={this.state.email}
                    onChange={this.handleChange}
                    />
                    <div style={{ fontSize: 12, color: "red" }}>
                    {this.state.emailError}
                    </div>
                </div>
            
                <div>
                    <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={this.state.password}
                    onChange={this.handleChange}
                    />
                    <div style={{ fontSize: 12, color: "red" }}>
                    {this.state.passwordError}
                    </div>
                </div>

                <button type="submit">submit</button>
            </form>

        </div>

        );
    }
}
