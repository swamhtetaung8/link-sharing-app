import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  photo:null,
  name:null,
  email:null,
  links:[
    {
        id:1,
        added:false
    },
    {
        id:2,
        added:false
    },
    {
        id:3,
        added:false
    },
    {
        id:4,
        added:false
    },
    {
        id:5,
        added:false
    },
  ]
}

export const userInfoSlice = createSlice({
  name: 'userInfo',
  initialState,
  reducers: {
    addLink: (state, {payload}) => {
        const newLink = state.links.find(link=>link.added == false);
        newLink = {...newLink,payload}
        state.links = [...links,newLink]
    },
  },
})

// Action creators are generated for each case reducer function
export const {addLink } = userInfoSlice.actions

export default userInfoSlice.reducer