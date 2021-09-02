describe('Heading text', () => {
    it('should click on logo to return to homepage', () => {
        cy.visit('https://www.amazon.fr/gp/bestsellers/?ref_=nav_cs_bestsellers_382bd694910d4dd09a19cdaf01ec3091');
        
        cy.get('#nav-logo-sprites')
            .click();
    });
    
    it('should click on accept cookie button', () => {
        cy.get('#a-autoid-0')
            .click();
    });
    
    it('should open ebook section', () => {
        cy.get('a.nav-a:nth-child(11)')
            .click();
    });
});
