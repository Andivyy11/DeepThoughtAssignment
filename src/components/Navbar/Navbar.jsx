import './Navbar.css'

export default function Navbar(){
    return <div className='nav'>
        <div className='navContainer'>
            <a href='/'><img src='https://sdlms.deepthought.education/assets/uploads/files/system/site-logo.svg' alt='logo'/></a>
            <div className='menu'>
                <a href='/'><i className='fas fa-home nav-icons bg-blue'></i></a>
                <a href='/'><i className='fas fa-binoculars nav-icons bg-blue'></i></a>
                <a href='/'><i className='fas fa-tools nav-icons bg-blue'></i></a>
                <a href='/'><i className='fas fa-bell nav-icons bg-blue'></i></a>
                <a href='/' className='avatar'><img src='/profile.jpg' alt='profile'/></a>
                <a href='/'><i className='fas fa-ellipsis-v nav-icons fnt-blue'></i></a>
            </div>
        </div>
    </div>
}
