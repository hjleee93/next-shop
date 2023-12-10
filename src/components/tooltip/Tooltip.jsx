import classNames from 'classnames'
import React from 'react'
import styles from './Tooltip.module.scss'

const Tooltip = ({
  top=0,
  right=0,
  bottom=0,
  left=0,
  color='',
  bgColor='',
  orientation='top',
  message,
  ...restProps
}) => {
  const style={
    top,
    right,
    bottom,
    left,
    color,
    backgroundColor: bgColor,
  }

  const setOrientationType = () => {
    switch(orientation) {
      case 'top':
        return styles.orientationTop
      case 'right':
        return styles.orientationRight
      case 'bottom':
        return styles.orientationBottom
      case 'left':
        return styles.orientationLeft
      default:
        throw new Error('Invalid orientation type')
    }
  }

  return (
    <span 
      role="tooltip" 
      style={style}
      className={classNames(styles.tooltip, setOrientationType(orientation))}
      {...restProps}>
        {message}</span>
  )
}

export default Tooltip