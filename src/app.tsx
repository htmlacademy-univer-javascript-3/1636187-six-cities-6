import MainPage from './pages/main/main.page';

export type TMainPageProps = {
  cardQuantity: number;
};

export const App = ({ cardQuantity }: TMainPageProps) => (
  <MainPage cardQuantity={cardQuantity} />
);
