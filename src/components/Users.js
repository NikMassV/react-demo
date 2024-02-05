import React from 'react'

class Users extends React.Component {
    users = [
        {
            id: 1,
            firstName: 'Bob',
            lastName: 'Marley',
            bio: 'ipsum',
            age: 40,
            isHappy: true
        },
        {
            id: 2,
            firstName: 'John',
            lastName: 'Doe',
            bio: 'ipsume',
            age: 22,
            isHappy: false
        }
    ]
    
    render() {
        if(this.users.length > 0)
            return (
                <div>
                    {this.users.map((el) => (<div className="user" key={el.id}>
                        <h3>{el.firstName} {el.lastName}</h3>
                        <p>{el.bio}</p>
                        <b>{el.isHappy ? 'Happy' : 'Unhappy'}</b>
                    </div>))}
                </div>)
        else 
            return (
                <div className="user">
                    <h3>Have no users</h3>
                </div>)
    }
}

export default Users
