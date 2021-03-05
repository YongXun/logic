import { SIGNIN , SIGNOUT } from './ActionTypes'

const defaultState = {
    isLogin:false,
    author:{
        id:0,
        name:'Magic作家',
        showreels:[],
        email:''
    },
    // 作品集列表
    showreels:[
        {
            authorID:0,
            showreelID:0,
            essays:[0,1,2]
        },
        {
            authorID:0,
            showreelID:1,
            essays:[3,4,5]
        }
    ],
    // 文章列表
    essays:[
        {
            essayID:0,
            authorName:'作者',
            authorID:0,
            title:'文章0',
            content:'<p>吃我洛阳铲吃我洛阳铲吃我洛阳铲吃我洛阳铲吃我洛阳铲吃我洛阳铲吃我洛阳铲吃我洛阳铲吃我洛阳铲吃我洛阳铲吃我洛阳铲吃我洛阳铲吃我洛阳铲吃我洛阳铲吃我洛阳铲吃我洛阳铲吃我洛阳铲吃我洛阳铲吃我洛阳铲吃我洛阳铲吃我洛阳铲吃我洛阳铲吃我洛阳铲吃我洛阳铲吃我洛阳铲吃我洛阳铲吃我洛阳铲吃我洛阳铲吃我洛阳铲吃我洛阳铲吃我洛阳铲吃我洛阳铲吃我洛阳铲吃我洛阳铲吃我洛阳铲吃我洛阳铲吃我洛阳铲吃我洛阳铲吃我洛阳铲吃我洛阳铲吃我洛阳铲吃我洛阳铲吃我洛阳铲吃我洛阳铲吃我洛阳铲吃我洛阳铲吃我洛阳铲吃我洛阳铲吃我洛阳铲吃我洛阳铲吃我洛阳铲吃我洛阳铲吃我洛阳铲吃我洛阳铲吃我洛阳铲吃我洛阳铲吃我洛阳铲吃我洛阳铲吃我洛阳铲luoyang</p>',
            comments:[
                {
                    isUser:false,
                    content:'写的真好！'
                },
                {
                    isUser:false,
                    content:'写的真好！'
                },
                {
                    isUser:false,
                    content:'写的真好！'
                },
                {
                    isUser:false,
                    content:'写的真好！'
                },
            ],
            love:0
        },
        {
            essayID:1,
            authorName:'作者',
            authorID:0,
            title:'文章0',
            content:'<p>HelloWorld</p>',
            comments:[
                {
                    isUser:false,
                    content:'写的真好！'
                },
                {
                    isUser:false,
                    content:'写的真好！'
                },
                {
                    isUser:false,
                    content:'写的真好！'
                },
                {
                    isUser:false,
                    content:'写的真好！'
                },
            ],
            love:0
        },
        {
            essayID:2,
            authorName:'作者',
            authorID:0,
            title:'文章0',
            content:'<p>HelloWorld</p>',
            comments:[
                {
                    isUser:false,
                    content:'写的真好！'
                },
                {
                    isUser:false,
                    content:'写的真好！'
                },
                {
                    isUser:false,
                    content:'写的真好！'
                },
                {
                    isUser:false,
                    content:'写的真好！'
                },
            ],
            love:0
        },
        {
            essayID:3,
            authorName:'作者',
            authorID:0,
            title:'文章0',
            content:'<p>HelloWorld</p>',
            comments:[
                {
                    isUser:false,
                    content:'写的真好！'
                },
                {
                    isUser:false,
                    content:'写的真好！'
                },
                {
                    isUser:false,
                    content:'写的真好！'
                },
                {
                    isUser:false,
                    content:'写的真好！'
                },
            ],
            love:0
        },
        {
            essayID:4,
            authorName:'作者',
            authorID:0,
            title:'文章0',
            content:'<p>HelloWorld</p>',
            comments:[
                {
                    isUser:false,
                    content:'写的真好！'
                },
                {
                    isUser:false,
                    content:'写的真好！'
                },
                {
                    isUser:false,
                    content:'写的真好！'
                },
                {
                    isUser:false,
                    content:'写的真好！'
                },
            ],
            love:0
        },
        {
            essayID:5,
            authorName:'作者',
            authorID:0,
            title:'文章0',
            content:'<p>HelloWorld</p>',
            comments:[
                {
                    isUser:false,
                    content:'写的真好！'
                },
                {
                    isUser:false,
                    content:'写的真好！'
                },
                {
                    isUser:false,
                    content:'写的真好！'
                },
                {
                    isUser:false,
                    content:'写的真好！'
                },
            ],
            love:0
        },
    ]
}



const reducer = (state = defaultState,action) => {

    console.log(action)

    let copyState = JSON.parse(JSON.stringify(state));

    switch (action.type) {
        case SIGNIN:
            console.log('登录，改变登录状态')
            copyState.isLogin = true;
            return copyState;
        case SIGNOUT:
            console.log('登出，改变登录状态')
            copyState.isLogin = false;
            return copyState;
        default:
            console.log('nothing')
            return state;
    }
}

export default reducer;
