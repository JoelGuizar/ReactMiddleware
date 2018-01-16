//redux middleware set up always, place inside the '{}' after action function
//pulling off a dispatch from the argument

//dispatch is a function, makes it rerun the cycle
export default function({dispatch}){
  //returns a function with next as an argument,
  //and that function returns a function with a next
  return next => action => {
    //if action doesnt have a payload, or the payload doesnt have a
    //.then property, we dont care about it, send it on

    //checks for payload, or checks if it has already a 'then' to resolve the promise
    //here we target the actions that we want, if it's not one we like
    //it'll get caught here and we caught next
    if (!action.payload || !action.payload.then){
      return next(action)
    }

    //things to do: make sure the action's promise resolves
    action.payload
      .then(response => {
        //once promise resolve, then we want to craft a new action in this middleware
        //...action = take all data/properties that the action contains but
        //with a payload of response
        //creating an action with the old type, but replacing the promise with the response
        const newAction = {...action, payload:response}

        //dispatch means to send it through EVERYTHING again
        dispatch(newAction);
      });

    next(action);
  }
}
