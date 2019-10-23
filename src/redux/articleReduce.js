let ADD_POST = 'ADD-POST';
let ON_POST_CHANGE = 'ON-POST-CHANGE';
let SET_USER_PROFILE = 'SET-USER-PROFILE';



let initState = {
    postData: [
        {id: 1, description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.', like: '1'},
        {
            id: 2,
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis, fugiat!',
            like: '2'
        },
        {id: 3, description: 'Lorem ipsum dolor sit amet!', like: '54'}
    ],
    newPostText: "add new post",
    profile:null
}

const articleReduce = (state = initState, action) => {
    switch (action.type) {

        case ON_POST_CHANGE : {
            return {
                ...state,
                newPostText: action.body
            };
        }

        case ADD_POST : {
            let body = state.newPostText
            return {
                ...state,
                newPostText:'',
                postData:[...state.postData, {id: 4, description: body, like: '0'}],
            }
        }
        case SET_USER_PROFILE: {
            return {
                ...state,
                profile: action.profile
            }
        }
        default:
            return state;
    }
}
export const addPostActionCreator = () => ({type: ADD_POST});
export const updateNewPostTextActionCreator = (text) => ({type: ON_POST_CHANGE, body: text});
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile});


export default articleReduce;