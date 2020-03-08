import React, { useState, useContext } from 'react'
import CompanyContext from '../../context/company/companyContext';


const CreateCompany = () => {
    const companyContext = useContext(CompanyContext);
    const {addCompany} = companyContext;

    const [ companyName, setName] = useState("");

    const onChange = e => setName(e.target.value);
    
    const onSubmit = e => {
        e.preventDefault();
        addCompany({
            companyName
        });
    }

    return (
        <div className='form-container'>
            <h1>
                <span className="text-primate">Opprett bedrift</span>
            </h1>
            <form onSubmit={onSubmit}>
        
                <div className="form-group">
                    <label htmlFor="name">Bedrift navn</label>
                    <input type="text" name="password" value={companyName} onChange={onChange}/>
                </div>
                <input type="submit" value="Opprett" className="btn btn-primary brn-block"/>
            </form>
        </div>
    )
}

export default CreateCompany;