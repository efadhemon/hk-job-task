import { AppProvider } from '@shared/context';
import AppRoutes from '@shared/routes';

const App = () => {
  return (
    <AppProvider>
      <AppRoutes />
    </AppProvider>
  );
};

export default App;
