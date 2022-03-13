import { useState } from "react"
import FormCantroller from "./formCantroller"
import { v4 as uuidv4 } from 'uuid';

export default function Form({data, setData}) {
    const [name, setName] = useState('')
    const [phoneNo, setPhoneNo] = useState('')
    const [displayForm , setDisplayForm] = useState(false)

    const submitHandler = (e) => {
        e.preventDefault()
       setData([...data, {id:uuidv4(), name, phone_no:phoneNo, isEdit:false}])
       resetHandler()
       setDisplayForm(false)    
    }

    const resetHandler = () => {
        setName("")
        setPhoneNo("")
    }

    const displayFormHandler = () => {
        displayForm ? setDisplayForm(false) : setDisplayForm(true)
    }

    return (
        <div>
            <div className="box-container">
                <div onClick={displayFormHandler} class="flex address-bar">
                    <button className="floating-btn add-btn">+</button>
                    <p className="lg-txt ">ADD NEW ADDRESS</p>
                </div>

            </div>
            {displayForm && <form onSubmit={submitHandler} className="box-container form-container">
                <div class="input-container">
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

                <FormCantroller value={setDisplayForm} submitHandler={submitHandler} resetHandler={resetHandler} setData={setData}/>

            </form> }
        </div>
    )
}