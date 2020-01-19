import React from 'react'
import PropTypes from 'prop-types'
import CashForm from "./forms/CashForm"

const CashList = ({ cash, total, timestamp, addCash }) => (
    <div>
      <ul>
        {cash.map(pack =>
            <li key={'pack' + pack.value}>
              <h3>{pack.value} uah</h3>
              <h5>Count: {pack.count}</h5>
              <h5>Sum: {pack.sum} uah</h5>
              <div>
                <button type="button" onClick={()=>{
                  addCash(pack)({ count: 10 })
                }}>
                  +10
                </button>
              </div>
              <CashForm form={'pack' + pack.value} onSubmit={addCash(pack)}/>
            </li>
        )}
      </ul>
      <div>
        <h5>Total: {total} uah</h5>
        <h5>Date: {timestamp}</h5>
      </div>
    </div>
)

CashList.propTypes = {
  cash: PropTypes.arrayOf(PropTypes.shape({
    value: PropTypes.number.isRequired,
    count: PropTypes.number.isRequired,
    sum: PropTypes.number.isRequired
  }).isRequired).isRequired,
}

export default CashList
