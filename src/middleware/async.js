//redux middleware set up always, place inside the '{}' after action function
//pulling off a dispatch from the argument
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
    console.log(action);

    next(action);
  }
}
