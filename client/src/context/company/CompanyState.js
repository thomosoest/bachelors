import React, {useReducer} from 'react';
import axios from 'axios';
import CompanyContext from './companyContext';
import companyReducer from './companyReducer';
import {
    ADD_COMPANY,
    JOIN_COMPANY,
    ERR_COMPANY,
    GET_COMPANIES,
    GET_COMPANIES_BY_NAME,
    GET_OWNED_COMPANIES,
    GET_JOINED_COMPANIES,
    CLEAR_SEARCH_COMPANIES,
    GET_CURRENT_COMPANY,
    GET_BANK,
    GET_BANK_EMPLOYEES,
    GET_GRAPH_DATA
} from '../types';

const CompanyState = props => {
    const initialState = {
        companies: [],
        ownedCompanies: [],
        joinedCompanies: [],
        currentCompany: null,
        bank: [],
        graphData: [],
        employees: [],
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


    // GET CURRENT COMPANY
    const getCurrentCompany = async id => {
    
        try {
            const res = await axios.get(`api/companies/mine/${id}`);
            dispatch({
                type: GET_CURRENT_COMPANY,
                payload: res.data
            })
            
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

    // GET_OWNED_COMPANIES
    const getOwnedCompanies = async id => {
        
        try {
            const res = await axios.get(`/api/companies/mine`);
            dispatch({
                type: GET_OWNED_COMPANIES,
                payload: res.data
            });
        } catch (err) {
            dispatch({
                type: ERR_COMPANY,
                payload: err.response.msg
            });
        }
    }


    // GET_JOINED_COMPANIES
    const getJoinedCompanies = async () => {
        
        try {
            const res = await axios.get(`/api/profile/me/companies`);
            dispatch({
                type: GET_JOINED_COMPANIES,
                payload: res.data
            });
        } catch (err) {
            dispatch({
                type: ERR_COMPANY,
                payload: err.response.msg
            });
        }
    }

    // GET_BANK
    const getBank = async () => {
        
        try {
            console.log(state.currentCompany._id);
            const res = await axios.get(`/api/skills/${state.currentCompany._id}`);
            dispatch({
                type: GET_BANK,
                payload: res.data
            });
        } catch (err) {
            dispatch({
                type: ERR_COMPANY,
                payload: err.response.msg
            });
        }
    }


    // GET_GRAPH_DATA
    const getGraphData = async () => {
        
        try {
            const res = await axios.get(`/api/skills/graph/${state.currentCompany._id}`);
            dispatch({
                type: GET_GRAPH_DATA,
                payload: res.data
            });
        } catch (err) {
            dispatch({
                type: ERR_COMPANY,
                payload: err.response.msg
            });
        }
    }


    // GET BANK EMPLOYEES
    const getBankEmployees = async skill => {
        
        try {
            const res = await axios.get(`api/skills/${state.currentCompany._id}/${skill}`);
            dispatch({
                type: GET_BANK_EMPLOYEES,
                payload: res.data
            });
        } catch (err) {
            dispatch({
                type: ERR_COMPANY,
                payload: err.response.msg
            });
        }
    }
    
    const clearSearchCompanies = async () => {
        try {
            dispatch({
                type: CLEAR_SEARCH_COMPANIES,
            })
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
            ownedCompanies: state.ownedCompanies,
            joinedCompanies: state.joinedCompanies,
            currentCompany: state.currentCompany,
            bank: state.bank,
            employees: state.employees,
            graphData: state.graphData,
            
            addCompany,
            getCompanies,
            joinCompany,
            getCompaniesByName,
            getOwnedCompanies,
            clearSearchCompanies,
            getCurrentCompany,
            getBank,
            getBankEmployees,
            getJoinedCompanies,
            getGraphData
        
        }}>
            {props.children}
        </CompanyContext.Provider>
    );
};

export default CompanyState;