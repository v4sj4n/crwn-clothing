import "./Button.styles.scss"

const BUTTON_TYPE_CLASSES = {
  google: 'google-sign-in',
  inverted: 'inverted',
}

export const Button = ({ children, buttonType, ...otherProps }) => {
  return (
    <div className={`button-container ${BUTTON_TYPE_CLASSES[buttonType]}`} {...otherProps}>
      {children}
    </div>
  )
}