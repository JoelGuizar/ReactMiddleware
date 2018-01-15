//redux middleware set up
//pulling off a dispatch from the argument
export default function({dispatch}){
  return next => action => {
    console.log(action);

    next(action);
  }
}
