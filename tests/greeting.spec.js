const expect = require('chai').expect;

const { hello } = require('../routes/greeting');

let req = {
	body: {},
};

let res = {
    sendCalledWith: '',
    send: function(arg) {
        this.sendCalledWith = arg;
    }
};

describe('greetings route', () => {
    it('should error out if no name is provided', () => {
        hello(req, res);
        expect(res.sendCalledWith).to.contain('error');
    });
});
