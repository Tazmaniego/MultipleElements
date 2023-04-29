import Page from './page.js';

class elementPage extends Page{

    get addButton() {
        return $('//*[@id="content"]/div/button');
    }

    get elementButton1() {
        return $('/html/body/div[2]/div/div/div/button[1]');
    }

    get elementButton2() {
        return $('/html/body/div[2]/div/div/div/button[2]');
    }

    get elementButton3() {
        return $('/html/body/div[2]/div/div/div/button[3]');
    }

    get elementButton4() {
        return $('/html/body/div[2]/div/div/div/button[4]');
    }

    open() {
        return super.open('add_remove_elements/');
    }

}

export default new elementPage();