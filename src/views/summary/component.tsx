import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import { FC, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { RepairSummary } from '../../models/bikes/types';
import { popLoading, pushLoading } from '../../redux/ui/actions';
import { userTokenSelector } from '../../redux/user/selectors';
import { summaryRequest } from '../../services/addbike/service';
import "./styles.css";

const Summary:FC = ()=> {

    const [summarys,setSummarys]= useState<RepairSummary[]> ([]);
    const dispatch=useDispatch();
    const tokenUser = useSelector(userTokenSelector)

    const navigate = useNavigate();

    useEffect(()=>{
             
     const getSummarys = async () =>{
        dispatch(pushLoading());

        const recievedSummarys = await summaryRequest({token:tokenUser});
        setSummarys(recievedSummarys);
        dispatch(popLoading());
     }
     if(summarys.length===0){
        getSummarys();
     }
    },[summarys])

    return (
        <div className="summary-container">
            <div className="summary-header">
            a
            </div>
            <div className="summary-table">
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                    <TableRow>
                        <TableCell>Client</TableCell>
                        <TableCell align="right">Motorcycle</TableCell>
                        <TableCell align="right">Diagnosis</TableCell>
                        <TableCell align="right">Status</TableCell>
                        <TableCell align="right">Dates</TableCell>
                    </TableRow>
                    </TableHead>
                    <TableBody>
                    {summarys.map((summary, index) => (
                        <TableRow
                        key={summary.id}
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        className="clickable-row"
                        onClick={()=> navigate(`/summary/${index+1}`,{replace:true})}
                        >

                        <TableCell component="th" scope="summary">
                            {"NAME: "+summary.client.name}
                            <br/>
                            {"PHONE: "+summary.client.phoneNumber}
                        </TableCell>
                        <TableCell align="right">{"BRAND: "
                                                +summary.motorcycle.brand}
                                                <br/>
                                                {"LINE: "+summary.motorcycle.line}
                                                </TableCell>
                        <TableCell align="right">{"Initial Info: "
                                                +summary.initialInfo}
                                                <br/>
                                                {"Workshop diagnosis: "
                                                +summary.diagnosis.description}
                                                </TableCell>
                        <TableCell align="right">{summary.status.description}</TableCell>
                        <TableCell align="right">{"RECEPTION DATE: "
                                                +summary.date.reception_date}
                                                <br/>
                                                {"DELIVERY DATE: "
                                                +summary.date.deliver_date}
                        </TableCell>
                        </TableRow>
                    ))}
                    </TableBody>
                </Table>
                </TableContainer>
            </div>

        </div>
    )
}

export default Summary
