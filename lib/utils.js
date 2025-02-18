const NodeRSA =  require("node-rsa");

// get
exports.get = function(obj, dirtyPath, defaultValue) {
    if (obj === undefined || obj === null) return defaultValue;
    const path = typeof dirtyPath === 'string' ? dirtyPath.split('.') : dirtyPath;
    let objLink = obj;
    if (Array.isArray(path) && path.length) {
        for (let i = 0; i < path.length - 1; i++) {
            const currentVal = objLink[path[i]];
            if (currentVal !== undefined && currentVal !== null) {
                objLink = currentVal;
            } else {
                return defaultValue;
            }
        }
        const value = objLink[path[path.length - 1]];
        return value === undefined || value === null ? defaultValue : value;
    }
    return defaultValue;
}

exports.keyByValue = function(obj, value) {
    return Object.keys(obj).find(key => obj[key] === value);
}

exports.keyByValueIncludes = function(obj, value) {
    return Object.keys(obj).find(key => value.includes(obj[key]));
}

exports.convertContent = function(eventType) {
    if(!eventType) return "";

    const colonSplit = eventType.split(":");

    if(colonSplit.length >= 2) {
        let colonSplit1 = colonSplit[1];
        if(colonSplit1.startsWith(" ")) {
            colonSplit1 = colonSplit1.substring(1);
        }

        const whiteSpaceSplit = colonSplit1.split(" ");
        return whiteSpaceSplit[0] || "";
    } else {
        return "";
    }
}

exports.getNewRSAPrivateKey = () => {
    const key = new NodeRSA({ b: 1024 });
    key.setOptions({
        encryptionScheme: "pkcs1"
    });
    return key;
}