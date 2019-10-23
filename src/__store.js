import articleReduce from "./redux/articleReduce";
import dialogReduce from "./redux/dialogReduce";
import asideReduce from "./redux/asideReduce";


let __store = {
    _state:{
        article: {
            postData: [
                {id: 1, description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.', like: '1'},
                {
                    id: 2,
                    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis, fugiat!',
                    like: '2'
                },
                {id: 3, description: 'Lorem ipsum dolor sit amet!', like: '54'}
            ],
            newPostText: "add new post"
        },
        dialogs: {
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
        },
        aside: {
            friends: [
                {
                    name: 'Bob',
                    photo: '//apnacomplexdocs.s3-ap-southeast-1.amazonaws.com/user_content/user_profile_photo/default_profile_image.png'
                },
                {
                    name: 'Sveta',
                    photo: '//apnacomplexdocs.s3-ap-southeast-1.amazonaws.com/user_content/user_profile_photo/default_profile_image.png'
                },
                {
                    name: 'Vova',
                    photo: '//apnacomplexdocs.s3-ap-southeast-1.amazonaws.com/user_content/user_profile_photo/default_profile_image.png'
                }
            ]
        }
    },
    getState(){
        return this._state;
    },
    rerenderTree(){},
    // addPostState(){
    //
    // },
    // updatePostText(newText) {
    //
    // },
    // addMessageState() {
    //     let newM = {id: 5, name: 'Mark', message: this._state.dialogs.newMessage }
    //     this._state.dialogs.dialogsDate.push(newM);
    //     this._state.dialogs.newMessage = '';
    //     this.rerenderTree(this._state)
    // },

    // updateMessageText(newText){
    //     this._state.dialogs.newMessage = newText;
    //     this.rerenderTree(this._state)
    // },

    subscribe(observer){
        this.rerenderTree = observer;
    },
    dispatch(action){

        this._state.article =  articleReduce(this._state.article, action);
        this._state.dialogs = dialogReduce(this._state.dialogs, action);
        this._state.aside = asideReduce(this._state.aside, action);

        this.rerenderTree(this._state);

    }
}

// window.__store = __store;

export default __store;