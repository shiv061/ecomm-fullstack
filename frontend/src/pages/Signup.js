import { Heading, HeadingLevel } from 'baseui/heading';
import { Input } from 'baseui/input';
import { Button } from 'baseui/button';
import { useState } from 'react';
import { useSnackbar } from 'baseui/snackbar';
import { Alert } from 'baseui/icon';
import { useDispatch } from 'react-redux';
import {
  SignupBase,
  SignupBox,
  SignupButton,
  SignupPassword,
  SignupTitle,
  SignupUsername,
  SignupEmail,
} from '../styles/Signup.styles';
import { signUpAsync } from '../reducers/auth.reducer';
import { useHistory } from 'react-router-dom';

export const Signup = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const { enqueue } = useSnackbar();
  const history = useHistory();

  const onSubmit = () => {
    if (!email) {
      enqueue({
        message: 'Please enter your email',
        startEnhancer: ({ size }) => <Alert size={size} />,
      });
    }
    if (!password) {
      enqueue({
        message: 'Please enter your password',
        startEnhancer: ({ size }) => <Alert size={size} />,
      });
    }
    if (!username) {
      enqueue({
        message: 'Please enter your username',
        startEnhancer: ({ size }) => <Alert size={size} />,
      });
    }
    dispatch(signUpAsync({ username, email, password })).res((res) => {
      if (res?.payload?.token) {
        history.push('/login');
      }
    });
  };

  return (
    <SignupBase>
      <SignupBox>
        <SignupTitle>
          <HeadingLevel>
            <Heading $style={{ textAlign: 'center', width: '85%' }}>
              React Node Fullstack E-commerce
            </Heading>
          </HeadingLevel>
        </SignupTitle>
        <SignupUsername>
          <Input
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Enter your username"
            clearOnEscape
          />
        </SignupUsername>
        <SignupEmail>
          <Input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            clearOnEscape
          />
        </SignupEmail>
        <SignupPassword>
          <Input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
            clearOnEscape
          />
        </SignupPassword>
        <SignupButton>
          <Button onClick={onSubmit} $style={{ width: '100%' }}>
            Sign Up
          </Button>
        </SignupButton>
      </SignupBox>
    </SignupBase>
  );
};
