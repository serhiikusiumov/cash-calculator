const defaultCash = [
  {
    value: 500,
    count: 0,
    sum: 0
  },
  {
    value: 200,
    count: 0,
    sum: 0
  },
  {
    value: 100,
    count: 0,
    sum: 0
  },
  {
    value: 50,
    count: 0,
    sum: 0
  },
  {
    value: 20,
    count: 0,
    sum: 0
  },
  {
    value: 10,
    count: 0,
    sum: 0
  },
  {
    value: 5,
    count: 0,
    sum: 0
  },
  {
    value: 2,
    count: 0,
    sum: 0
  },
  {
    value: 1,
    count: 0,
    sum: 0
  }
]

const defaultSum = {
  total: 0,
  timestamp: new Date().getTime()
}

const cash = (state = { money: defaultCash, ...defaultSum }, action) => {
  switch (action.type) {
    case 'ADD_CASH':
      let total = 0;
      return {
        money: state.money.map((item, index) => {
          if (item.value === action.value) {
            const sum = action.value * action.count
            total += sum
            // Return a new object
            return {
              value: action.value,
              count: action.count,
              sum
            }
          }

          // Leave every other item unchanged
          total += item.value * item.count
          return item
        }),
        total,
        timestamp: new Date().getTime()
      }
    default:
      return state
  }
}

export default cash
