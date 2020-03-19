const loginPage = require('../pages/login.page')
const dashboardPage = require('../pages/dashboard.page')
const configData = require('../config')
const constants = require('../constants')

describe('dashboard feature test',function(){
it('verify user is able to click on primary menu',function(){
    browser.url('/')
    browser.maximizeWindow()
    loginPage.doLogin(configData.username,configData.password)
    dashboardPage.doClickOnPrimaryMenu('Automation');

})

});