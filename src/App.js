import React from 'react';
import Header from './components/Header';
import Users from './components/Users';
import AddUser from './components/AddUser';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
        users: [
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
    }
    this.addUser = this.addUser.bind(this)
}
  render() {
    return (<div>
      <Header title="User List"/>
      <main>
        <Users users={this.state.users}/>
      </main>
      <aside>
        <AddUser onAdd={this.addUser} />
      </aside>
  </div>)
  }

  addUser(user) {
      const id = this.state.users.length + 1
      this.setState({ users: [...this.state.users, {id, ...user}]})
  }
}

export default App
