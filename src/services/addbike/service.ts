import { addBikeResponse, Diagnosis, RepairSummary, Status } from '../../models/bikes/types';
import { User } from "../../models/user/types";
import { addBike, fetchDiagnosis, fetchStatus, fetchSummary } from '../../utils/async/utils';

export const addbikeRequest = async (
    D: string,
    token: Partial<User>,
    initialInfo: string

): Promise<Partial<addBikeResponse>> => {
    const response = await addBike(D, token, initialInfo);

    return response;
};

export const summaryRequest = async (
    token: Partial<User>
): Promise<RepairSummary[]> => {
    const response = await fetchSummary(token);

    return response;
};

export const diagnosisRequest = async (
    token: Partial<User>
): Promise<Diagnosis[]> => {
    const response = await fetchDiagnosis(token);

    return response;
};

export const statusRequest = async (
    token: Partial<User>
): Promise<Status[]> => {
    const response = await fetchStatus(token);

    return response;
};


