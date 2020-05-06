import chai, { expect } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';

chai.use(sinonChai);

window.chai = chai;
window.sinon = sinon;
window.expect = expect;