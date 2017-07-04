import { AddressBookAngularMaterialDesignUiPage } from './app.po';

describe('address-book-angular-material-design-ui App', () => {
  let page: AddressBookAngularMaterialDesignUiPage;

  beforeEach(() => {
    page = new AddressBookAngularMaterialDesignUiPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
