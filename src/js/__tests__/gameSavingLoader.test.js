import GameSavingLoader from '../gameSavingLoader';

test('check loader', async () => {
  const data = '{"id":9,"created":1546300800,"userInfo":{"id":1,name":"Hitman","level":10,"points":2000}}';
  const received = await GameSavingLoader.load();
  expect(received).toEqual(data);
});