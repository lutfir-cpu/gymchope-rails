import { useState} from "react";

const Signup = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    return (
        <div className={'mainContainer'}>
        <div className={"titleContainer"}>
            <div>Create Your Account</div>
        </div>

        <form>
            {/*Username*/}
            <div className={"input-container"}>
                <input
                    type={"email"}
                    value={email}
                    placeholder={"Enter your email"}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className={"input-box"}
                />
            </div>

            {/*Password*/}
            <div className={'input-container'}>
                <input
                    type={"password"}
                    value={password}
                    placeholder={"Enter your password"}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    className={"input-box"}
                />
            </div>

            {/*Confirm Password*/}
            <div className={'input-container'}>
                <input
                    type={"password"}
                    value={confirmPassword}
                    placeholder={"Confirm your password"}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                    className={"input-box"}
                />
            </div>

            {/*Signup button*/}
            <div className={'input-container'}>
                <button
                    type={"submit"}
                    value={"Create Account"}
                    className={'inputButton'}
                >Sign up
                </button>
            </div>

            <div className={"create-option"}>
                <p>-----or create an admin account-----</p>
            </div>

            {/*Signup button for admins*/}
            <div className={'input-container'}>
                <button
                    type={"submit"}
                    value={"Create Account"}
                    className={'inputButton'}
                >Create Admin Account
                </button>
            </div>
        </form>
    </div>
    );
}


export default Signup;