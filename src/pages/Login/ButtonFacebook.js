import React from 'react';
import Button from '@mui/material/Button';
import { Facebook} from '@mui/icons-material';

const ButtonFacebook = ({ onLogin }) => {
    const facebookLogin = () => {
        if (!window.FB) return;

        window.FB.getLoginStatus(response => {
            if (response.status === "connected") {

                facebookLoginHandler(response);
            } else {

                window.FB.login(facebookLoginHandler, { scope: 'public_profile,email' });
            }
        });
    };

    const facebookLoginHandler = (response) => {
        console.log(response);

        if (response.status === "connected") {

            window.FB.api('/me?fields=id,name,email,picture', userData => {
                console.log(userData);

                const user = {
                    ...userData,
                    accessToken: response.authResponse.accessToken
                };
                onLogin(user);
            });
        }
    };

    return (
        <Button
            type="submit"
            variant="contained"
            sx={{ mt: 2, mb: 5 }}
            startIcon={<Facebook icon={Facebook} />}
            onClick={facebookLogin}
        >
            Accede con Facebook
        </Button>
    );
};

export default ButtonFacebook;