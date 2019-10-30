import articleReduce, {addPostActionCreator} from "./articleReduce";
import ReactDOM from "react-dom";
import App from "../App";

it('add', () => {
    let action = addPostActionCreator("First test");

    let state = {
        postData: [
            {id: 1, description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.', like: '1'},
            {
                id: 2,
                description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis, fugiat!',
                like: '2'
            },
            {id: 3, description: 'Lorem ipsum dolor sit amet!', like: '54'}
        ]
    }


    let newState = articleReduce(state, action);


    expect(newState.postData.length).toBe(4)

});

