import { connect } from 'react-redux'
import { wordSwitch } from '../redux'
import Words from '../components/Words'

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
