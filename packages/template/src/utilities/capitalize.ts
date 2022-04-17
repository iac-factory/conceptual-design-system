const Poly = () => {
    // @ts-ignore
    // eslint-disable-next-line no-extend-native
    String.prototype.capitalize = function () {
        return this.charAt(0).toUpperCase() + this.slice(1);
    };

    return String;
}

export default Poly;
