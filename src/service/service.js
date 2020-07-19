export default class PictureService {

    constructor() {
        this._apiBase = 'https://picsum.photos';
    }
    async getResourse(url) {
        const res = await fetch(`${this._apiBase}${url}`);

        if (!res.ok) {
            throw new Error(`Could not fetch ${url}, status: ${res.status}`);
        }

        return await res.json();
    };
    getPictures() {
        return this.getResourse('/v2/list')
    }
}

// const pic = new PictureService();
// pic.getPictures()
//     .then(res => console.log(res));