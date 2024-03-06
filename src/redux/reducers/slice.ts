import { createSlice, } from "@reduxjs/toolkit";
import { json } from "../../utils/data"

interface Istate {
    queries: {
        id: number,
        queryTitle: string,
        comments:
        {
            id: number,
            query: string,
        }[],
        date: string
    }[]
}


const initialState: Istate = {
    queries: json
};

const formatDate = (date: Date) => {
    const monthNames = [
        "Jan",
        "Feb",
        "March",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
    ];
    const day = date.getDate();
    const year = date.getFullYear();
    const month = monthNames[date.getMonth()];
    const hours = ('0' + date.getHours()).slice(-2);
    const minutes = ('0' + date.getMinutes()).slice(-2);
    return `${month} ${day}, ${year} ${hours}: ${minutes}`;
};



const Slider = createSlice({
    name: 'helpCenter',
    initialState: initialState,
    reducers: {
        addNewQuery: (state, action) => {

            const data = {
                id: state.queries.length + 1,
                queryTitle: action.payload,
                comments: [],
                date: formatDate(new Date()),
            };
            state.queries.push(data);
        },
        replyToQuery: (state, action) => {

            const index = state.queries.findIndex((item) => item.id === action.payload.queryId);
            console.log(action.payload)
            const data = {
                id: state.queries[index].comments.length + 1,
                query: action.payload.queryReply
            }
            state.queries[index].comments.push(data);
        },
    },
})

export const { addNewQuery, replyToQuery } = Slider.actions
export default Slider.reducer;