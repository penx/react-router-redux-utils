# React Router Redux Utils

## withMatchState

Loads data from the redux state based upon matched properties from React Router and passed configuration properties.

### Example usage:

```
import { withMatchState } from 'react-router-redux-utils'
import Example from '../components'

export default withMatchState(Example, {
  routerParam: 'exampleId',
  stateLocation: 'example',
  propName: 'exampleProp'
})
```

This will look for a a matched parameter in react router called 'exampleId', then get data from the redux state at `state.example[exampleId]` and pass it to the Example component in a prop called exampleProp.
