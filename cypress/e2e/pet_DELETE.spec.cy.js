import pet from '../fixtures/pet.json';

it('DELETE Pet', () => {
    cy.request({
        method: 'DELETE',
        url: `/pet/${pet.id}`       
    }).then(({ status, body }) => {
        expect(status).to.eq(200);
        expect(body.code).to.eq(200);
        expect(body.type).to.eq('unknown');
        expect(body.message).to.eq(`${pet.id}`);
    });
});