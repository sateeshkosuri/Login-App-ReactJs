import './index.css'

const Logout = props => {
  const {isLogoutButton} = props
  return (
    <button type="button" className="logout-button" onClick={isLogoutButton}>
      Logout
    </button>
  )
}
export default Logout
