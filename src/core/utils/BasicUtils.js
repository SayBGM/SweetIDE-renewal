
export default class BasicUtils {

    static getUnixTimeStamp() {
        return Math.floor(new Date().getTime() / 1000);
    }

}
