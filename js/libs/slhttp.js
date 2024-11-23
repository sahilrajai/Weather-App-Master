class slHTTP {
    async get(url) {
        const self = this;
        const res = await fetch(url);
        const resData = await this.responseHelper(res);
        return resData;
    }

    async post(url, data, headers) {
        const requestInfo = {
            method: 'POST',
            headers,
            body: JSON.stringify(data)
        }
        const res = await fetch(url, requestInfo);
        const resData = await this.responseHelper(res);
        return resData; 
    }

    async put(url, data, headers) {
        const requestInfo = {
            method: 'PUT',
            headers,
            body: JSON.stringify(data)
        }
        const res = await fetch(url, requestInfo);
        const resData = await this.responseHelper(res);
        return resData; 
    }

    async delete(url, headers) {

        const requestInfo = {
            method: 'DELETE',
            headers,
        }
        const res = await fetch(url, requestInfo);
        const resData = await this.responseHelper(res);
        return {status: 200, messge: 'Resources Deleted!!'};
    }

    async responseHelper(res) {
        if(res.ok) 
            return res.json();
        throw new Error(`Some Issue: ${res.status} ${res.status}`)
    }
}
                // put(url, data, headers) {
                //     const self = this;
                //     return new Promise(function(resolve, reject) {
                //         fetch(url, {
                //             method: 'PUT',
                //             headers,
                //             body: JSON.stringify(data)
                //         }) 
                //         .then((res) => self.responseHelper())
                //         .then((data) => resolve(data))
                //         .catch((err) => reject(err));
                //     })
                // }