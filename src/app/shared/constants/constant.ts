import { environment } from 'src/environments/environment';

function getConstatnts(): any {
    const apiUrl = environment.apiUrl;

    const titleMessages = {
        registrationTitle: 'Registration',
        changePasswordTitle: 'Change Password',
    };

    const accountValidationMessages = {
        userName: [
            { type: 'required', message: 'Username is required.' },
            { type: 'email', message: 'Please enter a valid email address.' },
            { type: 'pattern', message: 'Email format should be xyz@example.com' }
        ],
        description: [
            { type: 'required', message: 'Description is required.' },
        ],
        addressLine1: [
            { type: 'required', message: 'Address 1 is required.' },
            { type: 'minlength', message: 'Address 1 must be at least 10 characters long.' },
            { type: 'maxlength', message: 'Address 1 cannot be more than 500 characters long.' }
        ],
        addressLine2: [
            { type: 'required', message: 'Address 2 is required.' },
            { type: 'minlength', message: 'Address 2 must be at least 10 characters long.' },
            { type: 'maxlength', message: 'Address 2 cannot be more than 500 characters long.' }
        ],
        countryId: [
            { type: 'required', message: 'Country is required.' },
        ],
        stateId: [
            { type: 'required', message: 'State is required.' },
        ],
        cityId: [
            { type: 'required', message: 'City is required.' },
        ],
        postalCode: [
            { type: 'required', message: 'Zipcode is required.' },
        ],
        confirmPassword: [
            { type: 'error', message: 'Password does not match.' },
        ],
        ConfirmPassword: [
            { type: 'required', message: 'Confirm Password is required.' }

        ],
        newPassword: [
            { type: 'required', message: 'Password is required.' },
            { type: 'pattern', message: 'Your password must contain at least minimum 8 character, one uppercase, one lowercase, one special character, and one number.' }
        ],
        oldPassword: [
            { type: 'required', message: 'Password is required.' }
        ],
        password: [
            { type: 'required', message: 'Password is required.' },
            { type: 'minlength', message: 'Password must be at least 8 characters long.' }
        ],

        firstName: [
            { type: 'required', message: 'First Name is required.' },
        ],
        lastName: [
            { type: 'required', message: 'Last Name is required.' },
        ],
        contactType: [
            { type: 'required', message: 'Contact type is required.' },
        ],
        email: [
            { type: 'required', message: 'Email is required.' },
            { type: 'email', message: 'Please enter a valid email address.' },
            { type: 'pattern', message: 'Email format should be xyz@example.com.' },
            { type: 'unique', message: 'Email address is already exist. Try another.' }
        ],
        cellPhone: [
            { type: 'required', message: 'Cell phone is required.' },
            { type: 'minlength', message: 'Cell phone must be at least 10 characters long.' },
            { type: 'maxlength', message: 'Cell phone cannot be more than 10 characters long.' },
            { type: 'unique', message: 'Cell phone is already exist. Try another.' }
        ],
        workPhone: [
            { type: 'required', message: 'Work phone is required.' },
        ],
        phoneNo: [
            { type: 'required', message: 'Phone number is required.' },
        ],
        property: [
            { type: 'required', message: 'Property is required.' },
        ]
    };

    const matchPattern = {
        emailPattern: '^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$',
        passwordPattern: '((?=.*\\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%]).{8,20})',
        phonePattern: '[6-9]\\d{9}'
    };

    const notificationMessage = {
        requiredMessages: 'Please fill in all the required fields.',
        changePasswordSuccess: 'Password changed successfully.'
    };

    const applicationConstants = {
        applicationTitle: 'Your app name',
        titleMessages,
        notificationMessage,
        accountValidationMessages,
        matchPattern
    };

    return applicationConstants;
}

export const Constants = getConstatnts();
