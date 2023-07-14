import * as vscode from 'vscode';
import { expect } from 'chai';

suite('Extension Test Suite', () => {
    vscode.window.showInformationMessage('Start all tests.');

    test('Sample test', () => {
        const arrayUnderTest = [1, 2, 3];
        expect(arrayUnderTest).not.to.include(5);
        expect(arrayUnderTest).not.to.include(0);
	});
	    test('Failure Test', () => {
           const arrayUnderTest = [1, 2, 3];
        expect(arrayUnderTest).to.include(4); // This will fail
    });
});
