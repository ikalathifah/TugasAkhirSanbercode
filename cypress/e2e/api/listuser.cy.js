/// <reference types="cypress"/>
 
describe('Reqres API GET',() => {
    it('GET API List User',() => {
       cy.request('GET','https://reqres.in/api/users?page=2').then((resp) => {
        expect(resp.status).to.eq(200)
        expect(resp.body).to.not.be.null
       })
    });
    it('GET API Single User',() => {
        cy.request('GET','https://reqres.in/api/users/2').then((resp) => {
         expect(resp.status).to.eq(200)
         expect(resp.body).to.not.be.null
        })
     });
    it('Testing API Single User not Found',()=> {
        cy.request({method: 'GET',url: 'https://reqres.in/api/users/23',failOnStatusCode:false})
        .then((response)=> {
            expect(response.status).to.eq(404)
            expect(response.body).to.not.be.null
        })
     });
     it('GET API List <Resource>',() => {
        cy.request('GET','https://reqres.in/api/unknown').then((resp) => {
         expect(resp.status).to.eq(200)
         expect(resp.body).to.not.be.null
        })
     });
});