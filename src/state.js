let rerenderTree;

export const subscribe = (observer) => {
    rerenderTree = observer;
}

let state = {
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
}

window.state = state;

// console.log(window.state);

export let addPostState = () => {
   let newPost = {id: 4, description: state.article.newPostText, like: '0'}
    state.article.postData.push(newPost);
    state.article.newPostText = '';
    rerenderTree(state)
}


export let updatePostText = (newText) => {
    state.article.newPostText = newText;
    rerenderTree(state)
}


export let addMessageState = () => {
    let newM = {id: 5, name: 'Mark', message: state.dialogs.newMessage }
    state.dialogs.dialogsDate.push(newM);
    state.dialogs.newMessage = '';
    rerenderTree(state)
}

export let updateMessageText = (newText) => {
    state.dialogs.newMessage = newText;
    rerenderTree(state)
}

export default state;