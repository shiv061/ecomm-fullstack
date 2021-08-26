import { styled } from 'baseui';

export const SignupBase = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100vh',
  background: '#f2f6f8',
});

export const SignupBox = styled('div', {
  width: '40%',
  height: '70%',
  display: 'flex',
  flexDirection: 'column',
  boxShadow: 'rgba(27, 31, 35, 0.04) 0px 1px 0px 0px',
  background: 'white',
  minWidth: '25rem',
  maxWidth: '40%',
});

export const SignupTitle = styled('div', {
  flex: 2,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
});

export const SignupUsername = styled('div', {
  flex: 1,
  margin: '0px auto',
  width: '90%',
});

export const SignupEmail = styled('div', {
  flex: 1,
  margin: '0px auto',
  width: '90%',
});

export const SignupPassword = styled('div', {
  flex: 1,
  margin: '0px auto',
  width: '90%',
});

export const SignupButton = styled('div', {
  flex: 1,
  margin: '0px auto',
  width: '90%',
});
