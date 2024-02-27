// import { POST } from './route'
// import { type HandleUploadBody } from '@vercel/blob/client';
// import { createRequest } from 'node-mocks-http'


// beforeEach(() => {
//     jest.mock('@clerk/nextjs', () => ({
//         auth: jest.fn().mockImplementation(() => ({
//             userId: 'test',
//             orgRole: 'org:admin'
//         }))
//     }))
// })

// describe('POST', () => {
//     it('should POST if parameters are valid' , async () => {
//         const mockRequest = {
//             type: 'blob.generate-client-token',
//             payload: {
//                 pathname: '/test',
//                 callbackUrl: '/testCallBack',
//                 multipart: false,
//                 clientPayload: null
//             }
//         } as HandleUploadBody

//         const req = createRequest({
//             method: 'POST',            
//             url: '',
//             headers:{
// 				origin: 'http://localhost:3000',
// 				referer: 'http://localhost:3000'
// 			},
//             json: async () => mockRequest
//         })

//         const response = await POST(req as unknown as Request)

//         console.log(response)
//     })
// })