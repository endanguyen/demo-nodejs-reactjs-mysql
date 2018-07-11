import React, {Component} from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import UserRepository from '../repositories/UserRepository'

class Home extends Component {
  constructor() {
    super()
    this.setRepository()
    this.state = {
      users: []
    }
  }
  componentDidMount() {
    this.fetchData()
  }

  setRepository() {
    this.repository = new UserRepository()
  }

  async fetchData () {
    const users = await this.repository.index(0, 0, 'id', '', '', {})
    this.setState({
      ...this.state,
      users: users
    })
  }

  render() {
    return (
      <div>
        <Header/>
          <table>
            <thead>
              <tr>
                <td> Id </td>
                <td> Username </td>
                <td> Email </td>
              </tr>
            </thead>
            <tbody>
            {Array.isArray(this.state.users) && this.state.users.length > 0 && this.state.users.map(user => {
              return (
                <tr key={'user_' + user.id}>
                  <td>{user.id}</td>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                </tr>
              )
            })}
            </tbody>
          </table>
        <Footer/>
      </div>
    )
  }
}

export default Home;
