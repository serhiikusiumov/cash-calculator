import { connect } from 'react-redux'
import CashList from '../components/CashList'
import { addCash } from '../actions'

const mapStateToProps = state => ({
  cash: state.cash.money,
  total: state.cash.total,
  timestamp: state.cash.timestamp
})

const mapDispatchToProps = dispatch => ({
  addCash: pack => values => {
    const { value, count: originalCount } = pack
    const { count } = values
    const newCount = parseInt(originalCount) + parseInt(count)
    return dispatch(addCash({ count: newCount, value }))
  }
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CashList)
