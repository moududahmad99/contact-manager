import React, { Component } from 'react'

export default class AddContact extends Component {

    state = {
        name: '',
        email: ''
    }


    add = (e) => {
        e.preventDefault();
        if (this.state.name === '' || this.state.email === '') {
            alert('Empty Input')
            return
        }

        this.props.addContactHandler(this.state)
        this.setState(
            {
                name: '',
                email: ''
            }
        )
        console.log(this.state);

    }

    render() {
        return (
            <div className='ui main margin'>
                <h2>Add Contact</h2>
                <form className='ui form' onSubmit={this.add}>
                    <div className='field'>
                        <label>Name</label>
                        <input
                            type="text"
                            name='name'
                            placeholder='Name:'
                            value={this.state.name}
                            onChange={(e) => this.setState({ name: e.target.value })}
                        />
                    </div>
                    <div className='field'>
                        <label>Email</label>
                        <input
                            type="email"
                            name='email'
                            placeholder='Email:'
                            value={this.state.email}
                            onChange={(e) => this.setState({ email: e.target.value })}
                        />
                    </div>
                    <button className='ui button gray'>Add Contact</button>
                </form>
            </div>
        )
    }
}