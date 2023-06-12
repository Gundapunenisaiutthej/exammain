const count = 5;


export default function reducer(store = count, action){

    const{type, payload} = action;
     switch(type){
        case "INCREMENT":
            return count+payload;
        case "DECREMENT":
            return count-1;
        default:
            return count;
     }
}