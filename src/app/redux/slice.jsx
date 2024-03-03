
// Actions and Reducers both in Slice

const { createSlice, nanoid, current } = require("@reduxjs/toolkit");

let state = localStorage.getItem("users") ? JSON.parse(localStorage.getItem("users")) : [];
const initialState = {
    users: state
}

export const fetchApiUsers = createAsyncThunk("fetchApiUsers", async () => {
    const result = await fetch('https://jsonplaceholder.typicode.com/users')
    return result.json()
})

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
    },
    extraReducers: (builder) => {
        builder.addCase(fetchApiUsers.fulfilled, (state, action)=>{
            state.isLoading = false,
                state.userApiData=action.payload
        })
    }
});

export const { addUser, removeUser } = Slice.actions
export default Slice.reducer