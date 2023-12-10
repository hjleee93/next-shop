import classNames from 'classnames'
import React, {useState} from 'react'
import styles from './Input.module.scss'
import Icon from '../icon/Icon'

const Input = ({
  id,
  label,
  name  = '',
  labelVisible,
  icon,
  email,
  password,
  placeholder,
  readonly,
  disabled,
  value,
  error: errorProp,
  className = '',
  onChange,
  ...restProps
}) => {

  const [inputeValue, setInputValue] = useState(value)
  const [isPasswordVisible, setIsPasswordVisible] = useState(false)

  const checkType = () => {
    if(email) return 'email'
    if(password) return isPasswordVisible ? 'text' : 'password'
    return 'text'
  }

  const handleChange = (e) => {
    const value = e.target.value
    setInputValue(value)
    onChange(e)
  }

  const iconType = isPasswordVisible ? 'show' : 'hide'
  const iconLabel = isPasswordVisible ? '비밀번호 숨기기' : '비밀번호 보이기'

  return (
    <div className={classNames(styles.formControl, className)}>
      <label htmlFor={id} 
      className={classNames(styles.label, labelVisible || styles.labelHidden)}>
        {label}
      </label>
      <div className={classNames(styles.inputWrapper, errorProp && styles.inputWrapperError)}>
        {icon ? <Icon type={icon}/> : null}
        <input 
        id={id}
        type={checkType()}
        name={name}
        className={classNames(styles.input)}
        placeholder={placeholder}
        readOnly={readonly}
        disabled={disabled}
        value={value}
        onChange={handleChange}
        {...restProps}
        />
        {password?(
          <button
          type="button"
          className={styles.button}
          onClick={() => setIsPasswordVisible(prev => !prev)}
          disabled={disabled}
          >
            <Icon type={iconType} alt={iconLabel} title={iconLabel}/>
          </button>
        ) : null}
      </div>

        {errorProp && (
          <span role="alert" className={styles.error}>
            {errorProp.message}
          </span>
        )}
    </div>
  )
}

export default Input