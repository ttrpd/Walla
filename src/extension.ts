import {syllable} from 'syllable';
import * as vscode from 'vscode';

vscode.languages.registerHoverProvider("walla", {
    provideHover(document, position, token) {
        const wordRange = document.getWordRangeAtPosition(position);
        const word = document.getText(wordRange);
        if (!word) {
            return null;
        }
        return {
            contents: [syllable(word).toString()+" syllables"]
        };
    }
});
export function activate(context: vscode.ExtensionContext) {
    vscode.window.showInformationMessage("Walla extension activated");
	let formatDisposable = vscode.commands.registerCommand('walla.format', () => {
		vscode.window.showInformationMessage("formatting for readability");
	});

	context.subscriptions.push(formatDisposable);
}

// This method is called when your extension is deactivated
export function deactivate() {}
