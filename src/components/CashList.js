import React from 'react'
import PropTypes, { any } from 'prop-types'
import CashForm from "./forms/CashForm"
import "./CashList.css"

const CashList = ({ cash, total, timestamp, addCash }) => (
  <div className='CashList'>
    <h1>Total: {new Intl.NumberFormat().format(total)} </h1>
    {/* <h2>Date: {new Intl.DateTimeFormat().format(timestamp)}</h2> */}
    <ul>
      {cash.map(pack =>
        <li key={'pack' + pack.value}>
          <h2>${pack.value}</h2>
          {/* <h2>Sum: {new Intl.NumberFormat().format(pack.sum)}</h2> */}
          <h3>{pack.count}</h3>
          <div>
            {[10, 9, 8, 7, 6, 5, 4, 3, 2, 1].map(i =>
              <button
                // className={i === 10 ? 'button_red' : ''}
                type="button"
                onClick={() => {
                  addCash(pack)({ count: i })
                }}>
                {i}
              </button>
            )}
          </div>
          {/* <CashForm form={'pack' + pack.value} onSubmit={addCash(pack)}/> */}
        </li>
      )}
    </ul>
    <div className="CopyFormula">
    <p>=SUM({total})+N("Total: {new Intl.NumberFormat().format(total)} counted on: {new Intl.DateTimeFormat().format(timestamp)} (
        {cash.map(pack =>
      <span> {pack.value}: {pack.count}; </span>)}")
    </p>
      <button type="button"
        onClick={() => {
          navigator.clipboard.writeText(
            function () {
              let text = `=SUM(${total})+N("Total: ${new Intl.NumberFormat().format(total)} counted on: ${new Intl.DateTimeFormat().format(timestamp)} (`;
              cash.map(pack => {
                text += `${pack.value}: ${pack.count};`
              });
              text += '")';
              return text;
            }())
        }}
      >Copy</button>
    </div>
    </div >
)

CashList.propTypes = {
  cash: PropTypes.arrayOf(PropTypes.shape({
    value: PropTypes.number.isRequired,
    count: PropTypes.number.isRequired,
    sum: PropTypes.number.isRequired
  }).isRequired).isRequired,
}

export default CashList
