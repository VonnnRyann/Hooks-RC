import React from 'react'
import useFetch from '../hooks/useFetch'

const Users = () => {
    const URL = 'https://fakerapi.it/api/v1/users';

    const {result,loading,error} = useFetch(URL)

        if (loading) {
            return <p>Loading...</p>
        }
        if (error) {
            return <p>{error}</p>
        }
    
        const userList = result.data.map((user) => (
            <aside key={user.id}>
              <aside className='first'>
                <label>First Name</label>
                <p>{user.firstname}</p>
              </aside>
              <aside className='second'>
                <label>Last Name</label>
                <p>{user.lastname}</p>
              </aside>
            </aside>
          ));

  return (
    <section className='content'>Users {userList}</section>
  )
}
export default Users