class PictureService {

    constructor() {
        this._apiBase = '';
    }
    async getResourse(url) {
        const res = await fetch('https://picsum.photos/v2/list');
        return await res.json();
    };
    getPictures() {
        return this.getResourse('ttps://picsum.photos/v2/list')
    }
}

const pic = new PictureService();
pic.getPictures()
    .then(res => console.log(res)
    );
