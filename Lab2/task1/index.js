if (window.localStorage) {

    window.localStorage = {

        //^ get item
        getItem: function (key) {
            let cookies = document.cookie.split('; ')
            for (let cookie of cookies) {
                let [cookieKey, cookieValue] = cookie.split('=')
                if (cookieKey == key) {
                    return cookieValue
                }
            }
            return null
        },

        //*.....................................................


        //^ set item
        setItem: function (key, value, expiryDays = 30) {
            let date = new Date()
            date.setDate(date.getDate() + expiryDays)
            document.cookie = key + "=" + value + ";expires=" + date.toUTCString()
        },

        //*.....................................................


        //^ remove item
        removeItem: function (key) {
            let date = new Date()
            date.setMonth(date.getMonth() - 1)
            document.cookie = key + "=;expires=" + date.toUTCString()
        },


        //*.....................................................

        //^ claer localstorage
        clear: function () {
            let cookies = document.cookie.split('; ')
            for (let cookie of cookies) {
                let key = cookie.split('=')[0];
                let date = new Date();
                date.setMonth(date.getMonth() - 1)
                document.cookie = key + "=;expires=" + date.toUTCString()
            }
        },

        //*.....................................................

        //^ search with index
        key: function (index) {
            let cookies = document.cookie.split('; ')
            if (index >= 0 && index < cookies.length) {
                return cookies[index].split('=')[0]
            }
            return null
        }
    }


}

