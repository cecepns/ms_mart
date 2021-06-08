const Reducer = (state, actions) => {
    switch (actions.type) {
        case 'login':
            return {
                ...state,
                loggedIn: true,
                role: actions.role
            }
        default:
            return state
    }

}

export default Reducer