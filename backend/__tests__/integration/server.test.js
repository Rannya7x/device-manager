import { createServer } from 'http';
import server from '../../server.js';

describe('Server runtime', () => {
    let testServer;
    const TEST_PORT = 0;

    beforeAll((done) => {
        testServer = createServer(server);
        testServer.listen(TEST_PORT, done);
    });

    afterAll((done)=>{
        testServer.close(done);
    });

    it('should start the server and listen', () => {
        expect(testServer).toBeDefined();
        expect(testServer.listening).toBe(true);
    });

    it('should use the correct port', () => {
        const { port } = testServer.address();
        expect(port).toBeGreaterThan(0);
    });
});