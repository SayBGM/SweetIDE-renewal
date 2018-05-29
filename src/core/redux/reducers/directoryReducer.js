const initialState = 
  [{
    name :"base",
    isFile: false,
    subdirectory : [
      {
        filename:"test.sweet",
        isFile: true,
        code: '#include <stdio.h>\nint main (void)',
        highfolder: "base"
      }, 
      {
        filename:"demo.sweet",
        isFile: true,
        code: '#include <stdio.h>\nint main (void)',
        highfolder: "base",
      },
      {
        filename:"led_banzzack.sweet",
        isFile: true,
        code: '#include <stdio.h>\nint main (void)',
        highfolder: "base",
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
      highfolder: "base2",
    },
    {
      filename:"demo.sweet",
      isFile: true,
      code: '#include <stdio.h>\nint main (void)',
      highfolder: "base2",
    },
    {
      name: "subfolder",
      isFile: false,
      subdirectory : [
        {
        filename: "yeah.sweet",
        isFile: true,
        code: '#include <stdio.h>\nint main (void)',
        highfolder: "subfolder",
        },
        {
          name: "subfolder2",
          isFile: false,
          subdirectory : [
            {
            filename: "yeah.sweet",
            isFile: true,
            code: '#include <stdio.h>\nint main (void)',
            highfolder: "subfolder2",
            },
            {
              filename: "jest.sweet",
              isFile: true,
              code: '#include <stdio.h>\nint main (void)',
              highfolder: "subfolder2",
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



