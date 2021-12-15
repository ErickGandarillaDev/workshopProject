import { User } from "../../models/user/types";
import { fetchToken, registerUser } from "../../utils/async/utils";

export const login = async (
    basicUser: Partial<User>
): Promise<Partial<User> | Error> => {
    const response = await fetchToken(basicUser);

    const logUser: User = {
        email: basicUser.email,
        password: basicUser.password,
        username: basicUser.username,
        token: response.access,
        refreshtoken: response.refresh
    };
    return logUser;
};

export const signin = async (
    basicUser: Partial<User>
): Promise<Partial<User> | Error> => {
    const response = await registerUser(basicUser);

    const logUser: User = {
        email: response.email,
        username: response.username,
    };

    return logUser;

}