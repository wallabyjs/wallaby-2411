describe('HelloWorld.vue', () => {
  it('actions', () => {
    const spy = sinon.spy();
    spy('Hello');
    expect(spy).to.have.been.calledWith("Hello");
    expect(spy.calledWith("Hello")).to.be.ok;
  });
});
