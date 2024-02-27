import './Navbar.css'

export function Navbar({usersLength}) {
    return (
        <div className='navbar'>
            <div className='navbar-container container'>
                <h1 className='navbar-logo'>CreateUser</h1>
                <h3 className='navbar-counter'>{usersLength > 0 ? usersLength : 'No users :('}</h3>
            </div>
        </div>
    )
}