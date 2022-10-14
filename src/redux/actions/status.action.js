export const FETCH_START = 'FETCH_START'
export const FETCH_END = 'FETCH_END'
export const FETCH_ERROR = 'FETCH_ERROR'

export const startFetch = () => {
    return {
        type: FETCH_START
    }
}

export const endFetch = () => {
    return {
        type: FETCH_END
    }
}

export const errorFetch = (error) => {
    return {
        type: FETCH_ERROR,
        payload: error
    }
}