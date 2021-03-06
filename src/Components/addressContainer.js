import FormEdit from "./FormEdit"

const AddressContainer = ({ data, setData }) => {
    const reverseData = [...data].reverse()
    const editHandler = (id) => {
        setData(data.map(address => id === address.id ? {...address, isEdit: !address.isEdit} : address))  
    }
    
    const deleteHandler = (item) => {
       setData( data.filter(i => i.id !== item?.id))
    }


    return (
        <div>
                <div>
                    {reverseData.map(item =>
                    {return item.isEdit ? <FormEdit item={item} data={data} setData={setData}/> :
                        <div className="box-container address-container">
                            <p className="left-txt lg-txt">Name: {item?.name}</p>
                            <h2 className="left-txt rg-txt">Phone no: {item?.phone_no}</h2>
                            <h2 className="left-txt md-txt">{item?.address}</h2>

                            <div className="btn-container">
                                <button className="btn success" onClick={()=>editHandler(item?.id)}>Edit</button>
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

