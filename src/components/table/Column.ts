
interface Column {
    id: 'name' | 'role' | 'authority' | 'actions';
    label: string;
    minWidth?: number;
    align?: 'center';
    format?: (value: number) => string;
}
export const columns: readonly Column[] = [
    { id: 'name', label: 'Name', minWidth: 537 },
    { id: 'role', label: 'Role', minWidth: 172 },
    {
        id: 'authority',
        label: 'Reporting Authority',
        minWidth: 172,
        align: 'center',
        format: (value: number) => value.toLocaleString('en-US'),
    },
    {
        id: 'actions',
        label: 'Actions',
        minWidth: 100,
        align: 'center',
        format: (value: number) => value.toLocaleString('en-US'),
    },
];
