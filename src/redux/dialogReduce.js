let ADD_MESSAGE_STATE = 'ADD-MESSAGE-STATE';
let ON_MESSAGE_CHANGE = 'ON-MESSAGE-CHANGE';

let initState = {
    dialogsDate: [
        {id: 1, name: 'Bob', message: "HI!"},
        {id: 2, name: 'Mark', message: "Good!"},
        {
            id: 3,
            name: 'Vika',
            message: "Lorem ipsum dolor sit amet, consectetur adipisic aut autem dolorum eligendi fugit"
        },
        {id: 4, name: 'Dimych', message: "HI!"}
    ],
    newMessage : "Enter New Message"
}

const dialogReduce = (state = initState, action) => {

    switch (action.type) {
        case ON_MESSAGE_CHANGE:
            return {
                ...state,
                newMessage: action.body
            };
        case ADD_MESSAGE_STATE:
            let body = state.newMessage;
            return {
                ...state,
                newMessage:'',
                dialogsDate:[...state.dialogsDate, {id: 5, name: 'Mark', message:body}]
            };

        default:
            return state;
    }

}

export const addMessageActionCreator = () => ({type: ADD_MESSAGE_STATE});
export const updateMessageActionCreator = (text) => ({type: ON_MESSAGE_CHANGE, body: text});

export default dialogReduce;