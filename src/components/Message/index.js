import './index.css'

const Message = props => {
  const {logMessage} = props
  const heading = logMessage ? 'Welcome User' : 'Please Login'
  return <h1 className="main-heading">{heading}</h1>
}
export default Message
