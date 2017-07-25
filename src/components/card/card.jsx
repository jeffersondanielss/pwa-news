import React from 'react'
import styles from './card.css'

export default props => (
  <div className={styles.card} title={ props.data.type }>
    <a href={ props.data.url } target="_blank">
      <img src={ props.data.urlToImage } className={styles.image} />
    </a>

    <span className={ styles.site }> { props.data.author } </span>

    <a href={ props.data.url } target="_blank">
      <p className={ styles.title } title={ props.data.title }>{ props.data.description }</p>
    </a>
  </div>
)