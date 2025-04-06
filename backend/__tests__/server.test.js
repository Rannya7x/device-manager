import server from '../server.js';

describe('Server runtime', () => {
    afterAll((done)=>{
        server.close(done);
    });

    it('should start the server and listen', () => {
        expect(server).toBeDefined();
        expect(server.listening).toBe(true);
    });

    it('should use the correct port from enviroment variable', () => {
        const address = server.address();
        expect(address.port).toBe(process.env.PORT || 3000);
    });
});