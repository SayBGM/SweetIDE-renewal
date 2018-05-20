const initialState = 
  [{
    name :"base",
    isFile: false,
    subdirectory : [
      {
        filename:"test.sweet",
        isFile: true,
        code: '#include <stdio.h>\nint main (void)',
      }, 
      {
        filename:"demo.sweet",
        isFile: true,
        code: '#include <stdio.h>\nint main (void)',
      },
      {
        filename:"led_banzzack.sweet",
        isFile: true,
        code: '#include <stdio.h>\nint main (void)',
      }
    ]
  },
  {
  name: "base2",
  isFile: false,
  subdirectory : [
    {
      filename:"test.sweet",
      isFile: true,
      code: '#include <stdio.h>\nint main (void)',
    },
    {
      filename:"demo.sweet",
      isFile: true,
      code: '#include <stdio.h>\nint main (void)',
    },
    {
      name: "subfolder",
      isFile: false,
      subdirectory : [
        {
        filename: "yeah.sweet",
        isFile: true,
        code: '#include <stdio.h>\nint main (void)',
        },
        {
          name: "subfolder2",
          isFile: false,
          subdirectory : [
            {
            filename: "yeah.sweet",
            isFile: true,
            code: '#include <stdio.h>\nint main (void)',
            },
            {
              filename: "jest.sweet",
              isFile: true,
              code: '#include <stdio.h>\nint main (void)',
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



