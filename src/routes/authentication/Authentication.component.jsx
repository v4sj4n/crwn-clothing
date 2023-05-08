import { SignInForm } from '../../components/sign-in-form/SignInForm.component'
import { SignUpForm } from '../../components/sign-up-form/SignUpForm.component'

import "./Authentication.styles.scss"

export const Authentication = () => {
  return (
    <div className="authentication-container">
      <SignInForm />
      <SignUpForm />
    </div>
  )
}
