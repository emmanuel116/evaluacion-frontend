const initialState = {
  topbar: { title: '', menu: { Menu: '/' } },
  loggedIn:
    sessionStorage.getItem('loggedIn') === 'true' ? true : false,
  wraper: false,
  user: {
    user: sessionStorage.getItem('user'),
  },
  themeApp: {
    theme: 'light',
    lightTheme: {},
    darkTheme: {},
  },
  employees: [],
};

export default function reducerApp(
  state = initialState,
  action: { type: string; payload: any }
) {
  switch (action.type) {
    case 'SET_TITLE':
      return {
        ...state,
        topbar: action.payload,
      };
    case 'SET_THEME':
      return {
        ...state,
        themeApp: action.payload,
      };
    case 'LOGIN_REQUEST':
      return {
        ...state,
        loggedIn: true,
      };
    case 'LOG_OUT':
      return {
        ...state,
        loggedIn: false,
      };

    case 'GET_EMPLOYEES':
      return {
        ...state,
        employees: action.payload.employees,
      };
    case 'CREATE_EMPLOYEE':
      return {
        ...state,
        employees: [
          ...state.employees,
          { ...action.payload, id: state.employees.length + 1 },
        ],
      };
    default:
      return state;
  }
}
