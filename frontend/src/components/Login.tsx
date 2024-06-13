import { useNavigate } from "react-router-dom";

const Login = () => {
    const navigate = useNavigate();

    const navigateToSignUp = () => {
        navigate('/signup');
    };

    return(
      <div className={'mainContainer'}>

          <div className={"titleContainer"}>
              <div>
                <h2>Login</h2>
              </div>
          </div>

          <div className={"create-option"}>
              <p>------or create an account------</p>
          </div>
          <div className={'input-container'}>
                  <button
                      type={"button"}
                      value={"Create an account"}
                      onClick={navigateToSignUp}
                      className={'inputButton'}
                  >Create Account</button>
          </div>

      </div>
    );
}

export default Login;