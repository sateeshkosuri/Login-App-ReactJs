import {Component} from 'react'
import Message from '../Message'
import Logout from '../Logout'
import Login from '../Login'
import './index.css'

class Home extends Component {
  state = {
    isLoggedIn: false,
  }

  onClickButton = () => {
    const {isLoggedIn} = this.state
    this.setState({isLoggedIn: !isLoggedIn})
  }

  render() {
    const {isLoggedIn} = this.state
    return (
      <div className="app-container">
        <div className="home-container">
          <Message logMessage={isLoggedIn} />
          {isLoggedIn ? (
            <Logout isLogoutButton={this.onClickButton} />
          ) : (
            <Login isLoginButton={this.onClickButton} />
          )}
        </div>
      </div>
    )
  }
}
export default Home
