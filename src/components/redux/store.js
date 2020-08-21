import {ADD_POST, SEND_MESSAGE, UPDATE_NEW_MESSAGE_BODY, UPDATE_NEW_POST_TEXT} from "../../types"

export let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'It`s my first post', likesCount: 3},
                {id: 2, message: 'The day was good', likesCount: 14},
                {id: 3, message: 'Thanks React!!!', likesCount: 1}
            ],
            newPostText: 'Social Network Lega'
        },
        dialogsPage: {
            dialogs: [
                {id: 1, name: 'Vovan'},
                {id: 2, name: 'Dima'},
                {id: 3, name: 'Samurai'},
                {id: 4, name: 'Maria'},
                {id: 5, name: 'Mark'},
                {id: 6, name: 'Sophia'},
                {id: 7, name: 'Lily'}
            ],
            messages: [
                {id: 1, message: 'How are you?'},
                {id: 2, message: 'I like React and u??'},
                {id: 3, message: 'Samurai yoy'},
                {id: 4, message: 'My life my rules'}
            ],
            newMessageBody: ''
        }
    },
    getState(){
        return this._state
    },
    _callSubscriber() {
        console.log('state changed')
    },

    subscribe(observer) {
        this._callSubscriber = observer
    },
    dispatch(action) {
       if(action.type === ADD_POST) {
           let newPost = {
               id: Date.now(),
               message: this._state.profilePage.newPostText,
               likesCount: 0
           }
           this._state.profilePage.posts.push(newPost)
           this._state.profilePage.newPostText = ''
           this._callSubscriber(this._state)
       } else if (action.type === UPDATE_NEW_POST_TEXT){
           this._state.profilePage.newPostText = action.text
           this._callSubscriber(this._state)
       } else if (action.type === UPDATE_NEW_MESSAGE_BODY){
           this._state.dialogsPage.newMessageBody = action.body
           this._callSubscriber(this._state)
       } else if (action.type === SEND_MESSAGE){
           let body = this._state.dialogsPage.newMessageBody
           this._state.dialogsPage.newMessageBody = ''
           this._state.dialogsPage.messages.push({id: Date.now(), message: body},)
           this._callSubscriber(this._state)
       }
    }
}

export const addPostActionCreator = () => {
    return {
        type: ADD_POST
    }
}

export const updateNewPostTextActionCreator = (text) => {
    return {
        type: UPDATE_NEW_POST_TEXT,
        text
    }
}

export const sendMessageCreator = () => {
    return {
        type: SEND_MESSAGE
    }
}

export const updateNewMessageBodyCreator = (body) => {
    return {
        type: UPDATE_NEW_MESSAGE_BODY,
        body
    }
}

window.store = store

