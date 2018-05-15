const initialState = {
    name :"base",
    type : "directory",
    subdirectory : [
      {
        name:"test",
        type:".sweet"
      }, 
      {
        name:"demo",
        type:".sweet"
      },
      {
        name:"led_banzzack",
        type:".sweet"
      }
  ],
  name : "base2",
  type : "directory",
    subdirectory : [
    {
      name:"test",
      type:".sweet"
    },
    {
      name:"demo",
      type:".sweet"
    },
    {
        name: "subfolder",
        type : "directory",
        subdirectory : [
        {
          name: "yeah",
          type : ".sweet"
        }
        ]
    }
  ]
}

function DirectoryReducer(state=initialState, action){
  switch(action.type){
    default:
      return state;
  }
}



