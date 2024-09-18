import pet from '../fixtures/petAlterado.json';

it('GET Pet', () => {
  cy.request({
    method: 'GET',
    url: `/pet/${pet.id}`
  }).then(({ status, body }) => {

    expect(status).to.eq(200);
    expect(body.id).to.eq(pet.id);
    expect(body.name).to.eq(pet.name);
    expect(body.category.id).to.eq(pet.category.id);
    expect(body.category.name).to.eq(pet.category.name);
    expect(body.tags[0].name).to.eq(pet.tags[0].name);
    expect(body.tags[0].id).to.eq(pet.tags[0].id);
    expect(body.status).to.eq(pet.status);
  });
});



