import GameSavingLoader from '../gameSavingLoader';
import GameSaving from "../gameSaving";
import UserInfo from "../userInfo";

test('check loader', async () => {
  const userInfo = new UserInfo(1,"Hitman",10,2000);
  const data = new GameSaving(9, 1546300800, userInfo);
  const received = await GameSavingLoader.load();
  expect(received).toEqual(data);
});

test('check instance of return', async () => {
  const received = await GameSavingLoader.load();
  const isGameSaving = received instanceof GameSaving;
  expect(true).toEqual(isGameSaving);
});