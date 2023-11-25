import userImg from '../../assets/defaultUser.png'
import './Header.css'


const Header = () => {
    return(
        <div className="headerContainer">
        <h1 className='headerTitle'>House 762</h1>
        <img src={userImg} alt="defaultUser" className='userImg' />
    </div>
    )

}

export default Header;