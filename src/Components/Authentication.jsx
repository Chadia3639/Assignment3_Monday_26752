import React from 'react'
import React from 'react'

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
        // TODO: replace with your real account creation (API call / database)
        alert("Account created successfully! Please sign in.");
        showSignIn();
    };

    return (
        <>
            {doYouHaveAccount ? (
                <div style={{ border: "3px solid blue", marginTop: "200px" }}>
                    <h1>Sign In</h1>
                    <h3>Access your academic portal</h3>
                    <label>UserName:</label>
                    <input
                        type="text"
                        value={userName}
                        onChange={e => setUserName(e.target.value)}
                        placeholder="Please enter your user name"
                    /><br />
                    <label>Password:</label>
                    <input
                        type="password"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                    /><br />
                    <div>
                        <button type="button" onClick={checkLogin}>LOGIN</button> <br />
                        <label>New here?</label>
                        <button type="button" onClick={showCreateAccount}>Create an Account</button>
                    </div>
                </div>
            ) : (
                <div>
                    <div style={{ border: "3px solid indigo", marginTop: "200px" }}>
                        <h1>Create an Account</h1>
                        <h3>Access your academic portal</h3>
                        <label>Student ID:</label>
                        <input
                            type="text"
                            value={studentId}
                            onChange={e => setStudentId(e.target.value)}
                            placeholder="Please enter your student ID"
                        /><br />
                        <label>email:</label>
                        <input
                            type="email"
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                        /><br />
                        <label>password:</label>
                        <input
                            type="password"
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                        /><br />
                        <label>confirm:</label>
                        <input
                            type="password"
                            value={confirmPassword}
                            onChange={e => setConfirmPassword(e.target.value)}
                        /><br />
                        <div>
                            <button type="button" onClick={createAccount}>CREATE AN ACCOUNT</button> <br />
                            <label>Already have an account?</label>
                            <button type="button" onClick={showSignIn}>sign In</button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

export default Authentication