/** auth 액션 타입 모음 */

//로그인 토큰을 store에 저장할 때 사용
export const SET_AUTH_TOKEN = 'SET_AUTH_TOKEN';

//로그인 토큰을 store에 저장할 때 사용
export const CLEAR_AUTH_TOKEN = 'CLEAR_AUTH_TOKEN';

/** project 액션 타입 모음 */

// API 서버의 프로젝트 정보 생성 API를 호출 했을 때 사용
export const CREATE_PROJECT_REQUEST = 'CREATE_PROJECT_REQUEST';

// 프로젝트 정보 생성 API 결과값을 성공적으로 받았을 때 사용
export const CREATE_PROJECT_SUCCESS = 'CREATE_PROJECT_SUCCESS';

// 프로젝트 정보 생성 API 호출에 실패하거나 결과값이 성공이 아닌 경우 사용
export const CREATE_PROJECT_FAILURE = 'CREATE_PROJECT_FAILURE';

// API 서버의 프로젝트 정보 읽기 API를 호출 했을 때 사용
export const READ_PROJECT_REQUEST = 'READ_PROJECT_REQUEST';

// 프로젝트 정보 읽기 API 결과값을 성공적으로 받았을 때 사용
export const READ_PROJECT_SUCCESS = 'READ_PROJECT_SUCCESS';

// 프로젝트 정보 읽기 API 호출에 실패하거나 결과값이 성공이 아닌 경우 사용
export const READ_PROJECT_FAILURE = 'READ_PROJECT_FAILURE';

// API 서버의 프로젝트 정보 수정 API를 호출 했을 때 사용
export const UPDATE_PROJECT_REQUEST = 'UPDATE_PROJECT_REQUEST';

// 프로젝트 정보 수정 API 결과값을 성공적으로 받았을 때 사용
export const UPDATE_PROJECT_SUCCESS = 'UPDATE_PROJECT_SUCCESS';

// 프로젝트 정보 수정 API 호출에 실패하거나 결과값이 성공이 아닌 경우 사용
export const UPDATE_PROJECT_FAILURE = 'UPDATE_PROJECT_FAILURE';

// API 서버의 프로젝트 정보 삭제 API를 호출 했을 때 사용
export const DELETE_PROJECT_REQUEST = 'DELETE_PROJECT_REQUEST';

// 프로젝트 정보 삭제 API 결과값을 성공적으로 받았을 때 사용
export const DELETE_PROJECT_SUCCESS = 'DELETE_PROJECT_SUCCESS';

// 프로젝트 정보 삭제 API 호출에 실패하거나 결과값이 성공이 아닌 경우 사용
export const DELETE_PROJECT_FAILURE = 'DELETE_PROJECT_FAILURE';

/** code editing Tab 액션 타입 모음 */

// TAB을 추가 할 때 사용
export const EDITING_TAB_ADD = 'EDITING_TAB_ADD';

// TAB을 제거할 때 사용
export const EDITING_TAB_REMOVE = 'EDITING_TAB_REMOVE';

// TAB을 바꿀 때 사용
export const EDITING_TAB_CHANGE = 'EDITING_TAB_CHANGE';

/** code 액션 타입 모음 */

//IDE 최초 로드시 코드미러에 프로젝트의 코드 데이터를 세팅하기 위해서 사용
export const INIT_SWEET_CODE = 'INIT_SWEET_CODE';

//코드미러의 코드 데이터가 변경되었을 경우 사용
export const CHANGE_SWEET_CODE = 'CHANGE_SWEET_CODE';

/** nativeClient 액션 타입 모음 */

//클라이언트의 코드 검증 API를 호출 했을 때 사용
export const VERIFY_CODE_REQUEST = 'VERIFY_CODE_REQUEST';

//코드 검증 API 결과값을 성공적으로 받았을 때 사용
export const VERIFY_CODE_SUCCESS = 'VERIFY_CODE_SUCCESS';

//코드 검증 API 호출에 실패하거나 결과값이 성공이 아닌 경우 사용
export const VERIFY_CODE_FAILURE = 'VERIFY_CODE_FAILURE';

//클라이언트의 보드 연결 확인 API를 호출 했을 때 사용
export const CHECK_BOARD_REQUEST = 'CHECK_BOARD_REQUEST';

//보드 연결 확인 API 결과값을 성공적으로 받았을 때 사용
export const CHECK_BOARD_SUCCESS = 'CHECK_BOARD_SUCCESS';

//보드 연결 확인 API 호출에 실패하거나 결과값이 성공이 아닌 경우 사용
export const CHECK_BOARD_FAILURE = 'CHECK_BOARD_FAILURE';

//클라이언트의 코드 업로드 API를 호출 했을 때 사용
export const UPLOAD_CODE_REQUEST = 'UPLOAD_CODE_REQUEST';

//코드 업로드 API 결과값을 성공적으로 받았을 때 사용
export const UPLOAD_CODE_SUCCESS = 'UPLOAD_CODE_SUCCESS';

//코드 업로드 API 호출에 실패하거나 결과값이 성공이 아닌 경우 사용
export const UPLOAD_CODE_FAILURE = 'UPLOAD_CODE_FAILURE';

//클라이언트의 시리얼 모니터 API를 호출 했을 때 사용
export const UPPLY_MONITOR_REQUEST = 'UPPLY_MONITOR_REQUEST';

//시리얼 모니터 API 결과값을 성공적으로 받았을 때 사용
export const UPPLY_MONITOR_SUCCESS = 'UPPLY_MONITOR_SUCCESS';

//시리얼 모니터 API 호출에 실패하거나 결과값이 성공이 아닌 경우 사용
export const UPPLY_MONITOR_FAILURE = 'UPPLY_MONITOR_FAILURE';

//개인 프로젝트를 init
export const PERSONAL_PROJECT_LIST_REQUEST = 'PERSONAL_PROJECT_LIST_REQUEST';

export const PERSONAL_PROJECT_LIST_SUCCESS = 'PERSONAL_PROJECT_LIST_SUCCESS';

export const PERSONAL_PROJECT_LIST_FAILURE = 'PERSONAL_PROJECT_LIST_FAILURE';
