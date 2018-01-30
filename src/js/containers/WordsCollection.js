import { connect } from 'react-redux'
import { wordSwitch } from '../redux'
import Words from '../components/Words'

//console.log(Words)
/*
const getWords = (words, filter) => {
  switch (filter) {
    case 'SHOW_COMPLETED':
      return words.filter(t => t.completed)
    case 'SHOW_ACTIVE':
      return words.filter(t => !t.completed)
    case 'SHOW_ALL':
    default:
      return words
  }
}
*/
//state.words

const mapStateToProps = state => {
  return {words: state }
}

const mapDispatchToProps = dispatch => {
  return {
    onWordClick: id => {
      dispatch(wordSwitch(id))
    }
  }
}

const WordsCollection = connect(
  mapStateToProps,
  mapDispatchToProps
)(Words)

export default WordsCollection
