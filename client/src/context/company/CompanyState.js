import React, {useReducer} from 'react';
import axios from 'axios';
import CompanyContext from './companyContext';
import companyReducer from './companyReducer';
import {
    ADD_COMPANY,
    JOIN_COMPANY,
    ERR_COMPANY,
    GET_COMPANIES,
    GET_COMPANIES_BY_NAME
} from '../types';

const CompanyState = props => {
    const initialState = {
        companies: [],
        loading: true
    };

    const [state, dispatch] = useReducer(companyReducer, initialState);

    // GET COMPANIES
    const getCompanies = async () => {
        
        try {
            const res = await axios.get("/api/companies");
            dispatch({
                type: GET_COMPANIES,
                payload: res.data
            });
        } catch (err) {
            dispatch({
                type: ERR_COMPANY,
                payload: err.response.msg
            });
        }
    }

     // GET COMPANY BY NAME
     const getCompaniesByName = async companyName => {
        
        try {
            companyName = encodeURIComponent(companyName.trim()); // In case of spaces
            const res = await axios.get(`/api/companies/${companyName}`);
            dispatch({
                type: GET_COMPANIES_BY_NAME,
                payload: res.data
            });
        } catch (err) {
            dispatch({
                type: ERR_COMPANY,
                payload: err.response.msg
            });
        }
    }


    // ADD COMPANY
    const addCompany = async company => {
        const config = {
            headers: {
                "Content-Type" : "application/json"
            }
        };

        try {
            const res = await axios.post("/api/companies", company, config);
            dispatch({
                type: ADD_COMPANY,
                payload: res.data
            });
        } catch (err) {
            dispatch({
                type: ERR_COMPANY,
                payload: err.response.msg
            });
        }
    }

    // JOIN COMPANY
    const joinCompany = async id => {
        const config = {
            headers: {
                "Content-Type" : "application/json"
            }
        };

        try {
            const res = await axios.put(`/api/companies/join/${id}`, config);
            dispatch({
                type: JOIN_COMPANY,
                payload: res.data
            });
        } catch (err) {
            dispatch({
                type: ERR_COMPANY,
                payload: err.response.msg
            });
        }
    }

    return (
        <CompanyContext.Provider 
        value={{
            companies: state.companies,

            addCompany,
            getCompanies,
            joinCompany,
            getCompaniesByName
        }}>
            {props.children}
        </CompanyContext.Provider>
    );
};

export default CompanyState;