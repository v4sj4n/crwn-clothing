import { SignInForm } from '../../components/sign-in-form/SignInForm.component'
import { SignUpForm } from '../../components/sign-up-form/SignUpForm.component'

import { AuthenticationContainer } from './Authentication.styles'

const Authentication = () => {
  return (
    <AuthenticationContainer>
      <SignInForm />
      <SignUpForm />
    </AuthenticationContainer>
  )
}

export default Authentication
