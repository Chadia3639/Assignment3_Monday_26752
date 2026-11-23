import { useState } from 'react';

function Authentication() {

    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [studentId, setStudentId] = useState("");
    const [email, setEmail] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [doYouHaveAccount, setDoYouHaveAccount] = useState(true);

    const resetFields = () => {
        setUserName("");
        setPassword("");
        setStudentId("");
        setEmail("");
        setConfirmPassword("");
    };

    const showSignIn = () => {
        resetFields();
        setDoYouHaveAccount(true);
    };

    const showCreateAccount = () => {
        resetFields();
        setDoYouHaveAccount(false);
    };

    const checkLogin = () => {
        if (userName.trim() === "" || password === "") {
            alert("Please enter your user name and password");
            return;
        }
        alert("Welcome, " + userName + "!");
    };

    const createAccount = () => {
        if (studentId.trim() === "" || email.trim() === "" || password === "" || confirmPassword === "") {
            alert("Please fill in all the fields");
            return;
        }
        if (!email.includes("@")) {
            alert("Please enter a valid email");
            return;
        }
        if (password !== confirmPassword) {
            alert("Passwords do not match");
            return;
        }
        alert("Account created successfully! Please sign in.");
        showSignIn();
    };

    return (
        <>
            {doYouHaveAccount ? (
                <div style={{ border: "3px solid blue", marginTop: "200px" }}>
                    <h1>Sign In</h1>
                    <h3>Access your academic portal</h3>
                    <input
                        type="text"
                        value={userName}
                        onChange={e => setUserName(e.target.value)}
                        placeholder="Please enter your user name"
                        aria-label="UserName"
                    /><br />
                    <input
                        type="password"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        aria-label="Password"
                    /><br />
                    <div>
                        <button type="button" onClick={checkLogin}>LOGIN</button> <br />
                        <button type="button" onClick={showCreateAccount}>Create an Account</button>
                    </div>
                </div>
            ) : (
                <div>
                    <div style={{ border: "3px solid indigo", marginTop: "200px" }}>
                        <h1>Create an Account</h1>
                        <h3>Access your academic portal</h3>
                        <input
                            type="text"
                            value={studentId}
                            onChange={e => setStudentId(e.target.value)}
                            placeholder="Please enter your student ID"
                            aria-label="Student ID"
                        /><br />
                        <input
                            type="email"
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                            aria-label="Email"
                        /><br />
                        <input
                            type="password"
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                            aria-label="Password"
                        /><br />
                        <input
                            type="password"
                            value={confirmPassword}
                            onChange={e => setConfirmPassword(e.target.value)}
                            aria-label="Confirm Password"
                        /><br />
                        <div>
                            <button type="button" onClick={createAccount}>CREATE AN ACCOUNT</button> <br />
                            <button type="button" onClick={showSignIn}>Sign In</button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

export default Authentication;
