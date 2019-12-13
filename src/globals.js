const globals = {
    capitalize: function (str) {
        if (typeof str !== 'string') {
            return '';
        }
        return str.charAt(0).toUpperCase() + str.slice(1)
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