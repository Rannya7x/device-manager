import { app, server } from '../app.js';

describe('Server runtime', () => {
    afterAll((done)=>{
        server.close(done);
    });

    it('Should start the server and listen', () => {
        expect(server).toBeDefined();
        expect(server.listening).toBe(true);
    });

    it('Should use the correct port from enviroment variable', () => {
        const address = server.address();
        expect(address.port).toBe(process.env.PORT || 3000);
    });
});