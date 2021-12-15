import { addBikeResponse, RepairSummary } from '../../models/bikes/types';
import { User } from "../../models/user/types";
import { addBike, fetchSummary } from '../../utils/async/utils';

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
