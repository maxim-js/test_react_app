class PictureService {
    async getResourse(url) {
        const res = await fetch(url);

        if (!res.ok) {
            throw new Error(`Could not fetch ${url}, status: ${res.status}`);
        }

        return await res.json();
    };
    getPictures() {
        return this.getResourse('https://picsum.photos/v2/list')
    }
}

const pic = new PictureService();
pic.getPictures()
    .then(res => console.log(res));