
// Actions and Reducers both in Slice

const { createSlice, nanoid, current } = require("@reduxjs/toolkit");

const initialState = {
    users:JSON.parse(localStorage.getItem("users"))
}

const Slice = createSlice({
    name:"addUserSlice",
    initialState,
    reducers: {
        addUser: (state, action) => {
            // console.log(action)
            const data = {
                id: nanoid(),
                name: action.payload
            }
            
            state.users.push(data)
            const allUsers = JSON.stringify( current(state.users))
            localStorage.setItem("users",allUsers)
            // console.log("BBB",current(state.users))
        },
        removeUser: (state, action) => {
            // console.log(action)
            const data = state.users.filter((item) => {
              return  item.id !== action.payload
            })
            
            state.users = data
            
            localStorage.setItem("users",JSON.stringify(data))
        }
    }
});

export const { addUser, removeUser } = Slice.actions
export default Slice.reducer