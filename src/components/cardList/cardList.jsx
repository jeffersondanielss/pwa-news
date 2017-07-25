import React, { Component } from 'react'
import axios from 'axios'
import Card from 'scripts/card/card'
import Loader from 'react-loader'
import styles from './cardList.css'

export default class CardList extends Component {

  constructor(props) {
    super(props)

    this.state = { data: [], loaded: false }

  }

  componentWillMount() {
    const options = {
      url: 'https://newsapi.org/v1/',
      source: 'articles?source=the-next-web&',
      short: 'sortBy=latest&',
      key: 'apiKey=9f84cd71ead94979a5a3f5d6dfee0034'
    }

    const URL = Object.values(options).join().replace(/,/g, '');
    
    axios(URL)
      .then( response => {
        console.log(response.data.articles)
        this.setState({ ...this.state, data: response.data.articles, loaded: true })

      }).catch( ex  => {
        console.log('parsing failed', ex)
      })
  }

  render() {
    const options = { color: '#FFC10D' }

    return (
      <div id="main" className={ styles.grid }>
        <Loader options={ options } loaded={ this.state.loaded } />
        {
          this.state.data.map(
            article => <Card data={ article } key={ article.publishedAt } />
          )
        }
      </div>
    )
  }
}