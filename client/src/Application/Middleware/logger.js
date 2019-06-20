const logger = store => next => action => {
    console.group(action.type)
    console.info("Dispatching", action)
    console.log("next state", store.getState())
    console.groupEnd()

    const result = next(action)

    return result
}

export default logger