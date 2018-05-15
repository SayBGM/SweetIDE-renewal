const initialState = {
  userName: 'SweetUser',
    groupInfo: {
        groupId: '1001',
        groupName: 'DSM'
    },
    planInfo: {
        minUploadLatency: 10
    }
}

export default function userReducer(state=initialState, action){
  switch(action.type){
    default:
      return state; 
  }
}