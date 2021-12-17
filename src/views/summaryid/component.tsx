import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import React, { FC, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { Diagnosis, RepairSummary, Status } from '../../models/bikes/types';
import { popLoading, pushLoading } from '../../redux/ui/actions';
import { userTokenSelector } from '../../redux/user/selectors';
import { diagnosisRequest, statusRequest, summaryRequest } from '../../services/addbike/service';
import { patchSummary } from '../../utils/async/utils';
import "./styles.css";


const Summaryid:FC= () => {


    const location = useLocation();
    const lastItem = parseInt((location.pathname.substring(location.pathname.lastIndexOf('/') + 1)));

    const [summarys,setSummarys]= useState<RepairSummary[]> ([]);
    const [diagnosis,setDiagnosis]=useState<Diagnosis[]> ([]);
    const [status,setStatus]=useState<Status[]> ([]);
    const [selectedDiag,setselectedDiag]=useState<Number> (100);
    const [selectedStat,setselectedStat]=useState<Number> (100);

    const dispatch=useDispatch();
    const tokenUser = useSelector(userTokenSelector)



    useEffect(()=>{
             
     const getInfo = async () =>{
        dispatch(pushLoading());

        const recievedSummarys = await summaryRequest({token:tokenUser});
        const recievedDiagnosis = await diagnosisRequest({token:tokenUser});
        const recievedStatus = await statusRequest({token:tokenUser});
        setDiagnosis(recievedDiagnosis);
        setSummarys (recievedSummarys);
        setStatus(recievedStatus);
        dispatch(popLoading());
     }
     if(summarys.length===0){
        getInfo();
     }
    },[summarys,diagnosis,status])

    const handleChange = async(event: { target: { value: any; }; }) => {
        const body={
            id:lastItem,
            diagnosis:event.target.value
        }
        patchSummary({token:tokenUser}, JSON.stringify(body), summarys[lastItem-1].id)
        const recievedSummarys = await summaryRequest({token:tokenUser});
        setselectedDiag(event.target.value);
        setSummarys(recievedSummarys);
    };
    const handleChangeStatus = async(event: { target: { value: any; }; }) => {
        const body={
            id:lastItem,
            status:event.target.value
        }
        patchSummary({token:tokenUser}, JSON.stringify(body), summarys[lastItem-1].id)
        const recievedSummarys = await summaryRequest({token:tokenUser});
        setselectedStat(event.target.value);
        setSummarys(recievedSummarys);
    };

    return (
        <div >
            {(summarys.length>0&&lastItem<=summarys.length)? 
        <div className="summaryid-container">
            <div className="summaryid-header">

            </div>
            <div className="summaryid-client">
                <p className="summaryid-title">Client</p>
                <p>{`Name: ${summarys[lastItem-1].client.name}`}</p>
                <p>{`Phone Number: ${summarys[lastItem-1].client.phoneNumber}`}</p> 
            </div>
            <div className="summaryid-motorcycle">
                <p className="summaryid-title"> Motorcycle </p>
                <p>{`Brand: ${summarys[lastItem-1].motorcycle.brand}`}</p>
                <p>{`Line: ${summarys[lastItem-1].motorcycle.line}`}</p>

            </div>
            <div className="summaryid-diagnosis">
                <p className="summaryid-title"> Diagnosis </p>
                <p>{`Initial Information: ${summarys[lastItem-1].initialInfo}`}</p>
                <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">Diagnosis</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={selectedDiag===100?summarys[lastItem-1].diagnosis.id:selectedDiag}
                            label="Diagnosis"
                            onChange={handleChange}
                        >
                          {  diagnosis?.map((diagno)=>(
                            <MenuItem 
                            key={diagno.id}
                            value={diagno.id}>{diagno.description}</MenuItem>

                          ))}
                        </Select>
                </FormControl>

            </div>
            <div className="summaryid-status">
                <p className="summaryid-title"> Status </p>
                <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">Status</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={selectedStat===100?summarys[lastItem-1].status.id:selectedStat}
                            label="Status"
                            onChange={handleChangeStatus}
                        >
                          {  status?.map((stat)=>(
                            <MenuItem 
                            key={stat.id}
                            value={stat.id}>{stat.description}</MenuItem>

                          ))}
                        </Select>
                </FormControl>

            </div>
            <div className="summaryid-date">
                <p className="summaryid-title"> Date </p>
                <p>{`Date of reception: ${summarys[lastItem-1].date.reception_date}`}</p>                
                <p>{`Date of delivery: ${summarys[lastItem-1].date.deliver_date}`}</p>                
            </div>

        </div>
        : <div className="error-container">
        <p className="number-error"> HEY! </p>
        <p className="not-found-error"> How did you get here? </p> 
        </div>}


        </div>
    )
}


export default Summaryid