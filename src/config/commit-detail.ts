import { QuickPickItem, QuickPickOptions } from 'vscode';
import { localize } from 'vscode-nls-i18n';
import { getConfig } from './commit-setting';

/**
 * @description git commit detail 提交信息的详情
 */
export interface CommitDetailType extends QuickPickItem {
    label?: string;
    key?: string | number;
    description?: string;
    detail?: string;
    isEdit?: boolean;
}
//最大的 subject 限制字数 Max subject characters
export const MaxSubjectCharacters = getConfig<number>('MaxSubjectCharacters') || 20;

export const FillSubjectWithCurrent = getConfig<boolean>('FillSubjectWithCurrent') || false;

export function GetCommitDetailType() {
    const CommitDetailType: Array<CommitDetailType> = [
        {
            label: '<Scope>',
            key: 'scope',
            description: localize('extension.commitDetailType.scope.description'),
            detail: localize('extension.commitDetailType.scope.detail'),
            isEdit: false,
        },
        {
            label: '<Subject>',
            key: 'subject',
            description: localize('extension.commitDetailType.subject.description'),
            detail: localize(
                'extension.commitDetailType.subject.detail',
                MaxSubjectCharacters.toString(),
            ),
            isEdit: false,
        },
        {
            label: '<Body>',
            key: 'body',
            description: localize('extension.commitDetailType.body.description'),
            detail: localize('extension.commitDetailType.body.detail'),
            isEdit: false,
        },
        {
            label: '<Footer>',
            key: 'footer',
            description: localize('extension.commitDetailType.footer.description'),
            detail: localize('extension.commitDetailType.footer.detail'),
            isEdit: false,
        },
        {
            label: 'Complete',
            key: 'complete',
            detail: localize('extension.commitDetailType.complete.detail'),
        },
        {
            label: 'Select template for commit',
            key: 'template',
            detail: localize('extension.commitDetailType.template.detail'),
        },
        {
            label: 'Copy',
            key: 'copy',
            detail: localize('extension.commitDetailType.message.copy'),
        },
        {
            label: 'Back',
            key: 'back',
            detail: localize('extension.commitDetailType.back.detail'),
        },
    ];

    return CommitDetailType;
}

export const CommitDetailQuickPickOptions: QuickPickOptions = {
    matchOnDescription: true,
    matchOnDetail: true,
    ignoreFocusOut: true,
};
