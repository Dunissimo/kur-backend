export enum UserRole {
    MANAGER = 'manager',
    DISPATCHER = 'dispatcher',
    FOREMAN = 'master',
    ADMIN = 'admin',
}

export const ROLE_LABELS: Record<UserRole, string> = {
    [UserRole.MANAGER]: 'Менеджер по продажам',
    [UserRole.DISPATCHER]: 'Диспетчер производства',
    [UserRole.FOREMAN]: 'Мастер цеха',
    [UserRole.ADMIN]: 'Администратор',
};
