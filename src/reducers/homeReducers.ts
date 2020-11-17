import { SET_PHOTOS } from '../actions/types';


type HomeStateModel = {
    photos: {
        id: string,
        title: string,
        year: string,
        imageUrl: string,
        description: string,
        tags: { id: string, name: string, tagColor: string }[],
    }[]
}

type ActionModel = {
    type: string;
    payload: HomeStateModel
}

const initialState:HomeStateModel = {
    photos: []
}

export default (state = initialState, action: ActionModel) => {
    switch (action.type) {
        case SET_PHOTOS:
            return { ...state, photos: action.payload.photos }
        default:
            return state;
    }
}