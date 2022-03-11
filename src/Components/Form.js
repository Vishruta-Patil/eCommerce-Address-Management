import { useState } from "react"
import FormCantroller from "./formCantroller"


export default function Form() {
    const [name, setName] = useState('')
    const [phoneNo, setPhoneNo] = useState('')
    const [country, setCountry] = useState('')
    const [disable, setDisbale] = useState(false)

    const [displayForm , setDisplayForm] = useState(false)

    const editHandler = () => {
        setDisbale(false)
    }

    const submitHandler = (e) => {
        e.preventDefault()
        setDisbale(true)
    }

    const displayFormHandler = () => {
        setDisplayForm(true)
    }

    return (
        <div>
            <div class="box-container">
                <div onClick={displayFormHandler} class="flex flex-center address-bar">
                    <button className="floating-btn add-btn">+</button>
                    <p className="rg-txt">Add new address</p>
                </div>

            </div>
            {displayForm && <form onSubmit={submitHandler} className="box-container form-container">
                <div class="input-container">
                    <label class="label" for="name-input">Enter Your Full Name
                        <span class="required-input-astrik">*</span>
                    </label>
                    <div class="inner-input-container">
                        <input
                            class="input"
                            id="name-input"
                            type="name"
                            placeholder="john Thomas"
                            onChange={(e) => setName(e.target.value)} disabled={disable}
                            required
                        />
                        <div class="email-err-msg err-msg"></div>
                    </div>
                </div>

                <div class="input-container" >
                    <label class="label" for="phoneNo-input">Enter Your phone No.
                        <span class="required-input-astrik">*</span>
                    </label>
                    <div class="inner-input-container">
                        <input
                            class="input"
                            id="phoneNo-input"
                            type="number"
                            placeholder="Phone No"
                            onChange={(e) => setPhoneNo(e.target.value)} disabled={disable}
                            required
                        />
                        <div class="phoneNo-err-msg err-msg"></div>
                    </div>
                </div>

                <FormCantroller />

                {/* <input type="submit" />

            <input type="button" value="edit" onClick={editHandler} /> */}


            </form> }
        </div>
    )
}