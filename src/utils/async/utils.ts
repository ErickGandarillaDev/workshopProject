import { ClientResponse, DateResponse, Diagnosis, MotorcycleResponse, RepairSummary, RepairSummaryResponse, Status } from '../../models/bikes/types';
import { TokenResponse, User } from '../../models/user/types';
export const sleep = (time: number) =>
  new Promise<void>((resolve) => {
    setTimeout(() => {
      resolve();
    }, time);
  });

export const fetchToken = async (
  basicUser: Partial<User>
): Promise<TokenResponse> => {
  const Token = await fetch("http://104.237.129.63:8006/api/token/", {
    method: "POST",
    body: JSON.stringify(basicUser),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => res.json())
    .catch((error) => {

    })
    .then((response) => {
      return response;
    });
  return Token;
};



export const fetchUser = async (
  basicUser: Partial<User>
): Promise<TokenResponse> => {
  const Token = await fetch("http://104.237.129.63:8006/api/token/", {
    method: "POST",
    body: JSON.stringify(basicUser),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => res.json())
    .catch((error) => {
      console.log(error);
    })
    .then((response) => {
      return response;
    });
  return Token;
};

export const registerUser = async (
  basicUser: Partial<User>
): Promise<User> => {
  const User = await fetch("http://104.237.129.63:8006/api/register", {
    method: "POST",
    body: JSON.stringify(basicUser),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => res.json())
    .catch((error) => {
      console.log(error);
    })
    .then((response) => {
      return response;
    });
  return User;
};

export const addBike = async (
  D: string,
  token: Partial<User>,
  initialInfo: string
): Promise<DateResponse> => {
  const Date: DateResponse = await fetch("http://104.237.129.63:8006/api/date/", {
    method: "POST",
    body: D,
    headers: new Headers({
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token.token}`
    })

  })
    .then((res) => res.json())
    .catch((error) => {
      console.log(error);
    });




  const Client: ClientResponse = await fetch("http://104.237.129.63:8006/api/client/", {
    method: "POST",
    body: D,
    headers: new Headers({
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token.token}`
    })

  })
    .then((res) => res.json())
    .catch((error) => {
      console.log(error);
    })
    .then((response) => {
      return response;
    });

  const Motorcycle: MotorcycleResponse = await fetch("http://104.237.129.63:8006/api/motorcycle/", {
    method: "POST",
    body: D,
    headers: new Headers({
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token.token}`
    })

  })
    .then((res) => res.json())
    .catch((error) => {
      console.log(error);
    })
    .then((response) => {
      return response;
    });
  const dateid = Date.id;
  const clientid = Client.id;
  const motorcycleid = Motorcycle.id;

  const bodyRepair = {
    diagnosis: 1,
    date: dateid,
    client: clientid,
    motorcycle: motorcycleid,
    status: 1,
    initialInfo: initialInfo

  }

  const RepairSummary: RepairSummaryResponse = await fetch("http://104.237.129.63:8006/api/addrepairsummary/", {
    method: "POST",
    body: JSON.stringify(bodyRepair),
    headers: new Headers({
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token.token}`
    })

  })
    .then((res) => res.json())
    .catch((error) => {
      console.log(error);
    })
    .then((response) => {
      return response;
    });


  return Date
}

export const fetchSummary = async (
  token: Partial<User>
): Promise<RepairSummary[]> => {
  const Summarys = await fetch("http://104.237.129.63:8006/api/repairsummary/", {
    method: "GET",
    headers: new Headers({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token.token}`
    })
  })
    .then((res) => res.json())
    .catch((error) => {
      console.log(error);
    })
    .then((response) => {
      return response;
    });
  return Summarys;
}

export const fetchDiagnosis = async (

  token: Partial<User>
): Promise<Diagnosis[]> => {
  const Diagnosis = await fetch("http://104.237.129.63:8006/api/diagnosis/", {
    method: "GET",
    headers: new Headers({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token.token}`
    })
  })
    .then((res) => res.json())
    .catch((error) => {
      console.log(error);
    })
    .then((response) => {
      return response;
    });
  return Diagnosis;

}

export const fetchStatus = async (

  token: Partial<User>
): Promise<Status[]> => {
  const Status = await fetch("http://104.237.129.63:8006/api/status/", {
    method: "GET",
    headers: new Headers({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token.token}`
    })
  })
    .then((res) => res.json())
    .catch((error) => {
      console.log(error);
    })
    .then((response) => {
      return response;
    });
  return Status;

}
export const patchSummary = async (
  token: Partial<User>,
  patch: string,
  id: number,
): Promise<RepairSummary> => {
  console.log("llega a patch");
  const RepairSummary = await fetch("http://104.237.129.63:8006/api/addrepairsummary/" + id + "/", {
    method: "PATCH",
    body: patch,
    headers: new Headers({
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token.token}`
    })
  })
    .then((res) => res.json())
    .catch((error) => {
      console.log(error);
    })
    .then((response) => {
      return response;
    });
  return RepairSummary;
}

