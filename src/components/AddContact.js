import React, { Component } from 'react'

export default class AddContact extends Component {
    render() {
        return (
            <div className='ui main margin'>
                <h2>Add Contact</h2>
                <form className='ui form'>
                    <div className='field'>
                        <label>Name</label>
                        <input type="text" name='name' placeholder='Name: ' />
                    </div>
                    <div className='field'>
                        <label>Email</label>
                        <input type="email" name='email' placeholder='Email: ' />
                    </div>
                    <button className='ui button gray'>Add Contact</button>
                </form>
            </div>
        )
    }
}