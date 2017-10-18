// A higher order component that gets match params from react router,
import { withRouter } from 'react-router'
import { connect } from 'react-redux'

// TODO: support array of config
export default (Component, {routerParam = 'id', stateLocation, propName = 'state'} = {}) => {
  const mapStateToProps = (state, ownProps) => {
    const { match } = ownProps
    const id = match.params[routerParam]

    return {
      [propName]: state[stateLocation][id]
    }
  }

  const mergeProps = (stateProps, dispatchProps, ownProps) => {
    // don't pass down react router props
    const { match, ...rest } = ownProps

    return {
      ...rest,
      ...stateProps
    }
  }

  return withRouter(connect(mapStateToProps, null, mergeProps)(Component))
}
