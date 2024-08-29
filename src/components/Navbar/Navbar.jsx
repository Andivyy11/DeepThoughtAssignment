import './Navbar.css'

export default function Navbar(){
    return <div className='nav'>
        <div className='navContainer'>
            <a href='/'><img src='https://sdlms.deepthought.education/assets/uploads/files/system/site-logo.svg' alt='logo'/></a>
            <div className='menu'>
                <a href='/' className='fas fa-home nav-icons bg-blue'></a>
                <a href='/' className='fas fa-binoculars nav-icons bg-blue'></a>
                <a href='/' className='fas fa-tools nav-icons bg-blue'></a>
                <a href='/' className='fas fa-bell nav-icons bg-blue'></a>
                <a href='/' className='avatar'><img src='/profile.jpg' alt='profile'/></a>
                <a href='/' className='fas fa-ellipsis-v nav-icons fnt-blue'></a>
            </div>
        </div>
    </div>
}
