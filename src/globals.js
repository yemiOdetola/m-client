const globals = {
    BASE_URL: 'http://localhost:5000/api',
    capitalize: function (str) {
        if (typeof str !== 'string') {
            return '';
        }
        return str.charAt(0).toUpperCase() + str.slice(1)
    },
    trimTitle: function(str) {
        if(typeof str !== 'string' && str.length > 70) {
            return;
        }
        let substr = str.substring(0, 70)
        return `${substr}...`
    },
    trimSubtitle: function(str) {
        if(typeof str !== 'string' && str.length > 136) {
            return;
        }
        let substr = str.substring(0, 136)
        return `${substr}...`
    },
    checkFavorite: function(arr, userId) {
        const favorited = arr.filter(user => user === userId);
        if(typeof favorited[0] !== 'undefined') {
            return true;
        } else {
            return false;
        }
    },
    converToLocal: function (tzDate) {
        let d = new Date(tzDate);
        const year = d.getFullYear();
        const month = d.getMonth();
        const day = d.getDate();
        return `${day}/${month + 1}/${year}`;
    },
    getLocalHours: function (dateVar) {
        let d = new Date(dateVar);
        const hours = d.getHours();
        const minutes = d.getMinutes();
        if (hours >= 11) {
            return `${hours}:${minutes} pm`;
        } else {
            return `${hours}:${minutes} am`;
        }
    }
}

export default globals;