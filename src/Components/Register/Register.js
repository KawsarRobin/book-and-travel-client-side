import React from 'react';
import { Button } from 'react-bootstrap';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../hooks/useAuth';

const Register = () => {
  const { setError, signInWithGoogle, HandleSignOut } = useAuth();
  const location = useLocation();
  const history = useHistory();
  const redirect_uri = location.state?.from || '/';

  const handleSignInWithGoogle = () => {
    signInWithGoogle()
      .then((result) => {
        const user = result.user;
        history.push(redirect_uri);
        console.log(user);
      })
      .catch((error) => setError(error.message));
  };
  return (
    <div className="m-5">
      <Button variant="Warning" onClick={handleSignInWithGoogle}>
        {' '}
        Register With Google
      </Button>
      <Button onClick={HandleSignOut}> Log Out</Button>
    </div>
  );
};

export default Register;
