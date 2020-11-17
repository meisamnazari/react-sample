export const setParameter = (param: string, type: string, payload: any) => {
    return (dispatch: any) => {
        dispatch({
            type: type,
            payload: { [param]: payload }
        })
    }
}