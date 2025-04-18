import AuthContent from '../components/Auth/AuthContent';
import { useState } from 'react';
import LoadingOverlay from '../components/ui/LoadingOverlay';
import { login } from '../util/auth';
import { Alert } from 'react-native';

function LoginScreen() {
  const [isAuthenticating, setIsAuthenticating] = useState(false)

  async function loginHandler({email,password}){
    setIsAuthenticating(true)
    try {
      await login(email,password)
      
    } catch (error) {
      Alert.alert("Authentication Failed", "Could not log in please check your credentials")
    }
    setIsAuthenticating(false)
  }

  if(isAuthenticating){
    return <LoadingOverlay message={"Logging you in..."}/>
  }

  return <AuthContent isLogin onAuthenticate={loginHandler}/>;
}

export default LoginScreen;
