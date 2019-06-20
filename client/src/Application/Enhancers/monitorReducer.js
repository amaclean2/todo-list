const
    round = number => Math.round(number * 100) / 100,
    monitorReducerEnhancer = createStore => (
        reducer,
        initialState,
        enhancer
    ) => {
        const monitorReducer = (state, action) => {
            const
                start = performance.now(),
                newState = reducer(state, action),
                end = performance.now(),
                diff = round(end - start)

            console.log(`Reducer process time: ${diff}`)

            return newState
        }

        return createStore(monitorReducer, initialState, enhancer)
    }

    export default monitorReducerEnhancer