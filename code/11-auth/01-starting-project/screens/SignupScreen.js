import AuthContent from '../components/Auth/AuthContent';
import createUser from '../util/auth';
import LoadingOverlay from '../components/ui/LoadingOverlay';
import { useState } from 'react';

function SignupScreen() {
  const [isAuthenticating, setIsAuthenticating] = useState(false)

  async function signupHandler({email,password}){
    setIsAuthenticating(true)
    await createUser(email,password)
    setIsAuthenticating(false)
  }

  if(isAuthenticating){
    return <LoadingOverlay message={"Creating user..."}/>
  }

  return <AuthContent onAuthenticate={signupHandler} />;
}

export default SignupScreen;
