const initialState = 
  [{
    name :"base",
    type : "directory",
    subdirectory : [
      {
        filename:"test.sweet"
      }, 
      {
        filename:"demo.sweet"
      },
      {
        filename:"led_banzzack.sweet"
      }
    ]
  },
  {
  name: "base2",
  type : "directory",
  subdirectory : [
    {
      filename:"test.sweet"
    },
    {
      filename:"demo.sweet"
    },
    {
      name: "subfolder",
      type : "directory",
      subdirectory : [
        {
        filename: "yeah.sweet"
        },
        {
          name: "subfolder",
          type : "directory",
          subdirectory : [
            {
            filename: "yeah.sweet"
            },
            {
              name :"base",
              type : "directory",
              subdirectory : [
                {
                  filename:"test.sweet"
                }, 
                {
                  filename:"demo.sweet"
                },
                {
                  filename:"led_banzzack.sweet"
                }
              ]
            },
            
          ]
        }
      ]
    }
  ]
}
]
export default function DirectoryReducer(state=initialState, action){
  switch(action.type){
    default:
      return state;
  }
}



