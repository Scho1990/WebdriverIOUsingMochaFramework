const elementUtil = require('../util/elementUtil')
class DashboardPage{

    get dashboardPageHeaderTitle(){return $('h1.private-page__title')}
    get contactsPrimaryMenu(){return $$('div.desktop-nav-left-container>div>div> ul > li > a')}
    get parentPrimaryMenu(){return $('div.desktop-nav-left-container>div>div>ul.primary-links')}
    get childPrimaryMenu(){return this.parentPrimaryMenu.$$('li>a')}

    doGetDashboardPageHeaderTitle(){
        return elementUtil.doGetText(this.dashboardPageHeaderTitle)
    }
     doClickOnPrimaryMenu(text){
        // parentPrimaryMenu.waitForDisplayed()
        return this.childPrimaryMenu.filter(element => {
            console.log(element.getText());
            if(element.getText()===text){
                element.click();
            }
        });
        
    }

}
module.exports = new DashboardPage()