import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';

// memes.title
// memes.url
// {
//     id: 1,
//     title: "",
//     url: ""
// }
const initialState = {
    cards: [],
    isLoading: false,
    error: null
};

export const __getCardsList = createAsyncThunk(
    // 첫번째 인자 : action value
    "getCardsList",
    // 두번째 인자 : 콜백함수 
    async (payload, thunkAPI) => {
        try {
            const data = await axios.get("http://localhost:3001/memes");
            console.log('data', data.data)
            //data.data호출 성공
            return thunkAPI.fulfillWithValue(data.data);
        } catch (error) {
            console.log(error);
            return thunkAPI.rejectWithValue(error);
        }

        //Pormise가 잘 처리되었다면: fullfilled, 아니라면 rejected  
        //위의 것을 처리하기 위해서 async와 await 추가 
    }
)

// export const __delcardsList = createAsyncThunk(
//     "delcardslist",
//     async (payload, thunkAPI) => {
//         try {
//             const delcarddata = await axios.delete("http://localhost:3001/memes/id");
//             console.log('delcarddata', delcarddata)
//             return thunkAPI.fulfillWithValue(delcarddata);
//         } catch (error) {
//             console.log(error);
//             return thunkAPI.rejectWithValue(error);
//         }

//     }
// )







// 수정, 삭제 ++ map 구현

// const counterSlice = createSlice({
//     name: "counter",
//     initialState,
//     reducers: {
//         addNumber: (state, action) => {
//             state.number = state.number + action.payload;
//         },

//         minusNumber: (state, action) => {
//             state.number = state.number - action.payload;
//         },
//     },
// });

export const cardsSlice = createSlice({
    name: "cards",
    initialState,
    reducers: {},
    extraReducers: {
        //pending, fulfilled, rejected 일때 작동할 리듀서 
        [__getCardsList.pending]: (state) => {
            state.isLoading = true; // 네트워크 요청이 시작되면 로딩상태를 true로 변경합니다.

        },
        [__getCardsList.fulfilled]: (state, action) => {
            state.isLoading = false; // 네트워크 요청이 끝났으니, false로 변경합니다.
            // state.cards = action.payload; // Store에 있는 todos에 서버에서 가져온 todos를 넣습니다.
            state.cards = action.payload

        },
        [__getCardsList.rejected]: (state, action) => {
            state.isLoading = false; // 에러가 발생했지만, 네트워크 요청이 끝났으니, false로 변경합니다.
            state.error = action.payload; // catch 된 error 객체를 state.error에 넣습니다.
        },
    }
});



export const { } = cardsSlice.actions;

export default cardsSlice.reducer;



