describe('API test 2', () => {



    it('Request - GET then+expect', () => {

        cy.request('GET', 'https://jsonplaceholder.typicode.com/users')
            .then((response) => {
                const body = response.body;
                expect(body.length).to.be.eq(10);
                expect(body[0].name).to.eq('Leanne Graham');
            })
    })

    it('Request - GET 2 wrap+should', () => {
        cy.request('GET', 'https://jsonplaceholder.typicode.com/users')
            .then((response) => {
                cy.wrap(response.body).should('have.length', 10);
            })

    })

    it('Request - GET 3 its', () => {
        cy.request('GET', 'https://jsonplaceholder.typicode.com/users').its('body').should('have.length', 10);
        cy.request('GET', 'https://jsonplaceholder.typicode.com/users').its('status').should('eq', 200);

    })


    it('Request - POST', () => {
        const newPost = {
            title: 'foo',
            body: 'bar',
            userId: 1,
        };
        cy.request('POST', 'https://jsonplaceholder.typicode.com/posts', newPost)
            .as('postResponse')
            .its('body.id').should('eq', 101);

        cy.get('@postResponse').its('body.title').should('eq', newPost.title);
        cy.get('@postResponse').its('body.body').should('eq', newPost.body);

    })

})
