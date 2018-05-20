const initialState = 
  [{
    name :"base",
    isFile: false,
    subdirectory : [
      {
        filename:"test.sweet",
        isFile: true
      }, 
      {
        filename:"demo.sweet",
        isFile: true
      },
      {
        filename:"led_banzzack.sweet",
        isFile: true
      }
    ]
  },
  {
  name: "base2",
  isFile: false,
  subdirectory : [
    {
      filename:"test.sweet",
      isFile: true
    },
    {
      filename:"demo.sweet",
      isFile: true
    },
    {
      name: "subfolder",
      isFile: false,
      subdirectory : [
        {
        filename: "yeah.sweet",
        isFile: true
        },
        {
          name: "subfolder2",
          isFile: false,
          subdirectory : [
            {
            filename: "yeah.sweet",
            isFile: true
            },
            {
              filename: "jest.sweet",
              isFile: true,
            }
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



