import { workspace } from 'vscode';

export const getConfig = <T>(key: string): T => {
    return workspace.getConfiguration('GitCommitPlugin').get<T>(key);
};