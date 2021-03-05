const baseURL = 'http://192.168.0.100:3000'

export { baseURL };

const API = {
    signin:{
        url:'signin',
        method:'POST'
    },
    signup:{
        url:'signup',
        method:'POST'
    },
    getCode:{
        url:'email/getCode',
        method:'POST'
    },
    checkEmail:{
        url:'email/check',
        method:'POST'
    },
    demo:{
        url:'demo',
        method:'POST'
    }
}

export default API;