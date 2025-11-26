import type { RouteObject } from 'react-router-dom'; // Импорт типа из react-router-dom
import { ROUTE_PATHS } from './routesPath';

// Определяем тип для маршрута с мета-информацией
interface RouteMeta {
    title?: string;
    description?: string;
}

interface AppRoute extends Omit<RouteObject, 'children'> {
    meta?: RouteMeta;
}

// Массив маршрутов
export const routes: AppRoute[] = [
    // Добавь новые маршруты сюда, например:
    // {
    //   path: ROUTE_PATHS.CONTACT,
    //   element: <Contact />,
    //   meta: { title: 'Контакты' },
    // },
];