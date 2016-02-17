module.exports = {
    get: function (obj, key) {
        if (key.split('.').length === 1) {
            return (typeof obj == "undefined" || obj === null) ? obj : obj[key];
        } else {
            return key.split(".").reduce(function (o, x) {
                return (typeof o == "undefined" || o === null) ? o : o[x];
            }, obj);
        }
    },
    has: function (obj, key) {
        if (key.split('.').length === 1) {
            if ((typeof obj[key] != "object" && typeof obj[key] != 'string') || obj[key] === null || !key in obj) {
                return false
            } else {
                return true;
            }
        } else {
            return key.split(".").every(function (x) {
                if (typeof obj != "object" || obj === null || !x in obj)
                    return false;
                if (obj[x]) {
                    obj = obj[x];
                    return true;
                } else {
                    return false;
                }

            });
        }

    }
};