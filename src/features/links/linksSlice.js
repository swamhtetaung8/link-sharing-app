import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  links:[]
}

export const linkSlice = createSlice({
  name: 'links',
  initialState,
  reducers: {
    addLink: (state, {payload}) => {
        state.links = [...links,payload]
    },
  },
})

// Action creators are generated for each case reducer function
export const {addLink } = linkSlice.actions

export default linkSlice.reducer