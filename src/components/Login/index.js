import './index.css'

const Login = props => {
  const {isLoginButton} = props
  return (
    <button type="button" className="login-button" onClick={isLoginButton}>
      Login
    </button>
  )
}

export default Login
