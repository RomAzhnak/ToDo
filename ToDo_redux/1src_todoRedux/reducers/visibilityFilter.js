
import { SET_VISIBILITY_FILTER } from '../constants/actionConstants'
import { SHOW_ALL } from '../constants/todoFilters'

export default function visibilityFilter(state = SHOW_ALL, action) {
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return action.filter
    default:
      return state
  }
}
