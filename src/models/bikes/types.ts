export interface addBikeResponse {
    id: number;
    initialInfo: string;
    diagnosis: number;
    date: number;
    client: number;
    status: number;
    motorcycle: number;
}

export interface DateResponse {
    id: number;
    reception_date: string;
    deliver_date: string;
}

export interface ClientResponse {
    id: number;
    name: string;
    phoneNumber: string;
}

export interface MotorcycleResponse {
    id: number;
    brand: string;
    line: string;

}

export interface RepairSummaryResponse {
    id: number;
    initialInfo: string;
    diagnosis: number;
    date: number;
    client: number;
    status: number;
    motorcycle: number;

}
export interface Date {
    id: number;
    reception_date: string;
    deliver_date: string;
}

export interface Diagnosis {
    id: number;
    description: string;
}

export interface Client {
    id: number;
    name: string;
    phoneNumber: string;
}

export interface Status {
    id: number;
    description: string;
}

export interface Motorcycle {
    id: number;
    brand: string;
    line: string;
}

export interface RepairSummary {
    id: number;
    date: Date;
    diagnosis: Diagnosis;
    client: Client;
    status: Status;
    motorcycle: Motorcycle;
    initialInfo: string;
}

export interface Status {
    id: number;
    description: string;
}
