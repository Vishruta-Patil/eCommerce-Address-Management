const FormCantroller = ({value, submitHandler, resetHandler}) => {
    
    return (
    <div className="btn-container">       
        <button className="btn outline-success" onClick={submitHandler}>Submit</button>
        <button className="btn outline-secondary" onClick={resetHandler}>Reset</button>
        <button className="btn outline-error" onClick={() => value(false)}>Cancel</button>
    </div>
    )}

export default FormCantroller 

