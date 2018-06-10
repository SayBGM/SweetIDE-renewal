const initialState = 
[
  {
    filename:"test.sweet",
    code: '#include <stdio.h>\nint main (void)'
  }, 
  {
    filename:"demo.sweet",
    code: '#include <stdio.h>\nint main (void)',
  },
  {
    filename:"led_banzzack.sweet",
    code: '#include <stdio.h>\nint main (void)',
  }
]
export default function DirectoryReducer(state=initialState, action){
  switch(action.type){
    default:
      return state;
  }
}



