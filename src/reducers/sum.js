const defaultSum = {
  total: 0,
  timestamp: new Date().getTime()
}
const cash = (state = defaultSum, action) => {
  switch (action.type) {
    case 'CALCULATE_TOTAL':
      return state.map((item, index) => {
        if (item.value === action.value) {
          // Return a new object
          return {
            value: action.value,
            count: action.count,
            sum: action.value * action.count
          }
        }

        // Leave every other item unchanged
        return item
      })
    default:
      return state
  }
}

export default cash
