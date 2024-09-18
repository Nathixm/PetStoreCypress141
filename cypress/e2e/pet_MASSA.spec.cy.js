import listaPets from '../fixtures/listaPets.json';

listaPets.forEach((element) => {
    it(`POST Pet Data Driven - ${element.name}`, () => {
        cy.request({
            method: 'POST',
            url: '/pet',
            body: element
        }).then(({ status, body }) => {
            expect(status).to.eq(200);
            expect(body.id).to.eq(element.id);
            expect(body.name).to.eq(element.name);
            expect(body.category.id).to.eq(element.category.id);
            expect(body.category.name).to.eq(element.category.name);
            expect(body.tags[0].name).to.eq(element.tags[0].name);
            expect(body.tags[0].id).to.eq(element.tags[0].id);
            expect(body.status).to.eq(element.status);
        });
    });
});

