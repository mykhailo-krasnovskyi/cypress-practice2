describe('Auth', () => {
    let sid;
    before(() => {

        const userCreds = {
            email: 'michael.krasnovskyi+testUser1@gmail.com',
            password: 'ZSgeVQhuU3qkvlG',
            remember: true
        }
        cy.request('POST', 'https://qauto.forstudy.space/api/auth/signin', userCreds).then((response) => {
            const headers = response.headers;
            const cookie = headers['set-cookie'][1];
            const cookieArray = cookie.split('\n');
            for (const cookie of cookieArray) {
                if (cookie.trim().startsWith('sid=')) {
                    sid = (cookie.trim().split('=')[1]).split(';')[0];
                    break;
                }
            }
        })
    })

    it('Get cookies', () => {
        const userCreds = {
            email: 'michael.krasnovskyi+testUser1@gmail.com',
            password: 'ZSgeVQhuU3qkvlG',
            remember: true
        }

        cy.request('POST', 'https://qauto.forstudy.space/api/auth/signin', userCreds).then((response) => {
            const headers = response.headers;
            const cookie = headers['set-cookie'][1];
            const cookieArray = cookie.split('\n');
            for (const cookie of cookieArray) {
                if (cookie.trim().startsWith('sid=')) {
                    sid = (cookie.trim().split('=')[1]).split(';')[0];
                    break;
                }
            }
            cy.log(sid);
        })

    })

    it.only('Get cars', () => {
        cy.request({
            method: 'GET',
            url: 'https://qauto.forstudy.space/api/cars',
            headers: {
                Cookie: `sid=${sid}`,
            },
        }).then((response) => {
            cy.log(JSON.stringify(response.body.data))
            expect(response.status).to.equal(200);
        });
    })

    it.only('Get cars 2', () => {
        cy.request({
            method: 'GET',
            url: 'https://qauto.forstudy.space/api/cars',
            headers: {
                Cookie: `sid=${sid}`,
            },
        }).then((response) => {
            cy.log(JSON.stringify(response.body.data))
            expect(response.status).to.equal(200);
        });
    })

    it.only('Get cars 3', () => {
        cy.request({
            method: 'GET',
            url: 'https://qauto.forstudy.space/api/cars',
            headers: {
                Cookie: `sid=${sid}`,
            },
        }).then((response) => {
            cy.log(JSON.stringify(response.body.data))
            expect(response.status).to.equal(200);
        });
    })




})
