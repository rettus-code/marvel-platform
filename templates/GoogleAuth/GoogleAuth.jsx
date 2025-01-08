import { useState } from 'react';
import { useTheme } from '@mui/material';
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth } from '@/libs/redux/store';
import sharedStyles from '@/styles/shared/sharedStyles';
import GradientOutlinedButton from '@/components/GradientOutlinedButton';
import styles from './styles';
import GoogleIcon from '@/assets/svg/googleIcon.svg';

import { AuthContext } from '@/libs/providers/GlobalProvider';

/**
 * Renders a sign-in form with email and password inputs, and a submit button.
 *
 * @param {object} props - The props object containing the handleSwitch function.
 * @return {JSX.Element} The sign-in form component.
 */
const GoogleAuth = () => {
    const theme = useTheme();
    const handleGoogleSignIn = async () => {
        const provider = new GoogleAuthProvider();
        try {
            await signInWithPopup(auth, provider);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <GradientOutlinedButton
            clickHandler={handleGoogleSignIn}
            icon={<GoogleIcon width={24} height={24} />}
            iconPlacement="left"
            bgcolor={theme.palette.Background.gradient.purple2}
            id="google-auth-button"
            text="Sign In Via Google"
            textColor={theme.palette.Common.White['100p']}
            {...styles.googleAuthButtonProps}
            style={{ border: `2px solid ${theme.palette.Background.gradient.purple4}` }}
        />
    );
};

export default GoogleAuth;