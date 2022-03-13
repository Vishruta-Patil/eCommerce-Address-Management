import FormEdit from "./FormEdit"

const AddressContainer = ({ data, setData, editFormVisibility, setEditFormVisibility }) => {
    const editHandler = (phone_no) => {
        setData(data.map(address => phone_no === address.phone_no ? {...address, isEdit: !address.isEdit} : address))  
    }
    
    const deleteHandler = (item) => {
       setData( data.filter(i => i.phone_no !== item?.phone_no))
    }


    return (
        <div>
                <div>
                    {data.map(item =>
                    {return item.isEdit ? <FormEdit item={item} data={data} setData={setData}/> :
                        <div className="box-container address-container">
                            <p className="left-txt lg-txt">Name: {item?.name}</p>
                            <h2 className="left-txt rg-txt">Phone no: {item?.phone_no}</h2>
                            <h2 className="left-txt md-txt">{item?.address}</h2>

                            <div className="btn-container">
                                <button className="btn success" onClick={()=>editHandler(item?.phone_no)}>Edit</button>
                                <button className="btn error" onClick={() => deleteHandler(item)}>Delete</button>
                            </div>
                        </div>
                    }
                    )}
                </div>
        </div>

    )
}

export default AddressContainer

