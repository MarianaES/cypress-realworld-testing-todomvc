describe("React TodoMVC", () => {
  it("can add a single todo", () => {
    cy.visit("http://localhost:8888")
    cy.get(".new-todo").type("Buy milk{enter}")
    cy.get(".todo-list li").should("have.length", 1)
  })
})
