import { Heading, HeadingLevel } from 'baseui/heading';
import { Input } from 'baseui/input';
import { Button } from 'baseui/button';
import { useState } from 'react';
import { useSnackbar } from 'baseui/snackbar';
import { Alert } from 'baseui/icon';
import { useDispatch } from 'react-redux';
import {
  LoginBase,
  LoginBox,
  LoginButton,
  LoginPassword,
  LoginTitle,
  LoginUsername,
} from '../styles/Login.styles';
import { loginAsync } from '../reducers/auth.reducer';
import { useHistory } from 'react-router-dom';

export const Login = () => {
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
    dispatch(loginAsync({ email, password })).then((res) => {
      if (res?.payload?.token) {
        history.push('/');
      }
    });
  };

  return (
    <LoginBase>
      <LoginBox>
        <LoginTitle>
          <HeadingLevel>
            <Heading $style={{ textAlign: 'center', width: '85%' }}>
              React Node Fullstack E-commerce
            </Heading>
          </HeadingLevel>
        </LoginTitle>
        <LoginUsername>
          <Input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            clearOnEscape
          />
        </LoginUsername>
        <LoginPassword>
          <Input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
            clearOnEscape
          />
        </LoginPassword>
        <LoginButton>
          <Button onClick={onSubmit} $style={{ width: '100%' }}>
            Login
          </Button>
        </LoginButton>
      </LoginBox>
    </LoginBase>
  );
};
