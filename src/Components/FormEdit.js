import React, { useState } from "react"

export default function FormEdit({ item, data, setData }) {
    const [name, setName] = useState(item?.name)
    const [phoneNo, setPhoneNo] = useState(item?.phone_no)

    const submitHandler = (id) => {
        setData(data.map(address => id === address.id ?  { ...address, name, phone_no:phoneNo, isEdit: !address.isEdit } : 
         address))
    }

    const resetHandler = () => {
        setName("")
        setPhoneNo("")
    }

    const cancelHandler = (id) => {
        setData(data.map(address => id === address.id ?  { ...address, isEdit: !address.isEdit } : 
            address))
    }


    return (
        <div>
            <div className="box-container form-container">
                <div className="input-container">
                    <label className="label" for="name-input">Enter Your Full Name
                        <span className="required-input-astrik">*</span>
                    </label>
                    <div className="inner-input-container">
                        <input
                            className="input"
                            id="name-input"
                            type="name"
                            placeholder="john Thomas"
                            onChange={(e) => setName(e.target.value)}
                            value={name}
                            required
                        />
                        <div className="email-err-msg err-msg"></div>
                    </div>
                </div>

                <div className="input-container" >
                    <label className="label" for="phoneNo-input">Enter Your phone No.
                        <span className="required-input-astrik">*</span>
                    </label>
                    <div className="inner-input-container">
                        <input
                            className="input"
                            id="phoneNo-input"
                            type="number"
                            placeholder="Phone No"
                            onChange={(e) => setPhoneNo(e.target.value)}
                            value={phoneNo}
                            required
                        />
                        <div className="phoneNo-err-msg err-msg"></div>
                    </div>
                </div>
                <div className="btn-container">
                    <button className="btn outline-success" type="submit" onClick={() => submitHandler(item?.id)}>Submit</button>
                    <button className="btn outline-secondary" onClick={resetHandler}>Reset</button>
                    <button className="btn outline-error" onClick={() => cancelHandler(item?.id)}>Cancel</button>
                </div>

            </div>


        </div>


    )
}