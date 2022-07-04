import React, { memo, useCallback, useState } from 'react'
import Button from './Button'
import { onlyNumbers } from './helpingFunctions'

const CheckoutContact = props => {

    const [phone, setPhone] = useState("")

    const handleChange = useCallback((e) => {
        let newVal = onlyNumbers(e.target.value)
        if(newVal.length < 11){
            setPhone(newVal)
        }
    },[phone])

    return (
        <div className='checkoutMainLeft-Contact'>
            <div className='checkoutMainContact-header'>
                Enter Mobile No.
            </div>
            <div className='checkoutMainContact-input'>
                <input inputmode="numeric" name="phone" value={phone} onChange={(e) => handleChange(e)} />
            </div>
        </div>
    )
}

export default memo(CheckoutContact);