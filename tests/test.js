const { getKittenByAxios } = require('..');
const axios = require('axios');

jest.mock('axios');

describe('', () => {
  it('Wykonano zapytanie Axios GET', async () => {
    getKittenByAxios()
    expect(axios.get).toHaveBeenCalledTimes(1);
  });

  it('Wykonano zapytanie pod własciwy adres', async () => {
    getKittenByAxios()
    expect(axios.get).toHaveBeenCalledWith('https://api.thecatapi.com/v1/images/search');
  });
});
