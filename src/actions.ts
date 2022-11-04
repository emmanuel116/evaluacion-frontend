import axios from 'axios';
import Swal from 'sweetalert2';

export const loginRequest = (payload: any) => ({
  type: 'LOGIN_REQUEST',
  payload,
});

export const logOut = () => ({
  type: 'LOG_OUT',
});

export const setTitle = (payload: any) => ({
  type: 'SET_TITLE',
  payload,
});

export const setThemeApp = (payload: any) => ({
  type: 'SET_THEME',
  payload,
});

export const setUser =
  (payload: any, redirectionUrl: string) =>
  async (dispatch: Function) => {
    const { user, password } = payload;
    if (
      user === process.env.REACT_APP_USER &&
      password === process.env.REACT_APP_PASSWORD
    ) {
      sessionStorage.setItem('loggedIn', 'true');
      sessionStorage.setItem('user', user);
      window.location.href = redirectionUrl;
      dispatch({
        type: 'LOGIN_REQUEST',
      });
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Usuario o contraseña incorrectos',
      });
    }
  };

//CRUD

export const getEmployees = () => async (dispatch: Function) => {
  try {
    const res = await axios({
      url: `${process.env.REACT_APP_API}`,
      method: 'get',
    });
    dispatch({
      type: 'GET_EMPLOYEES',
      payload: res.data.data,
    });
  } catch (error) {
    console.log(error);
  }
};

export const createEmploye =
  (data: { [k: string]: FormDataEntryValue }) =>
  async (dispatch: Function) => {
    try {
      const res = await axios({
        url: `${process.env.REACT_APP_API}`,
        method: 'post',
        data: data,
      });
      dispatch({
        type: 'CREATE_EMPLOYEE',
        payload: data,
      });
      const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 1500,
      });
      Toast.fire({
        icon: 'success',
        title: 'Se guardo correctamente',
      });
      return res;
    } catch (error) {
      Swal.fire({
        title: 'Error!',
        text: 'Ah ocurrido un error',
        icon: 'error',
        confirmButtonColor: '#3085d6',
        confirmButtonText: 'Aceptar',
      });
    }
  };
