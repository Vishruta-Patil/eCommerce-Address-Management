import data from "../data"
import React, { useEffect, useState } from "react"
import Form from "./Form"
import FormEdit from "./FormEdit"

const FormCantroller = ({ data, setData, editFormVisibility, setEditFormVisibility }) => {
    const editHandler = (phone_no) => {
        // setEditFormVisibility(true)
         
        setData(data.map(address => phone_no === address.phone_no ? {...address, isEdit: !address.isEdit} : address))
        
    }
    

    const deleteHandler = (item) => {
       setData( data.filter(i => i.phone_no !== item?.phone_no))
    }

    // useEffect(() => setData(data), [data])
    console.log(data)


    return (
        <div>
            {/* {editFormVisibility ? <FormEdit /> : */}
                <div>
                    {data.map(item =>
                     
                    {return item.isEdit ? <FormEdit item={item}/> :
                   
                        <div className="box-container address-container">
                            <p className="left-txt lg-txt">Name: {item?.name}</p>
                            <h2 className="left-txt rg-txt">Phone no: {item?.phone_no}</h2>
                            <h2 className="left-txt md-text">{item?.address}</h2>

                            <div className="btn-container">
                                <button className="btn success" onClick={()=>editHandler(item?.phone_no)}>Edit</button>
                                <button className="btn error" onClick={() => deleteHandler(item)}>Delete</button>
                            </div>
                        </div>
                    }
                    )}
                </div>
            {/* }  */}


        </div>

    )
}

export default FormCantroller

