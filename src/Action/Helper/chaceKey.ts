// namespace
export const LIST = 'list';
export const AREA = 'area';

const createUsersApiKey = (name: string) => `${LIST}/${name}`;

export const GET_LIST_API = createUsersApiKey('get-list-api');
export const GET_LIST_AREA = createUsersApiKey('get-area-api');

