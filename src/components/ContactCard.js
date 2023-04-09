import React from 'react'

const ContactCard = props => {
    const { id, name, email } = props.contact

    return (
        <div className='item'>
            <div className='content'>
                <div className='header'>
                    {name}
                </div>
                <div>
                    {email}
                </div>
            </div>
            <div className='icon-right'>
                <i 
                    className="trash alternate outline icon right aligned content"
                    onClick={() => props.clickHander(id)}    
                > 
                </i>
            </div>
        </div>
    )
}

export default ContactCard