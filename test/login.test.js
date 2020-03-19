const loginPage = require('../pages/login.page')
const dashboardPage = require('../pages/dashboard.page')
const configData = require('../config')
const constants = require('../constants')

describe('login page feature test',function(){
   
    it('verify login page title',function(){
        browser.url('/')
        browser.maximizeWindow()
        browser.deleteAllCookies()
        const title = loginPage.getPageTitle(constants.LOGIN_PAGE_TITLE)
        console.log('Login Page Title is: ',title)
        assert.equal(constants.LOGIN_PAGE_TITLE,title,'Login page title is not present')
    })

    it('verify signup link exist',function(){
        const isSignupExist = loginPage.isSignUpLinkExist()
        assert.equal(true,isSignupExist,'SignUp link is not exist')
    })

    it('verify user login successfully',function(){
        loginPage.doLogin(configData.username,configData.password)
        const dashboardPageHeaderTitle = dashboardPage.doGetDashboardPageHeaderTitle()
        assert.equal(constants.DASHBOARD_PAGE_TITLE,dashboardPageHeaderTitle,'Dashboard Page is not showing after successful login')
    })
});