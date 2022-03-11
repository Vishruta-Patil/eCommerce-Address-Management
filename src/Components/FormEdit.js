import FormCantroller from "./formCantroller";
import React, { useEffect, useState } from "react"

export default function FormEdit({item}) {
    // {item?.phone_no}
    // const [name, setName] = useState('')
    // const [phoneNo, setPhoneNo] = useState('')

    return (
        <div>
            <form className="box-container form-container">
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
                            // onChange={(e) => setName(e.target.value)}
                            value={item?.name}
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
                            // onChange={(e) => setPhoneNo(e.target.value)}
                            value={item?.phone_no}
                            required
                        />
                        <div class="phoneNo-err-msg err-msg"></div>
                    </div>
                </div>
                <FormCantroller />
            </form>


        </div>


    )
}