import Client from './Client';

class ClassifierApi {
    constructor() {
        this.client = new Client("/classifier")
    }

    getAllByPage({page = 0}) {
        return this.client.get({
            query: {
                page
            }
        });
    }

    getByVersionOrActive({version}) {
        return this.client.get({
            path: `/version/${version}`
        });
    }

    getById({id}) {
        return this.client.get({
            path: `/${id}`
        });
    }

    createNew({payload}) {
        return this.client.post({
            body: payload
        });
    }

    activeClassifier({id}) {
        return this.client.patch({
            path: `/${id}/active`
        })
    }

    updateClassifier({payload}) {
        return this.client.patch({
            body: payload
        });
    }

    deleteById({id}) {
        return this.client.delete({
            path: `/${id}`
        });
    }

}

const classifiersApi = new ClassifierApi();
export default classifiersApi;