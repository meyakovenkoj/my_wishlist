import axios from 'axios'

const url = 'http://127.0.0.1:5000/'

export function getList(userId) {
  return (dispatch) => {
    axios
      .get(`${url}/api/list`, { params: { id: userId } })
      .then((res) => {
        if (Array.isArray(res.data.list)) {
          let list = res.data.list
          dispatch({ type: 'GET_LIST', list })
         }
      })
       .catch((err) => {
        alert(err.response.data.message)
      })
  }
}

export function postItem(form_data) {
  return axios
    .post(`${url}api/add`, form_data, {
      headers: {
        'Content-Type': 'application/json',
      },
    })
    .then((res) => {
      return true
    })
    .catch((err) => {
      alert(err)
      return false
    })
}

