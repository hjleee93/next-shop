import React from 'react'
import Checkbox from '../checkbox/Checkbox'
import Tooltip from '../tooltip/Tooltip';
import styles from './AutoSignInCheckbox.module.scss'

const AutoSignInCheckbox = ({
  label='자동 로그인',
  checked,
  disabled,
  orientation = 'top',
  message='공용 컴퓨터에서는 사용하지 마세요.',
  onChange,
  ...restProps
}) => {
  return (
    <div className={styles.wrapper}>
      <Checkbox
        label={label}
        checked={checked}
        disabled={disabled}
        onChange={onChange}
        {...restProps}
      />
      {checked && (
        <Tooltip
        left={-5}
        top={30}
        orientation={orientation}
        message={message}
        />
      )}
    </div>
  )
}

export default AutoSignInCheckbox