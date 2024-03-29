import { createBrowserRouter } from 'react-router-dom';
import Root from './Root';
import {
  Home,
  NotFound,
  MajorTopic,
  SubTopic,
  Bookmark,
  SearchResults,
  Profile,
} from './pages';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <NotFound />,
    children: [
      { path: '/', element: <Home />, index: true },
      {
        path: '/topics/:major',
        element: <MajorTopic />,
      },
      {
        path: '/topics/:major/:sub',
        element: <SubTopic />,
      },
      { path: '/bookmark', element: <Bookmark /> },
      { path: '/search/:query', element: <SearchResults /> },
      { path: '/profile/:id', element: <Profile /> },
    ],
  },
]);
