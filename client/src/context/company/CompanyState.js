import React, {useReducer} from 'react';
import uuid from 'uuid';
import CompanyContext from './companyContext';
import companyReducer from './companyReducer';
import {
    ADD_COMPANY,
    UPDATE_COMPANY
} from '../types';

const CompanyState = props => {
    const initialState = {
        companies: [
            {
                id : "companyID1",
                companyName: "COMPANY AS",
                user:"ownerID1"
            }, 
            {
                id : "companyID2",
                companyName : "BEDRIFT AS",
                user: "ownerID2"
            }
        ]
    };

    const [state, dispatch] = useReducer(companyReducer, initialState);

    // ADD COMPANY

    // UPDATE COMPANY

    return (
        <CompanyContext.Provider 
        value={{
            companies: state.companies
        }}>
            {props.children}
        </CompanyContext.Provider>
    );
};

export default CompanyState;