const Utility = (source: any, target: any) => Object.keys(source).reduce((difference, key) => {
    if ( target[key] === source[key] ) return difference;
    return {
        ... difference,
        [key]: source[key]
    };
}, {});

export default Utility;
