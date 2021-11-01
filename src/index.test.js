import {expect} from 'chai'; // Mocha doesn't come with assertion library. Expect style that comes with Chai.
import jsdom from "jsdom";
import fs from 'fs'; //interact with file sysem, comes with node

describe('Our first test', () => {
    it('should pass', () => {
        expect(true).to.equal(true);
    });
});

describe('index.html', () => {
    it('should say hello', () => {
        const index = fs.readFileSync("./src/index.html", "utf-8");
        const {JSDOM} = jsdom;
        const dom = new JSDOM(index);
        const h1 = dom.window.document.getElementsByTagName("h1")[0];
        expect(h1.innerHTML).to.equal("John Hottinger Javascript Develpment Environment");
        dom.window.close();
    });
});
