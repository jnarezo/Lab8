describe('Party Horn Tests', () => {
  beforeEach(() => {
    cy.visit('http://127.0.0.1:5500/');
  });

  it('First Test', () => {
    expect(true).to.equal(true);
  });
  
  it('changes slider when vol input changes', () => {
    cy.get('#volume-number').clear().type('75');
    cy.get('#volume-slider').then(($el) => {
      expect($el).to.have.value(75);
    });
  });

  it('changes vol input when slider changes', () => {
    cy.get('#volume-slider').invoke('val', 33).trigger('input');
    cy.get('#volume-number').then(($el) => {
      expect($el).to.have.value(33);
    });
  });

  it('changes <audio> volume when slider changes', () => {
    cy.get('#volume-slider').invoke('val', 33).trigger('input');
    cy.get('#horn-sound').then(($el) => {
      expect($el).to.have.prop('volume', 0.33);
    });
  });

  it('volume image goes from 2 to max from vol 66 to 67', () => {
    cy.get('#volume-slider').invoke('val', 66).trigger('input').invoke('val', 77).trigger('input');
    cy.get('#volume-image').then(($el) => {
      expect($el).to.have.attr('src', './assets/media/icons/volume-level-3.svg')
    });
  });

  it('volume image goes from 1 to 2 from vol 33 to 34', () => {
    cy.get('#volume-slider').invoke('val', 33).trigger('input').invoke('val', 34).trigger('input');
    cy.get('#volume-image').then(($el) => {
      expect($el).to.have.attr('src', './assets/media/icons/volume-level-2.svg')
    });
  });

  it('volume image goes from 0 to 1 from vol 0 to 1', () => {
    cy.get('#volume-slider').invoke('val', 0).trigger('input').invoke('val', 1).trigger('input');
    cy.get('#volume-image').then(($el) => {
      expect($el).to.have.attr('src', './assets/media/icons/volume-level-1.svg')
    });
  });
  
  it('disables honk button when vol input is empty', () => {
    cy.get('#volume-number').clear();
    cy.get('#honk-btn').then(($el) => {
      expect($el).to.have.attr('disabled');
    });
  });

  it('disables honk button when vol input is non-number', () => {
    cy.get('#volume-number').clear().type('-');
    cy.get('#honk-btn').then(($el) => {
      expect($el).to.have.attr('disabled');
    });
  });

  it('displays error if vol input is < 0', () => {
    cy.get('#volume-number').clear().type('-20');
    cy.get('#volume-number:invalid').then(($el) => {
      expect($el).to.exist;
    });
  });

  it('displays error if vol input is > 100', () => {
    cy.get('#volume-number').clear().type('200');
    cy.get('#volume-number:invalid').then(($el) => {
      expect($el).to.exist;
    });
  });
});