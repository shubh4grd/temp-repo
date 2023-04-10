import { environment } from 'src/environments/environment';

const apiUrl = environment.apiUrl;

const titleMessages: any = {
    loginTitle: 'Login',
    registerTitle:'Register',
    forgotPassWordTitle: 'Forgot Password'
};

const apiUrls: any = {
    exampleUrl : apiUrl + '/example-endpoint',
    loginUrl: apiUrl + 'Enter your api end point',
    registerUrl: apiUrl + 'Enter your api end point',
    changePasswordUrl:apiUrl + 'Enter your api end point',
    forgetPassword : apiUrl + 'Enter your api end point',
};

export const apiUrlConstants: any = {
    applicationTitle: 'Your app title here',
    titleMessages,
    apiUrls
};
