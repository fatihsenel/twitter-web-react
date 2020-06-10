import React from 'react'
import styles from './photo.module.css'
import cn from 'classnames'

function Photo({
  src = 'https://pbs.twimg.com/profile_images/1010555313651666944/g0_I-PwR_400x400.jpg',
  alt
}) {
  return (
    <div className={cn([styles.photo])}>
      <img className={styles.img} src={src} alt={alt} />
    </div>
  )
}
export default Photo
