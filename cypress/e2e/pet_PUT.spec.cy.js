import petAlterado from '../fixtures/petAlterado.json';

it('PUT Pet', () => {
    cy.request({
        method: 'PUT',
        url: '/pet',
        body: petAlterado
    }).then(({ status, body }) => {
        expect(status).to.eq(200);
        expect(body.id).to.eq(petAlterado.id);
        expect(body.name).to.eq(petAlterado.name);
        expect(body.category.id).to.eq(petAlterado.category.id);
        expect(body.category.name).to.eq(petAlterado.category.name);
        expect(body.tags[0].name).to.eq(petAlterado.tags[0].name);
        expect(body.tags[0].id).to.eq(petAlterado.tags[0].id);
        expect(body.status).to.eq(petAlterado.status);
    });
});