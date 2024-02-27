import './App.css'
import {Navbar} from "./components/navbar/Navbar.jsx";
import {Footer} from "./components/footer/Footer.jsx";
import {NewUserForm} from "./components/newuser/NewUserForm.jsx";
import {UserList} from "./components/userlist/UserList.jsx";
import {useState} from "react";

function App() {
    const [showModal, setShowModal] = useState(false)
    const [users, setUsers] = useState([])

    const addUser = (user) => {
        setUsers((prev) => {
            return [...prev, user]
        })
        setShowModal(false)
    }

    const deleteUser = (id) => {
        setUsers((prev) => {
            return prev.filter((user) => {
                return user.id !== id
            })
        })
    }

    const closeModal = (e) => {
        if (e.target.classList.value === 'overlay') setShowModal(false)
        if (e.key === "Escape") setShowModal(false)
    }
  return (
      <div onClick={closeModal} onKeyDown={closeModal} className="App">
          <Navbar usersLength={users.length}/>
          <main>
              {!users.length && <div className='no-users'>
                  <h2>No users</h2>
              </div>}
              <UserList users={users} deleteUser={deleteUser}/>
          </main>
          {showModal && <NewUserForm addUser={addUser}/>}
          <Footer/>
          <button onClick={() => setShowModal(true)} className='create-user'>Create User</button>
      </div>
  )
}

export default App
