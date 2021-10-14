// describe widget configuration and saving to a global variable for future use
var configuration = {
  from: 'ETH',
  to: '0x8a3d77e9d6968b780564936d15b09805827c21fa',
  fromChain: 'ETH',
  toChain: 'ETH',
  amount: 1,
  iframe: 'horizontal',
  hideSelectionFrom: false,
  hideSelectionTo: false,
  theme: 'dark',
  background: '#05050f',
  injectTokens: {
      eth: ['0x8a3d77e9d6968b780564936d15B09805827C21fa']
  }
}

// prevent accidental changes to the object, for example, when re-creating a widget for another theme
Object.freeze(configuration);
// create widget
rubicWidget.init(configuration);
