export const reducer=(state,action)=>{
    if(action.type==="REMOVE_ITEM"){
        return{
            ...state,
            item: state.item.filter((curElem)=>{
                return action.payload!==curElem.id;
            })
        };
    };

    if(action.type==="INCREASE"){
        const updatedIn=state.item.map((curElem)=>{
            if(curElem.id===action.payload){
                return {...curElem,quantity:curElem.quantity+1};
            }
            return curElem;
        });
        return {...state,item:updatedIn}
    };

    if(action.type==="DECREASE"){
        const updatedDe=state.item.map((curElem)=>{
            if(curElem.id===action.payload){
                return {...curElem,quantity:curElem.quantity-1};
            }
            return curElem;
        }).filter((curElem)=> curElem.quantity!==0);
        return {...state,item:updatedDe};
    };

    if(action.type==="GET_TOTAL"){
        let {totalItem,totalAmount}=state.item.reduce(
            (accum,curVal)=>{
                let {price,quantity}=curVal;
                const updatedAmount=price*quantity;
                accum.totalAmount+=updatedAmount;
                accum.totalItem+=quantity;
                return accum;
            },
            {
            totalAmount:0,
            totalItem:0
            } 
        );
        return {...state,totalItem,totalAmount};
    }
    return state;
};