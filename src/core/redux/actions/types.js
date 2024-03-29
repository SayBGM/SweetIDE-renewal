/** auth 액션 타입 모음 */

//로그인 토큰을 store에 저장할 때 사용
export const SET_AUTH_TOKEN = 'SET_AUTH_TOKEN';

//로그인 토큰을 store에 저장할 때 사용
export const CLEAR_AUTH_TOKEN = 'CLEAR_AUTH_TOKEN';

/** project Directory 액션 타입 모음 */

// 디렉토리에 파일을 추가할 때 사용
export const DIRECTORY_FILE_ADD = 'DIRECTORY_FILE_ADD';

// 디렉토리 파일을 삭제할 때 사용
export const DIRECTORY_FILE_REMOVE = 'DIRECTORY_FILE_REMOVE';

// 파일 저장할 때 사용
export const DIRECTORY_CODE_CHANGE = 'DIRECTORY_CODE_CHANGE';

/** Project 관리 액션 타입 모음 */

// Port 설정
export const CHANGE_PORT_NUMBER = 'CHANGE_PORT_NUMBER';

// PortList 가지고 올 때 사용
export const GET_PORT_LIST = 'GET_PORT_LIST';

/** code editing Tab 액션 타입 모음 */

// TAB을 추가 할 때 사용
export const EDITING_TAB_ADD = 'EDITING_TAB_ADD';

// TAB을 제거할 때 사용
export const EDITING_TAB_REMOVE = 'EDITING_TAB_REMOVE';

// TAB을 바꿀 때 사용
export const EDITING_TAB_CHANGE = 'EDITING_TAB_CHANGE';

/** code 액션 타입 모음 */

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

export const SELECT_PERSONAL_PROJECT = 'SELECT_PERSONAL_PROJECT';

//개인 프로젝트를 init
export const PERSONAL_PROJECT_LIST_REQUEST = 'PERSONAL_PROJECT_LIST_REQUEST';

export const PERSONAL_PROJECT_LIST_SUCCESS = 'PERSONAL_PROJECT_LIST_SUCCESS';

export const PERSONAL_PROJECT_LIST_FAILURE = 'PERSONAL_PROJECT_LIST_FAILURE';

//정보수정 
export const MODIFY_USER_INFO_REQUEST = 'MODIFY_USER_INFO_REQUEST';

export const MODIFY_USER_INFO_SUCCESS = 'MODIFY_USER_INFO_SUCCESS';

export const MODIFY_USER_INFO_FAILURE = 'MODIFY_USER_INFO_FAILURE';

//프로젝트 생성 - 프로젝트 생성 과정

export const SELECT_PROJECT_PLATFORM = 'SELECT_PROJECT_PLATFORM';

export const SELECT_PROJECT_PROGRAMMING_MODE = 'SELECT_PROJECT_PROGRAMMING_MODE';

export const SELECT_PROJECT_DIGITAL_MOUDULES = 'SELECT_PROJECT_DIGITAL_MOUDULES';

export const SELECT_PROJECT_ANALOG_MOUDULES = 'SELECT_PROJECT_ANALOG_MOUDULES';


//프로젝트 생성 - 아날로그 디지털 모튤 초기화

export const FETCH_DIGITAL_MODULES_REQUEST = 'FETCH_DIGITAL_MODULES_REQUEST';

export const FETCH_DIGITAL_MODULES_SUCCESS = 'FETCH_DIGITAL_MODULES_SUCCESS';

export const FETCH_DIGITAL_MODULES_FAILURE = 'FETCH_DIGITAL_MODULES_FAILURE';

export const FETCH_ANALOG_MODULES_REQUEST = 'FETCH_ANALOG_MODULES_REQUEST';

export const FETCH_ANALOG_MODULES_SUCCESS = 'FETCH_DIGITAL_MODULES_REQUEST';

export const FETCH_ANALOG_MODULES_FAILURE = 'FETCH_ANALOG_MODULES_FAILURE';

export const CREATE_PROJECT_REQUEST = 'CREATE_PROJECT_REQUEST';

export const CREATE_PROJECT_SUCCESS = 'CREATE_PROJECT_SUCCESS';

export const CREATE_PROJECT_FAILURE = 'CREATE_PROJECT_FAILURE';